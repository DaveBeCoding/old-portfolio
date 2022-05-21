import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <div className='nav-item-1'>Home</div>
      <div className='nav-item-2'>Blog</div>
      <div className='nav-item-2'>About</div>
      <div className='nav-item-2'>Contact</div>
    </nav>
  );
};

export default Navbar;
