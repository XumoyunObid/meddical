import React from "react";
import logo from "../../assets/header/logo.svg";
import location from "../../assets/header/location.svg";
import lupa from "../../assets/header/Group175.svg"
import tel from "../../assets/header/tel.svg";
import { Link } from "react-router-dom";
import { ButtonAppointment } from "./button-appointment";
import "./header.css";

export const Header = () => {
  try {
    return (
      <header id="header" className="header">
        <div className="header-top">
          <div className="header-logo">
            {" "}
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>{" "}
          </div>
          <ul className="header-icons">
            <li>
              <img src={tel} alt="" />
              <div>
                <p>Emergency</p>
                <p className="span">(237) 681-812-255</p>
              </div>
            </li>
            <li>
              <i class="fa-regular fa-clock"></i>
              <div>
                <p>Work Hour</p>
                <p className="span">09:00 - 20:00 Everyday</p>
              </div>
            </li>
            <li>
              <img src={location} alt="" />
              <div>
                <p>Location</p>
                <p className="span">0123 Some Place</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="header-bottom_flex">
              <ul className="header-bottom_list">
                <li>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/doctors">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="header-bottom_search">
                <input type="text" />
                <button className="bottom_icon">
                  <img src={lupa} alt="" />
                </button>
                <ButtonAppointment />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (e) {
    console.log(e);
  }
};
