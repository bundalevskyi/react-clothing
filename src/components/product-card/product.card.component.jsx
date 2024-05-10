import { useDispatch } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";
import { addItemToCart } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <div className='descr'>
          <div className='name'>{name}</div>
          <div className='price'>{price} $</div>
        </div>
        <div className="bag">
          <div className='sizes'>
            <button className='size'>41 EU</button>
            <button className='size'>43 EU</button>

          </div>
          <button className='add' onClick={addProductToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
