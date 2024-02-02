import React from "react";
import img1 from "../../assets/footer-img/Meddical.svg";
import { Link } from "react-router-dom";
import img2 from "../../assets/footer-img/telega.svg";
import img3 from "../../assets/footer-img/incoding.svg";
import img4 from "../../assets/footer-img/fasebook.svg";
import img5 from "../../assets/footer-img/insta.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer_block1">
            <img src={img1} alt="" />
            <p className="footer_text">
              Leading the Way in Medical Execellence, Trusted Care.
            </p>
          </div>
          <div className="footer_block2">
            <h4 className="footer_title">Important Links</h4>
            <ul className="footer_block2-list">
              <li>
                <Link className="footer-block2-text" to="/appointmaent">
                  Appointment
                </Link>
              </li>
              <li>
                <Link className="footer-block2-text" to="/doctors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link className="footer-block2-text" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="footer-block2-text" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_block3">
            <h4 className="footer_title">Contact Us</h4>
            <a href="tel:+237681812255">Call: (237) 681-812-255</a>
            <br />
            <a href="mailto:fildineesoe@gmail.com">
              Email: fildineesoe@gmail.com
            </a>
            <p className="footer_text">Address: 0123 Some place</p>
            <p className="footer_text">Some country</p>
          </div>
          <div className="footer_block4">
            <h4 className="footer_title">Newsletter</h4>
            <div className="footer_pochta">
              <input type="email" placeholder="Enter your email address" />
              <button>
                <img src={img2} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bootom">
          <p className="footer-bottom-text">
            © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
          </p>
          <div className="footer-bootom-icons">
            <a href="https://www.linkedin.com/">
              <img src={img3} alt="icon-incoding" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={img4} alt="icon-facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={img5} alt="icon-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
