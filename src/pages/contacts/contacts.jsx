import React from 'react'
import "./contact.css";
import img from "../../assets/contact-img/Frame2.png"
import img1 from "../../assets/contact-img/Rectangle3.png";
import { Link } from 'react-router-dom';

export const Contacts = () => {
  return (
    <div className="contact-hero">
      <img className="contact-img" src={img1} alt="" />
      <img className="contact-fon" src={img} alt="" />
      <div className="container">
        <div className="contact-hero-title">
          <Link to="/">
            <span className="contact-text">Home</span>
          </Link>
          /{" "}
          <Link to="#">
            <span className="contact-text">Contact</span>
          </Link>
          <h1 className="contact-title">Our Contacts</h1>
        </div>
      </div>
    </div>
  );
}
