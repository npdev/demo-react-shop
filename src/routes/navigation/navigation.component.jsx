import {Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import {UserContext} from '../../context/user.context';
import {CartContext} from '../../context/cart.context';

import {signOutUser} from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/'>
          <CrownLogo className='Logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation;
