import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Entries() {
  //set state for button clicked.. starts false
  const [results, setResults] = useState([]);
  //when something happens to clicked state
  useEffect(() => {
    if (results.length === 0) {
      //get by calling api endpoint
      fetch("/api")
        .then((res) => res.json())
        .then((restList) => {
          setResults(restList);
        });
    }
  });


  //returns each entry on the page by pulling in each piece of data seperately, and then giving the edit button for each entry
  return (
    <div>
      <h1 id="page-headers">All Entries</h1>
      <div id="entry-container">
        {results.map((entry, index) => {
          return (
            <div id="entry-container-2">
              <hr />
              <h1 key={index + "-title"}>{entry.title}</h1>
              <h3 key={index + "-author"}>{entry.author}</h3>
              <h4 key={index + "-date"}>{entry.date}</h4>
              <p key={index + "-entry"}>{entry.entry}</p>
              <h4 key={index + "-tags"}>{entry.tags}</h4>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/Edit/" + entry._id}
              >
                <button className="on-page-buttons" id={index + ""}>
                  Edit / Remove
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
