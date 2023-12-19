import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import Genre from "./Genre";
import MyCard from "./MyCard";

class AllTheBooks extends Component {
  state = {
    data: fantasy,
  };
  handleDataChange = (data) => {
    this.setState({ data });
    console.log(this.state.data);
  };

  render() {
    return (
      <>
        <Genre data={this.state.data} onDataChange={this.handleDataChange} />

        <Container>
          <Row xs={2} lg={4}>
            {this.state.data.map((book) => {
              return (
                <Col>
                  <MyCard img={book.img} title={book.title} price={book.price} />;
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}
export default AllTheBooks;
