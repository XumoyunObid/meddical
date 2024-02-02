import React from 'react'
import Phoneicon from './../../icons/phone-icon';

import Messaageicon from './../../icons/messaage-icon';
import Time from './../../icons/time';
import Locationicon from './../../icons/location-icon';

export const Touch = () => {
  return (
    <div className='touch'>
        <h1>Get in touch</h1>
        <h2>Contact</h2>
        <div className='touchCart'>
          <div className='touchCards'>
            <Phoneicon/>
            <h2>Emergency</h2>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>
          <div className='touchCards'>
          <Phoneicon/>
            <h2>Location</h2>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>
          <div className='touchCards'>
            <Messaageicon/>
            <h2>Email</h2>
            <p>fildineeesoe@gmil.com</p>
            <p>myebstudios@gmail.com</p>
          </div>
          <div className='touchCards'>
            <Time/>
            <h2>Working Hours</h2>
            <p>Mon-Sat 09:00-20:00</p>
            <p>Sunday Emergency only</p>
          </div>
          
        </div>
    </div>
  )
}

export default Touch
