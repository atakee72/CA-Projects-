import React from "react";
// import { useState } from "react";

function Searchbar({ getInput }) {
 
  function handleChange(e) {
    e.preventDefault();
    // console.log(e.target.value);
    getInput(e.target.value);
    
  }

  return (
    <input
      type="text"
      placeholder="Search here"
      onChange={handleChange}
    />
  );
}

export default Searchbar;
