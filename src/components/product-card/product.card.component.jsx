import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <div className='descr'>
          <div className='name'>{name}</div>
          <div className='price'>{price} $</div>
        </div>
        <div className='bag'>
          <div className='sizes'>
            <button className='size'>41 EU</button>
            <button className='size'>43 EU</button>
          </div>
          <button className='add' onClick={addProductToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
