//imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//function to edit entries
export default function Edit() {
  const [oneEntry, setOneEntry] = useState([]);

  let temp_id = window.location.pathname.replace("/Edit/", "");

  console.log(temp_id);

  //fetching each entry
  useEffect(() => {
    if (oneEntry.length === 0) {
      fetch("/api/" + temp_id)
        .then((res) => res.json())
        .then((restList) => {
          setOneEntry(restList);
        });
    }
  });

  //container div has a ternary so if each entry does not equal 0, populates with the info from the selected post
  //added an onChange listener to the inputs so that I can change the previous input
  console.log(oneEntry);
  return (
    <div>
      <h1 id="page-headers">Update Entry Here</h1>
      <form id="form-container" action={"/Edit/" + temp_id} method="POST">
        <label className="inputs">
          <br></br>Title<br></br>
          <input
            name="title"
            value={oneEntry.title + ""}
            type="text"
            onChange={(e) => setOneEntry({ title: e.target.value })}
          />
          <br></br>
        </label>
        <label className="inputs">
          <br></br>Author<br></br>
          <input
            name="author"
            value={oneEntry.author}
            onChange={(e) => setOneEntry({ author: e.target.value })}
            type="text"
          />
          <br></br>
        </label>
        <label className="inputs">
          <br></br>Date<br></br>
          <input
            name="date"
            onChange={(e) => setOneEntry({ date: e.target.value })}
            type="date"
          />
          <br></br>
        </label>
        <label className="inputs">
          <br></br>Tags<br></br>
          <input
            name="tags"
            value={oneEntry.tags}
            type="text"
            onChange={(e) => setOneEntry({ tags: e.target.value })}
          />
          <br></br>
        </label>
        <label className="inputs">
          <br></br>Entry<br></br>
          <textarea name="entry" value={oneEntry.entry} type="text" />
          <br></br>
        </label>
        <input id="on-page-buttons" type="submit" value="Submit Changes" />
      </form>
      <hr />

      {/* button for deleting the entry and then redirects back to the entries page*/}
      <Link id="delete-button" to="/Entries/">
        <button
          className="on-page-buttons"
          onClick={() => {
            fetch("/delete/" + temp_id);
          }}
        >
          Delete Entry
        </button>
      </Link>
    </div>
  );
}
