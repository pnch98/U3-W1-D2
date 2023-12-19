import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class MyCard extends Component {
  render() {
    return (
      <Card>
        <div className="overflow-hidden" style={{ height: "300px" }}>
          <Card.Img variant="top" src={this.props.img} />
        </div>
        <Card.Body style={{ height: "200px" }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.price}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MyCard;
