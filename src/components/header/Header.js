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
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        <h4 className="header-paragraph">
          Once I wrote my first hello world code I fell absolutely in love with
          programming. My hobby became my daily routine and that's how I became
          a <span className="paragraph-profession">full-stack developer</span>
        </h4>
      </div>
    </section>
  );
}

export default Header;
