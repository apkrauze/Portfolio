import React from "react";
import FlashCard from "../flashcard/FlashCard";
import { VscCode } from "react-icons/vsc";

function FlashCardList({ flashcards }) {
  return (
    <section>
      <div className="title">
        <h2>my projects</h2>
        <p>
          <VscCode className="job-icon-projects"></VscCode>click to get more
          info
        </p>
        <div className="underline"></div>
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
