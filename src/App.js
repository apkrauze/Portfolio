import React, { useState } from "react";
import Experience from "./components/experience/Experience";
import Recomendations from "./components/recomendations/Recomendations";
import Header from "./components/header/Header";
import FlashCardList from "./components/flashcardsList/FlashCardList";
import "./app.css";

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  return (
    <div className="website">
      <FlashCardList flashcards={flashcards} />
      <Header />
      <Experience />
      <Recomendations />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "how are you",
    options: ["React", "Firebase/Firestore", "CSS"],
  },
  {
    id: 2,
    question: "how are you doing ",
    options: ["React", "Firebase/Firestore", "CSS"],
  },
];

export default App;
