import React from 'react'
import './Header.css';
import instagram from '../../resources/insta.svg';
import twitter from '../../resources/twitter.svg';
import facebook from '../../resources/facebook.svg';

function Header() {
  return (
    <header>
      <div className='header-content'>
        <span className='head-line'>
          My logo
        </span>
        <span className='icon-container'>
          <span className='icon-background'>
            <img src={facebook} />
          </span>
          <span className='icon-background'>
            <img src={twitter} />
          </span>
          <span className='icon-background' >
            <img src={instagram} />
          </span>
          <button className='button-typography'>Subscribe for more </button>
        </span>
      </div>
    </header>
  )
}

export default Header