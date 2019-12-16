import React from "react";

function Competition({ currentscore, setScore }) {
  function handleIncrement() {
    setScore(++currentscore);
  }
  return (
    <button type="button" onClick={handleIncrement}>
      +
    </button>
  );
}

export default Competition;

