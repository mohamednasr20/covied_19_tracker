import axios from "axios";
import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import "../styles/CasesTable.css";

const CasesTable = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountriesData = async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      setCountries(response.data);
    };

    getCountriesData();
  }, []);

  const countryCases = countries
    .sort((a, b) => b.cases - a.cases)
    .map((country) => {
      return (
        <ListGroup.Item
          className="d-flex justify-content-between"
          key={country.country}
        >
          <div>
            {" "}
            <img
              className="CasesTable_flag mr-2"
              src={country.countryInfo.flag}
              alt=""
            />
            {country.country}
          </div>
          <p>
            {country.cases}{" "}
            <Badge variant="info">
              <i className="fas fa-arrow-up"></i> {country.todayCases}
            </Badge>{" "}
          </p>
        </ListGroup.Item>
      );
    });
  return (
    <>
      <div className="d-flex justify-content-between p-4 bg-info text-light">
        <h4>Country</h4>
        <h4>Cases</h4>
      </div>
      <ListGroup className="CasesTable">{countryCases}</ListGroup>
    </>
  );
};

export default CasesTable;
