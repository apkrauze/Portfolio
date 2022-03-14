import React from "react";
import "./skills.css";
import {
  FaJsSquare,
  FaHtml5,
  FaAws,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiExpress,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiSocketdotio,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  return (
    <section className="section" data-aos="zoom-in-up" data-aos-easing="linear">
      <div className="title">
        <h2>Skills</h2>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          className="underline"
        ></div>
      </div>

      <div className="icons-skills">
        <FaJsSquare className="icon-skills-1" />
        <FaHtml5 className="icon-skills-2" />
        <FaReact className="icon-skills-3" />
        <FaCss3Alt className="icon-skills-4" />
        <FaAws className="icon-skills-5" />
        <SiTypescript className="icon-skills-6" />
        <SiFirebase className="icon-skills-7" />
        <SiExpress className="icon-skills-8" />
        <SiRedux className="icon-skills-9" />
        <FaNodeJs className="icon-skills-10" />
        <FaFigma className="icon-skills-11" />
        <SiSocketdotio className="icon-skills-12" />
        <SiMongodb className="icon-skills-13" />
      </div>
    </section>
  );
}

export default Skills;
