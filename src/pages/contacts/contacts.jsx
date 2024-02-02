import React from "react";
import "./contact.css";
import img from "../../assets/contact-img/Frame2.png";
import img1 from "../../assets/contact-img/Rectangle3.png";
import { IframeComponent } from "./contact-maps";
import { Link } from "react-router-dom";
import { ContactGet } from "./contact-get";
import News from "../home/News";
import Touch from "../home/Touch";

export const Contacts = () => {
  return (
    <div className="contact">
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
        <div className="linear"></div>
      </div>
      <div className="contact-map">
        <IframeComponent />
      </div>
      <ContactGet />
      <News />
      {/* <Touch /> */}
    </div>
  );
};
