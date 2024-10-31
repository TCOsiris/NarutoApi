import React, { useEffect } from 'react';
import './Header.css';
import NavBar from '../navBar/NavBar';

const Header = () => {

  return (
    <div className='d-flex flex-row mb-3'>
            <img id='eye' className='imagen' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdD6Twm_1X0RAqnGUggYKQhnAtacGKPR4VA&s" alt="" />
      <h1 className='titulo'>NATURO SHIPUDEN</h1>
      <NavBar />
    </div>
  );
};

export default Header;