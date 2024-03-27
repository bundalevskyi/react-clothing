


import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div onClick={removeItemHandler} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div onClick={addItemHandler} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div onClick={clearItemHandler} className='remove-button'>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
