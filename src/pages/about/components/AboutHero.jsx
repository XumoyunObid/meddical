import React from "react";

export const AboutHero = ({ pageName, pageTitle }) => {
    try {
        return <div className="about-hero">
            <p className='about-hero-text'>Home / <span> {pageName} </span></p>
            <h2 className='about-ero-title'>{pageTitle}</h2>
        </div>
    } catch (e) { console.log(e); }
}