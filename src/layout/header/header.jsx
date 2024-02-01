import React from 'react'
import logo from '../../assets/header/logo.svg'
import location from '../../assets/header/location.svg'
import tel from '../../assets/header/tel.svg'
import './header.css'

export const Header = () => {
  try {
    return <header className='header'>
      <div className="header-top">
        <div className="header-logo"> <img src={logo} alt="Logo" /> </div>
        <ul className="header-icons">
          <li>
            <img src={tel} alt="" />
            <div>
              <p>Emergency</p>
              <p className='span'>(237) 681-812-255</p>
            </div>
          </li>
          <li>
            <i class="fa-regular fa-clock"></i>
            <div>
              <p>Work Hour</p>
              <p className='span'>09:00 - 20:00 Everyday</p>
            </div>
          </li>
          <li>
            <img src={location} alt="" />
            <div>
              <p>Location</p>
              <p className='span'>0123 Some Place</p>
            </div>
          </li>
        </ul>
      </div>
    </header>
  } catch (e) {console.log(e);}
}