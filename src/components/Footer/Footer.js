import React from 'react'
import '../Header/Header.css';
import './Footer.css';
import instagram from '../../resources/whiteInsta.svg';
import twitter from '../../resources/whiteTwitter.svg';
import facebook from '../../resources/whiteFacebook.svg';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='link-parent border-none' >
        <div className='link-container prevent-wrap'>
          <div className='link-styling'>
            <span className='logo border-none'>L</span>
            <a>News</a>
            <a>Sex</a>
            <a>Special Features</a>
            <a>Technology</a>
            <a>Sport</a>
            <a className='border-none'>Analysis</a>
          </div>
          <div className='weather-styling'>
            <div className='footer-content'>
              <span className='icon-container'>
                <span className='styling'>
                  Project @2023
                </span>
                <span className='icon-background'>
                  <img src={facebook} />
                </span>
                <span className='icon-background'>
                  <img src={twitter} />
                </span>
                <span className='icon-background'>
                  <img src={instagram} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer