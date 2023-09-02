import React from 'react'
import '../index.css';
// import bg from './images/Mask Group 7.svg';
import Logo from './images/logo.svg';
const Header = () => {
  return (
    <div className='header_container'>
        <div className='logo'>
           <img src={Logo} alt='logo' className='logo' />
        </div>
        <div className='menu'>
            <span className='home'>HOME</span>
            <span>ABOUT US</span>
            <span>OUR SERVICES</span>
        </div>
    </div>
  )
}

export default Header