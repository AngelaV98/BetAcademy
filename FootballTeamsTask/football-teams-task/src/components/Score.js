import React, { useState } from "react";
import Button from "./Button";

function Score({ team1, team2 }) {
  const [currentscore1, setScore1] = useState(team1);
  const [currentscore2, setScore2] = useState(team2);

  return (
    <>
      <Button setScore={setScore1} currentscore={currentscore1} />
      <span>{` ${currentscore1} - ${currentscore2} `}</span>
      <Button setScore={setScore2} currentscore={currentscore2} />
    </>
  );
}

export default Score;

