import "./cart-icon.styles.jsx";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.reducer.js";


const CartIcon = () => {



  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const  dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount)

  const isCartOpen = useSelector(selectIsCartOpen)



  const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
