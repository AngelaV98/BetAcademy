import React from "react";
import search from "../../assets/search.png";

import "./Search.css";

function Search() {
  return (
    <div className="Search">
      <img className="Search-icon" src={search} alt="Search" />
      <input
        type="text"
        className="Search-panel"
        placeholder="Currency Name"
        autoFocus
      />
    </div>
  );
}

export default Search;