import React from 'react'
import './about.css'
import img2 from '../../assets/AboutImg/aboute-img2.svg'
import johnImg from '../../assets/AboutImg/john-img.svg'

export const AboutHero = ({ pageName, pageTitle }) => {
  try {
    return <div className="about-hero">
      <p className='about-hero-text'>Home / <span> {pageName} </span></p>
      <h2 className='about-ero-title'>{pageTitle}</h2>
    </div>
  } catch (e) {console.log(e);}
}
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
export const JohnDoe = () => {
  try {
    return <div className="johnDoe-div">
      <div className="john-img"> <img src={johnImg} alt="" /> </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Quisque placerat scelerisque tortor ornare ornare. Quisque <br />
        placerat scelerisque felis vitae tortor augue. Velit nascetur <br />
        Consequat faucibus porttitor enim et.
      </p>
      <p className='line'></p>
      <h5>John Doe</h5>
      <div className="threeCircle">
        <p className='circle1 slider-circle'></p>
        <p className='circle2 slider-circle'></p>
        <p className='circle3 slider-circle'></p>
      </div>
    </div>
  } catch (e) { console.log(e); }
}

const About = () => {
  try {
    return <>
      <AboutHero pageName={'About'} pageTitle={'About us'} />
      <AboutCard2 />
      <JohnDoe />
    </>
  } catch (e) { console.log(e); }
}
export default About