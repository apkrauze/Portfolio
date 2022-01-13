import React, { useState } from "react";

function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">{flashcard.question}</div>
      <div className="back">
        {flashcard.options}
        <button>lalal</button>
      </div>
    </div>
  );
}

export default FlashCard;
