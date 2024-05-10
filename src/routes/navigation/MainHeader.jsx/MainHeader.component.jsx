import { Link } from "react-router-dom";
import CartIcon from "../../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../../components/cart-dropdown/cart-dropdown.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { signOutStart } from "../../../store/user/user.action";
import "./mainHeader.styles.scss";
import { useState } from "react";

const MainHeader = ({ variant }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const signOutUser = () => dispatch(signOutStart());

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`header ${isMenuOpen ? "active" : "header"}`}>
      <div className='header-wrapper'>
        <Link to={"/"} className='logo'>
          LOGO
        </Link>
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

export default MainHeader;
