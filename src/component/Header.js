import React, { useState, useEffect } from "react";
import axios from "axios";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../styles/Header.css";

const Header = ({ selectState }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const getStatesData = async () => {
      const response = await axios.get("https://disease.sh/v3/covid-19/states");
      setStates(response.data);
    };

    getStatesData();
  }, []);

  const statesNames = states.map((state) => (
    <div key={state.state}>
      <NavDropdown.Item
        eventKey={state.state}
        onSelect={(eventKey) => selectState(eventKey)}
      >
        {state.state}
      </NavDropdown.Item>
      <NavDropdown.Divider />
    </div>
  ));

  return (
    <div className="d-flex py-4">
      <h1 className="text-info">Covid 19 Tracker</h1>
      <DropdownButton
        title="Select State"
        variant="info"
        className="ml-auto"
        defaultValue
      >
        <div className="Headr-dropdwon">
          <NavDropdown.Item
            eventKey="United States"
            onSelect={(eventKey) => selectState(eventKey)}
          >
            United States
          </NavDropdown.Item>
          <NavDropdown.Divider />
          {states.length && statesNames}
        </div>
      </DropdownButton>
    </div>
  );
};

export default Header;
