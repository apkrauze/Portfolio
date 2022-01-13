import React from "react";
import Experience from "./components/experience/Experience";
import Recomendations from "./components/recomendations/Recomendations";
import Header from "./components/header/Header";
import "./app.css";

function App() {
  return (
    <div className="website">
      <Header />
      <Experience />
      <Recomendations />
    </div>
  );
}

export default App;
