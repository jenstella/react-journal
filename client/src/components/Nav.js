import React from "react";
import { Link } from "react-router-dom";


//nav bar with links to home and all of the entries
export default function Nav() {
  return (
    <div id="nav-container">
      <Link
        id="nav-links"
        style={{ textDecoration: "none", color: "black" }}
        to={"/"}
      >
        <button className="nav-button">Home</button>
      </Link>
      <Link
        id="nav-links"
        style={{ textDecoration: "none", color: "black" }}
        to={"/Entries"}
      >
        <button className="nav-button">Entries</button>
      </Link>
    </div>
  );
}
