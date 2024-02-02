import React from 'react'
import { AboutHero, JohnDoe } from '../about/About'

export const DoctorsCard = ()=> {
  try {
    return <div className="doctorsCard">
      
    </div>
  } catch (e) {console.log(e);}
}

export const Doctors = () => {
  return (
    <section className='doctors'>
      <AboutHero pageName={'Doctors'} pageTitle={'Our Doctors'} />
      <JohnDoe />
    </section>
  )
}