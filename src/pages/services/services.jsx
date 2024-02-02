import React from 'react'
import './services.css'
import { FreeCheckup } from './components/freeCheckup'

export const Services = () => {
  return (
    <section id='services'>
      <div className="freeCards-div">
        <FreeCheckup />
        <FreeCheckup />
        <FreeCheckup />
      </div>
    </section>
  )
}
