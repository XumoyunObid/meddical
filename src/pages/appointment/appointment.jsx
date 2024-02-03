import React from "react";
import img from "../../assets/appoinment-img/Rectangle31.png";
import img1 from "../../assets/appoinment-img/Frame2.png"
import "./appointments.css"
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
        </div>
      </div>
    </div>
  );
};
