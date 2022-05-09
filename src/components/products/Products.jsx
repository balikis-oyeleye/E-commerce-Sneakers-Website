import React from "react";
import "./products.css";
import { Data } from "../data";
import { Card, Row, Col } from "react-bootstrap";

const Products = () => {
  const products = Data.map((item) => {
    return (
      <Col lg="4" md="6" xs="12">
        <Card style={{ width: "18rem" }} key={item}>
          <Card.Img src={item.image} />
          <Card.Body>
            <Card.Title>
              <a href="#img">{item.name}</a>
            </Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <button className="btn btn-card">Add To Cart</button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return <Row>{products}</Row>;
};

export default Products;
