import React from "react";
import "./products.css";
import { CartState } from "../../context/Context";
import { Card, Row, Col } from "react-bootstrap";
import Rating from "../Rating";

const Products = () => {
  const { state } = CartState();
  const products = state.products.map((item) => {
    return (
      <Col lg="4" md="6" xs="12">
        <Card style={{ width: "18rem" }} key={item}>
          <Card.Img src={item.image} />
          <Card.Body>
            <Card.Title>
              <a href="#img">{item.name}</a>
            </Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Card.Text>
              <Rating value={item.rating} />
            </Card.Text>
            <button className="btn btn-card">Add To Cart</button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return <Row>{products}</Row>;
};

export default Products;
