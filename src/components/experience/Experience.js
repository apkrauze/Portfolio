import React, { useState, useEffect } from "react";
import { VscCode } from "react-icons/vsc";
import "./index.css";
import data from "./experienceData";
import LinkedInIcon from "./icons/linkedin.png";
import GithubIcon from "./icons/github.png";
import CVIcon from "./icons/cv.png";
import "aos/dist/aos.css";

function Experience() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const getJobs = async () => {
    await setJobs(data);
    setLoading(false);
  };
  useEffect(() => {
    getJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section" data-aos="zoom-in-up" data-aos-easing="linear">
      <div className="title">
        <h2>experience</h2>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          className="underline"
        ></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <VscCode className="job-icon"></VscCode>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/artur-krauze-55a5541ba/"
          target="_blank"
        >
          <img src={LinkedInIcon} alt="linkedIn" className="icon-1"></img>
        </a>
        <a href="https://github.com/apkrauze" target="_blank">
          <img src={GithubIcon} alt="linkedIn" className="icon-2"></img>
        </a>
        <a href="https://i.postimg.cc/ht15Hqjj/cv.png" target="_blank">
          <img src={CVIcon} alt="cv" className="icon-3"></img>
        </a>
      </div>
      {/* <button type="button" className="btn">
        more info
      </button> */}
    </section>
  );
}

export default Experience;
