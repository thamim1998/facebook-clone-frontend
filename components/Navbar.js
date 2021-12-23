import React from "react";

function Navbar() {
  function working() {
    console.log("working");
  }
  return (
    <div className="container">
      <h1>Button</h1>
      <button type="button" className="btn btn-primary" onClick={() => working()}>
        Primary
      </button>
    </div>
  );
}

export default Navbar;
