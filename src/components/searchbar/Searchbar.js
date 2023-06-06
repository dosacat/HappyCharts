import React from "react";

function Searchbar({ search, handleSearch }) {
  return (
    <input
      id="search-bar"
      value={search}
      placeholder={"search..."}
      onChange={(e) => handleSearch(e)}
    />
  );
}

export default Searchbar;
