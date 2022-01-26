import React from "react";
import email from "./icon/email.png";
import LinkedInIcon from "../experience/icons/linkedin.png";
import CVIcon from "../experience/icons/cv.png";
import { BsArrowUpCircle } from "react-icons/bs";

import "./footer.css";

function Footer() {
  return (
    <section className="section-contact-header">
      <div className="contact-header">
        <h2>contact me</h2>
        <div className="underline"></div>
        <img
          className="contact-image"
          //
          src="https://i.postimg.cc/zBL739rw/Artur.png"
          alt="profile"
        ></img>
        <div className="contact-icons">
          <a href="mailto:apkrauze@gmail.com" target="_blank">
            <img src={email} alt="email" className="email-icon"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/artur-krauze-55a5541ba/"
            target="_blank"
          >
            <img src={LinkedInIcon} alt="linkedIn" className="icon-1"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/artur-krauze-55a5541ba/"
            target="_blank"
          >
            <img src={CVIcon} alt="linkedIn" className="icon-3"></img>
          </a>
          {/* <a
            href="https://www.linkedin.com/in/artur-krauze-55a5541ba/"
            target="_blank"
          >
            <img src={LinkedInIcon} alt="linkedIn" className="icon"></img>
          </a> */}
        </div>
        <div>
          <a href="mailto:apkrauze@gmail.com" target="_blank">
            <img src={email} alt="email" className="email-icon"></img>
          </a>
        </div>
        <div className="footer-button-up">
          <a href="">
            <BsArrowUpCircle className="button-up" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
