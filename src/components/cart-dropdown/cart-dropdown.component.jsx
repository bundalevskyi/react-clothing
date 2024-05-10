import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import "./cart-dropdown.styles.scss";
import { useEffect, useRef, useState } from "react";

const CartDropdown = ({ isOpen, onClose }) => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const handleLink = () => {
    navigate("/chekout");
  };

  return (
    <>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}></div>
      <div className={`cart-dropdown-container ${isOpen ? "open" : ""}`}>
        <div className='cart-items'>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <Button onClick={handleLink}>GO TO CHECKOUT</Button>
      </div>
    </>
  );
};

export default CartDropdown;
