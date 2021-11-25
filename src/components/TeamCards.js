import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import IMG from "../assets/blank.png";
export default class TeamCards extends Component {
  render() {
    return (
      <div style={{ padding: "2em" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img src={IMG} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
