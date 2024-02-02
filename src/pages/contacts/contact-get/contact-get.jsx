import React from "react";
import img1 from "../../../assets/contact-img/emergency.svg";
import img2 from "../../../assets/contact-img/location.svg";
import img3 from "../../../assets/contact-img/email.svg";
import img4 from "../../../assets/contact-img/clock.svg";
import "./contact-get.css";

export const ContactGet = () => {
  return (
    <div className="container">
      <div className="contact-get">
        <div className="contact_get-block1">
          <h4 className="contact_get-block1-text">Get in touch</h4>
          <h3 className="contact_get-block1-title">Contact</h3>
          <div className="contact_get-clients">
            <div className="contact_get-client">
              <input
                className="contact_get-name"
                type="text"
                placeholder="Name"
              />
              <input
                className="contact_get-email"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              className="contact_get-subject"
              type="text"
              placeholder="Subject"
            />{" "}
            <br />
            <textarea
              className="contact_get-textarea"
              name=""
              id=""
              cols="70"
              rows="20"
              placeholder="Message"
            ></textarea>{" "}
            <br />
            <button className="contact_get-submit" type="submit">
              Submit
            </button>
          </div>
        </div>
        <div className="contact_get-block2">
          <div className="contact_get-emergency">
            <img src={img1} alt="" />
            <h3>Emergency</h3>
            <a href="tel:+(237) 681-812-255">(237) 681-812-255</a> <br />
            <a href="tel:+(237) 666-331-894">(237) 666-331-894</a>
          </div>
          <div className="contact_get-location">
            <img src={img2} alt="" />
            <h3>Location</h3>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>
          <div className="contact_get-emergency">
            <img src={img3} alt="" />
            <h3>Email</h3>
            <a href="mailto:fildineeesoe@gmil.com">
              fildineeesoe@gmil.com
            </a>{" "}
            <br />
            <a href="mailto:myebstudios@gmail.com">myebstudios@gmail.com</a>
          </div>
          <div className="contact_get-emergency">
            <img src={img4} alt="" />
            <h3>Working Hours</h3>
            <p>Mon-Sat 09:00-20:00</p>
            <p>Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </div>
  );
};
