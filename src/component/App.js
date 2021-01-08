import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Alert from "react-bootstrap/Alert";
import CasesTable from "./CasesTable";
import InfoCard from "./InfoCard";

const App = () => {
  const [selectedStateData, setSelectedStateData] = useState({});
  const [state, setState] = useState("United States");

  const onSelectState = (val) => {
    setState(val);
  };

  useEffect(() => {
    const getAllStateData = async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries/usa?strict=true"
      );
      setSelectedStateData(response.data);
    };

    const getStateData = async () => {
      const response = await axios.get(
        `https://disease.sh/v3/covid-19/states/${state}`
      );
      setSelectedStateData(response.data);
    };

    state === "United States" ? getAllStateData() : getStateData();
  }, [state]);

  const location = selectedStateData.state
    ? selectedStateData.state
    : selectedStateData.country;
  return (
    <>
      <Container fluid className="mt-4">
        <Header selectState={onSelectState} state={state} />
        <Container className="my-4 ">
          <Alert variant="info" className="text-center">
            <h3>{state}</h3>
          </Alert>
        </Container>

        <Row>
          <Col xs={12} lg={8}>
            <Row>
              <Col sm={4}>
                <InfoCard
                  title="INFECTED "
                  cases={selectedStateData.cases}
                  today={selectedStateData.todayCases}
                  text={`Number Of  infected Cases From Covid 19 In ${location} `}
                  color="secondary"
                />
              </Col>
              <Col sm={4}>
                <InfoCard
                  title="RECOVERD"
                  cases={selectedStateData.recovered}
                  color="success"
                  text={`Number Of  Recovered Cases From Covid 19 In ${location} `}
                />
              </Col>
              <Col sm={4}>
                <InfoCard
                  title="DEATHS"
                  cases={selectedStateData.deaths}
                  today={selectedStateData.todayDeaths}
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
