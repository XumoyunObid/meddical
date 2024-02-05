import React from "react";
import "./app-shedul.css"
import img1 from "../../../../assets/appoinment-img/phone.svg"

export const AppShedul = () => {
  return (
    <div className="app-shedule">
      <h1 className="shedul-title">Shedule hours</h1>
      <div className="shedul-text">
        <span>Monday</span>
        <span>-</span>
        <span>09:00 AM - 07:00 PM</span>
      </div>
      <div className="shedul-text">
        <span>Tuesday</span>
        <span>-</span>
        <span>09:00 AM - 07:00 PM</span>
      </div>
      <div className="shedul-text">
        <span>Wednesday</span>
        <span>-</span>
        <span>09:00 AM - 07:00 PM</span>
      </div>
      <div className="shedul-text">
        <span>Thursday</span>
        <span>-</span>
        <span>09:00 AM - 07:00 PM</span>
      </div>
      <div className="shedul-text">
        <span>Friday</span>
        <span>-</span>
        <span>09:00 AM - 07:00 PM</span>
      </div>
      <div className="shedul-text">
        <span>Saturday</span>
        <span>-</span>
        <span>09:00 AM - 07:00 PM</span>
      </div>
      <div className="shedul-text1">
        <span>Sunday</span>
        <span>-</span>
        <span>Closed</span>
      </div>
      <div className="shedule-block">
        <img src={img1} alt="" className="shedule-img" />
        <div>
          <h2>Emergency</h2>
          <a href="tel:+(237) 681-812-255">(237) 681-812-255</a>
        </div>
      </div>
    </div>
  );
};
