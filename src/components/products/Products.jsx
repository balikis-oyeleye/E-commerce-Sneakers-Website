import React from "react";
import "./products.css";
import { useGlobalContext } from "../../context/Context";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  const { state } = useGlobalContext();
  const products = state.products.map((item) => {
    return (
      <Col lg="4" md="6" xs="12" key={item.id}>
        <Product item={item} />
      </Col>
    );
  });

  return <Row>{products}</Row>;
};

export default Products;
