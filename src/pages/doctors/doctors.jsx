import React from 'react';
import { AboutHero, JohnDoe } from '../about/About';
import { ExportDoctorsCard } from '../home/Caredoctors';
import News from '../home/News';
import Touch from '../home/Touch';

export const Doctors = () => {
  return (
    <section className='doctors'>
      <AboutHero pageName={'Doctors'} pageTitle={'Our Doctors'} />
      <div className="ourDoctors-div">
        <ExportDoctorsCard />
        <ExportDoctorsCard />
      </div>
      <JohnDoe />
      <News />
      <Touch />
    </section>
  )
}