import React from "react";
import Card from "react-bootstrap/Card";

const InfoCard = () => {
  return (
    <Card style={{ height: "300px" }} border="danger">
      <Card.Header className="text-danger font-weight-bold">
        Infected
      </Card.Header>
      <Card.Body>
        <Card.Title className="font-weight-bold">3000</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
