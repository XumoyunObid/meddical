import React from "react";
import { Link } from "react-router-dom";
import "./button-appointment.css";

export const ButtonAppointment = () => {
  return (
    <div>
      <Link to="/appointments">
        <button className="button-appointment">Appointment</button>
      </Link>
    </div>
  );
};
