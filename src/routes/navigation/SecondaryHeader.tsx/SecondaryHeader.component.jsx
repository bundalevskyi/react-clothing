import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../../components/cart-dropdown/cart-dropdown.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { signOutStart } from "../../../store/user/user.action";
import "./secondaryHeader.styles.scss";
import { useState } from "react";

const SecondaryHeader = ({ variant }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const signOutUser = () => dispatch(signOutStart());

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`headerBlack ${isMenuOpen ? "active" : "headerBlack"}`}>
      <div className='header-wrapperBlack '>
      <Link to={'/'} className='logo'>LOGO</Link>
        <div className='nav-links'>
          <Link to={"/shop"} className='nav-link'>
            SHOP
          </Link>

          {currentUser ? (
            <Link className='nav-link' as='span' onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon onClick={toggleMenu} />
          <CartDropdown isOpen={isMenuOpen} onClose={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
