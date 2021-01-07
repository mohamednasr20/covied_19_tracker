import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import CasesTable from "./CasesTable";
import InfoCard from "./InfoCard";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://disease.sh/v3/covid-19/states");
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);

  const dataInfo = data.cases && (
    <div>
      <h3>Cases: {data.cases}</h3>``
    </div>
  );
  return (
    <>
      <Header states={data} />

      <Container fluid className="mt-4">
        <Row>
          <Col xs={8}>
            <Row>
              <Col sm={4}>
                <InfoCard />
              </Col>
              <Col sm={4}>
                <InfoCard />
              </Col>
              <Col sm={4}>
                <InfoCard />
              </Col>
            </Row>
          </Col>
          <Col xs={4}>
            <CasesTable states={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
