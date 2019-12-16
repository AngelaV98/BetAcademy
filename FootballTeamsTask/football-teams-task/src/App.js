import React from "react";
import "./App.css";
import Competition from "./components/Competition";

const teams = [
  { name: "Barcelona", score: 0 },
  { name: "Real Madrid", score: 0 }
];

function App() {
  return (
    <div className="App">
      <Competition teams={teams} />
    </div>
  );
}

export default App;
