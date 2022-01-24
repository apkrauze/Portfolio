import React from "react";
import "./header.css";
import { FaQuoteRight } from "react-icons/fa";

function Header() {
  return (
    <section className="section-header">
      <div className="header">
        <h1>
          Hi,<br></br> I'm Artur
        </h1>
        <div className="header-underline"></div>
        {/* <img
          className="header-image"
          src="https://i.postimg.cc/MpmKrYg9/Screenshot-2022-01-19-at-12-55-26.png"
          alt="profile"
        ></img> */}
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        <h4 className="header-paragraph">
          Once I wrote my first hello world code I fell absolutelly in love with
          programmimg. My hobby became my daily routine and that's how I became
          a <span className="paragraph-profession">full-stack developer</span>
        </h4>
      </div>
    </section>
  );
}

export default Header;
