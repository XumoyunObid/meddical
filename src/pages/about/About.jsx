import React from 'react'
import './about.css'
import img2 from '../../assets/AboutImg/aboute-img2.svg'

const AboutCard2 = () => {
  try {
    return <div className='about-card-2'>
      <div className="about-card-img"> <img src={img2} alt="" /> </div>
      <div className="about-card-title">
        <p className="welcome">Welcome to Hospital name</p>
        <p className="bestCare">Best Care for Your <br /> Good Health</p>
        <ul>
          <li>A Passion for Healing</li> <li>5-Star Care</li>
          <li>All our best</li> <li>Believe in Us</li>
          <li>Always Caring</li> <li>A Legacy of Excellence</li>
        </ul>
        <p className='lorem1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque <br />
          placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque <br />
          tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur <br />
          proin massa in. Consequat faucibus porttitor enim et.
        </p>
        <p className='lorem2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque <br />
          placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur <br /> proin massa in.
        </p>
      </div>
    </div>
  } catch (e) { console.log(e); }
}

const About = () => {
  try {
    return <>
      <AboutCard2 />
    </>
  } catch (e) { console.log(e); }
}

export default About
