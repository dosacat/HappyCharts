import React from "react";
import "./Dropdown.css";

function Dropdown({ teams, handleChange, team }) {
  return (
    <select id="select" value={team} onChange={(e) => handleChange(e)}>
      <option value="all">All</option>
      {[...teams].map((option) => (
        <option value={option} key={option.id}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
