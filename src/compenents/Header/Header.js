import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useStateValue } from '../contexts/StateProvider'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
function Header() {
  const [{ basket, user }, dispatch] = useStateValue()
  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/" className="header__clearlink">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>

      <div onClick={handleAuthentication} className="header_option">
        <span className="lineOne">Hello {!user ? 'Guest' : user.email}</span>
        
        <Link to={!user && '/login'} className="header__clearlink">
          <span className="lineTwo"> {user ? 'Sign Out' : 'Sign In'}</span>
        </Link>

      </div>
      <Link to="/orders" className="header__clearlink">
        <div className="header_option">
          <span className="lineOne">Returns</span>
          <span className="lineTwo">& Orders</span>
        </div>
      </Link>
      <div className="header_option">
        <span className="lineOne">Your</span>
        <span className="lineTwo">Prime</span>
      </div>
      <div className="cart">
        <span className="cart_span">{basket.length}</span>
        <Link to="/checkout" className="header__clearlink">
          <ShoppingCartIcon className="cart_shop" />
        </Link>
      </div>
    </div>
  )
}
export default Header
