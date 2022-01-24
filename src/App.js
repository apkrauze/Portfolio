import React, { useState } from "react";
import Experience from "./components/experience/Experience";
import Recomendations from "./components/recomendations/Recomendations";
import Header from "./components/header/Header";
import FlashCardList from "./components/flashcardsList/FlashCardList";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import SAMPLE_FLASHCARDS from "./components/flashcardsList/data";
import "./app.css";

function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  return (
    <div className="website">
      <Header />
      <FlashCardList flashcards={flashcards} />
      <Skills />
      <Experience />
      <Recomendations />
      <Footer />
    </div>
  );
}

export default App;
