import React, { Fragment } from "react";

import Team from "./Team";
import Score from "./Score";

function Competition({ teams }) {
  const [team1, team2] = teams;

  return (
    <Fragment>
      <Team name={team1.name} />
      <Score team1={team1.score} team2={team2.score} />
      <Team name={team2.name} />
    </Fragment>
  );
}

export default Competition;

