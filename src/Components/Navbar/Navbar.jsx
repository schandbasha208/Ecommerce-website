import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [menu, setMenu] = useState('shops')
  const { getTotalCartItems } = useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to='/'><img src={logo} onClick={() => setMenu('shops')} alt="" /></Link>{menu === 'shops' ? <hr /> : <></>}
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('shops')}><Link to='/'>Shops</Link>{menu === 'shops' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('mens')}><Link to='/mens'>Men</Link>{menu === 'mens' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('womens')}><Link to='/womens'>Women</Link>{menu === 'womens' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('kids')}><Link to='/kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar