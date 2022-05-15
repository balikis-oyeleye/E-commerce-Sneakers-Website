import React from "react";
import "./products.css";
import { useGlobalContext } from "../../context/Context";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  const {
    state,
    productFiltered: { searchQuery },
  } = useGlobalContext();

  const showFilterProducts = () => {
    let filterProducts = state.products;
    if (searchQuery) {
      filterProducts = filterProducts.filter((element) =>
        element.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filterProducts;
  };

  const products = showFilterProducts().map((item) => {
    return (
      <Col lg="4" md="6" xs="12" key={item.id}>
        <Product item={item} />
      </Col>
    );
  });

  return <Row>{products}</Row>;
};

export default Products;
