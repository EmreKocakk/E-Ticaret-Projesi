import React from 'react'
import { Link } from 'react-router-dom'
import { FaStore } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import Badge from '@mui/material/Badge';
import '../css/Header.css'
import { useSelector } from 'react-redux';

function Header() {

  const {basket} = useSelector(store => store.app)

  return (
    <div style={{width:"100%", backgroundColor:"#BC68CB"}}>
      <div className='header-wrap'>
        <div className='header-left'>
          <FaStore className='link icons' />
          <Link to="/" className='link'>HOME</Link>
          <Link to="/products" className='link'>PRODUCT</Link>
          <Link to="/popular" className='link'>FAVORITES</Link>
        </div>
        <div className='header-right'>
          <Badge badgeContent={basket.length} color='primary'>
            <Link to="/basket"><FaBasketShopping className='link icons' /></Link>
          </Badge>
          <Link className='link'>LOGIN</Link>
          <Link className='link'>REGISTER</Link>
        </div>
      </div>
    </div>
  )
}

export default Header