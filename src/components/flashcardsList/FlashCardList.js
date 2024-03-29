import React, { useEffect } from "react";
import FlashCard from "../flashcard/FlashCard";
import { VscCode } from "react-icons/vsc";
import "aos/dist/aos.css";

function FlashCardList({ flashcards }) {
  return (
    <section className="section">
      <div className="title" data-aos="zoom-in-up" data-aos-easing="linear">
        <h2>some of my projects</h2>
        <p>
          <VscCode className="job-icon-projects"></VscCode>click to get more
          info
        </p>
        <div
          className="underline"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
        ></div>
      </div>
      <div className="card-grid">
        {flashcards.map((flashcard) => {
          return <FlashCard flashcard={flashcard} key={flashcard.id} />;
        })}
      </div>
    </section>
  );
}

export default FlashCardList;
