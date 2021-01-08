import React from "react";
import Card from "react-bootstrap/Card";

const InfoCard = ({ title, cases, today, text, color }) => {
  return (
    <Card style={{ height: "250px" }} bg={color} text="light" className="my-4">
      <Card.Header>
        <h3>{title}</h3>
      </Card.Header>
      <Card.Body>
        <Card.Title className="font-weight-bold">{`Total: ${cases}`}</Card.Title>
        {today && <Card.Text className="my-4">{`Today: ${today}`}</Card.Text>}
        <Card.Text>{text} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
