import "./cart-icon.styles.jsx";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount } from "../../store/cart/cart.selector.js";

const CartIcon = ({ onClick }) => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const cartCount = useSelector(selectCartCount);

  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
