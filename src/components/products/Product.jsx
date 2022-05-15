import React from "react";
import { useGlobalContext } from "../../context/Context";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = useGlobalContext();
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img src={item.image} />
        <Card.Body>
          <Card.Title>
            <a href="#img">{item.name}</a>
          </Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <Rating value={item.rating} />
          {
            // cart Functions start
            cart.some((x) => x.id === item.id) ? (
              <button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  });
                }}
                className="btn btn-card"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: item,
                  });
                }}
                className="btn btn-card"
              >
                Add To Cart
              </button>
              // cart function ends
            )
          }
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
