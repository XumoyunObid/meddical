import React from 'react'
import Phoneicon from './../../icons/phone-icon';
import Messaageicon from './../../icons/messaage-icon';
import Time from './../../icons/time';

const TouchCard = ({ icons:Icons, h2, text1, text2 }) => {
  return (
    <div className='touchCards'>
      <Icons />
      <h2>{h2}</h2>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  )
}


export const Touch = () => {
  try {
    return (
      <div className='touch'>
        <h1>Get in touch</h1>
        <h2 className='touch-h2'>Contact</h2>
        <div className='touchCart'>
          <TouchCard icons={Phoneicon} h2={'Emergency'} text1={'(237) 681-812-255'} text2={'(237) 666-331-894'} />
          <TouchCard icons={Phoneicon} h2={'Location'} text1={'0123 Some place'} text2={'9876 Some country'} />
          <TouchCard icons={Messaageicon} h2={'Email'} text1={'fildineeesoe@gmil.com'} text2={'myebstudios@gmail.com'} />
          <TouchCard icons={Time} h2={'Working Hours'} text1={'Mon-Sat 09:00-20:00'} text2={'Sunday Emergency only'} />
        </div>
      </div>
    )
  } catch (e) {console.log(e);}
}

export default Touch
