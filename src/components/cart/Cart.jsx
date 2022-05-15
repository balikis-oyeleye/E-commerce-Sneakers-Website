import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useGlobalContext } from "../../context/Context";
import { FaTrash } from "react-icons/fa";
import "./cart.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useGlobalContext();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((prev, current) => {
        const itemTotal = current.price * current.qty;
        prev += itemTotal;
        return prev;
      }, 0)
    );
  }, [cart]);

  //  prev + Number(current.price);
  let cartList = cart.map((item) => {
    return (
      <div key={item.id} className="cart_main shadow-md">
        <div className="cart_details">
          <img src={item.image} alt="cart" />
          <div className="">
            <h4>{item.name}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              culpa.
            </p>
          </div>
          <h6 className="ms-md-auto">${item.price}</h6>
        </div>
        <div className="cart_amount">
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item,
              });
            }}
            className="btn btn-remove"
          >
            <FaTrash /> REMOVE
          </button>
          <div className="cart_amount-btn">
            <button className="btn-decrease">-</button>
            <span> {item.qty}</span>
            <button
              onClick={() => {
                dispatch({
                  type: "INCREASE_ITEM",
                  payload: item,
                });
              }}
              className="btn-increase"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Row>
      <Col lg="8" xs="12">
        <div style={{ width: "100%" }}>{cartList}</div>
      </Col>
      <Col lg="4" xs="12" className="cart_right">
        <div style={{ width: "100%" }} className="cart_right-main">
          <h4>CART SUMMARY</h4>
          <p>Subtotal: ${totalPrice}</p>
          <button className="btn btn-card">CHECKOUT (${totalPrice})</button>
        </div>
      </Col>
    </Row>
  );
};

export default Cart;
