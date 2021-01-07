import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/CasesTable.css";

const CasesTable = ({ states }) => {
  const statesCases = states
    .sort((a, b) => b.cases - a.cases)
    .map((state) => {
      return (
        <ListGroup.Item
          className="d-flex justify-content-between"
          key={state.state}
        >
          {state.state}
          <p>{state.cases}</p>
        </ListGroup.Item>
      );
    });
  return (
    <ListGroup className="Cases-table">
      <ListGroup.Item className="d-flex justify-content-between">
        <h3>State</h3>
        <h3>Cases</h3>
      </ListGroup.Item>
      {statesCases}
    </ListGroup>
  );
};

export default CasesTable;
