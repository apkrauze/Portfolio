import React, { useEffect, useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./recomendation.css";
// animation sliders on underline
import Aos from "aos";
import "aos/dist/aos.css";

const Recomendations = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main data-aos="zoom-in-up" data-aos-easing="linear">
      <section className="container">
        <div className="title">
          <h2>some words about me</h2>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            className="underline"
          ></div>
        </div>
      </section>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          {/* <span className="quote-icon">
            <FaQuoteRight />
          </span> */}
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        {/* <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button> */}
      </article>
    </main>
  );
};

export default Recomendations;
