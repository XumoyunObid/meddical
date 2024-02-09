import React from 'react'
import { ServicesHero } from './components/ServicesHero'
import {Touch} from '../home/Touch'
import { FreeCheckup } from './components/freeCheckup'
import './services.css'

export const Services = () => {
  return (
    <section id='services' className='services-container'>
      <ServicesHero pageTitle={'Our Services'} pageName={'Services'} />
      <div className="freeCards-div">
        <FreeCheckup />
        <FreeCheckup />
        <FreeCheckup />
        <FreeCheckup />
        <FreeCheckup />
        <FreeCheckup />
      </div>
      <Touch />
    </section>
  )
}
