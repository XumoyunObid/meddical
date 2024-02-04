import React from "react";
import img from "../../assets/appoinment-img/Rectangle31.png";
import img1 from "../../assets/appoinment-img/Frame2.png";
import { AppGender } from "./companents-app/app-gender";
import { AppShedul } from "./companents-app/app-shedul";
import { IframeComponent } from "../contacts/contact-maps";
import Touch from "../home/Touch";
import "./appointments.css";
import { Link } from "react-router-dom";

export const Appointments = () => {
  return (
    <div className="appoinments">
      <div className="appoinments-hero">
        <img className="appoinments-hero-img" src={img} alt="" />
        <img className="appoinments-hero-img1" src={img1} alt="" />
        <div className="container">
          <div className="appointments-hero-title">
            <Link to="/">
              <span className="appointments-text">Home</span>
            </Link>
            /
            <Link to="#">
              <span className="appointments-text">Appointment</span>
            </Link>
            <h1 className="appointments-title">Book an Appointment</h1>
          </div>
          <div className="shedule">
            <div className="appointment-shedul">
              <h1>Book an Appointment</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Convallis felis vitae
                tortor augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </p>
              <AppGender />
            </div>
            <div className="appointment-shedul2">
              <AppShedul />
            </div>
          </div>
          <div className="shedul-map">
            <IframeComponent />
          </div>
          <Touch/>
        </div>
      </div>
    </div>
  );
};
