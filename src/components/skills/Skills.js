import React from "react";
import { FaJsSquare, FaHtml5, FaAws, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiTypescript, SiFirebase } from "react-icons/si";

function Skills() {
  return (
    <main data-aos="zoom-in-up" data-aos-easing="linear">
      <section className="container">
        <div className="title">
          <h2>Skills</h2>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            className="underline"
          ></div>
        </div>
      </section>
      <section className="icon-container">
        <div className="job-icon">
          <FaJsSquare />
          <FaHtml5 />
          <FaAws />
          <FaCss3Alt />
          <SiExpress />
          <SiTypescript />
          <SiFirebase />
        </div>
      </section>
    </main>
  );
}

export default Skills;
