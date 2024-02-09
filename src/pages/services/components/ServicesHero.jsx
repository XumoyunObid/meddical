import React from "react";

export const ServicesHero = ({ pageName, pageTitle }) => {
    return <div className="Services-hero">
        <p className='Services-hero-text'>Home / <span> {pageName} </span></p>
        <h2 className='Services-hero-title'>{pageTitle}</h2>
    </div>
}