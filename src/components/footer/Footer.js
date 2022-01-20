import React from "react";
import email from "./icon/email.png";
import "./footer.css";

function Footer() {
  return (
    <section className="section-contact-header">
      <div className="contact-header">
        <h2>contact me</h2>
        <div className="underline"></div>
        <img
          className="contact-image"
          src="https://i.postimg.cc/4xbFdLrz/Artur.jpg"
          alt="profile"
        ></img>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/artur-krauze-55a5541ba/"
            target="_blank"
          >
            <img src={email} alt="email" className="email-icon"></img>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
