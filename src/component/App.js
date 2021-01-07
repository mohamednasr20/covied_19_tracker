import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import CasesTable from "./CasesTable";
import InfoCard from "./InfoCard";

const App = () => {
  const [selectedState, setSelectedState] = useState({});
  const [state, setState] = useState("");

  useEffect(() => {
    const getAllStateData = async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries/usa?strict=true"
      );
      setSelectedState(response.data);
    };

    getAllStateData();
  }, []);

  const location = selectedState.state
    ? selectedState.state
    : selectedState.country;
  return (
    <>
      <Container fluid className="mt-4">
        <Header />

        <Row>
          <Col xs={12} lg={8}>
            <Row>
              <Col sm={4}>
                <InfoCard
                  title="INFECTED "
                  cases={selectedState.cases}
                  today={selectedState.todayCases}
                  text={`Number Of  infected Cases From Covid 19 In ${location} `}
                  color="secondary"
                />
              </Col>
              <Col sm={4}>
                <InfoCard
                  title="RECOVERD"
                  cases={selectedState.recovered}
                  color="success"
                  text={`Number Of  Recovered Cases From Covid 19 In ${location} `}
                />
              </Col>
              <Col sm={4}>
                <InfoCard
                  title="DEATHS"
                  cases={selectedState.deaths}
                  today={selectedState.todayDeaths}
                  color="danger"
                  text={`Number Of  Deaths From Covid 19 In ${location} `}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={4}>
            <CasesTable />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
