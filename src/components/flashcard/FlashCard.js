import React, { useState } from "react";
import "./index.css";
import { VscCode } from "react-icons/vsc";

function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        <img src={flashcard.image} alt="Aleks" className="front-image"></img>
      </div>
      <div className="back">
        <h3 className="back-title">{flashcard.title}</h3>
        <h4 className="back-description">{flashcard.description}</h4>
        <div>
          {flashcard.options.map((option) => {
            return (
              <div className="back-option">
                <VscCode className="job-icon-projects"></VscCode>
                {option}
              </div>
            );
          })}

          <button className="back-btn">
            <a href={flashcard.links} target="_blank">
              Live
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
