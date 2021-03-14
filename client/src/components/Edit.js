import React, { useState, useEffect } from "react";

export default function Edit() {
  const [oneEntry, setOneEntry] = useState([]);

  let temp_id = window.location.pathname.replace("/Edit/", "");

  // async deleteEntry(id) => {
  //   let collection = await this.collection()
  //   let idObj = new ObjectId(id)

  //   await collection.deleteOne({_id: idObj})

  //   console.log(`Deleted entry with ID: ${id}`)
  // }
  console.log(temp_id);

  useEffect(() => {
    if (oneEntry.length === 0) {
      fetch("/api/" + temp_id)
        .then((res) => res.json())
        .then((restList) => {
          setOneEntry(restList);
        });
    }
  });
  //container div / ternary
  console.log(oneEntry);
  return (
    <div>
      <form id="form-container" action={"/Edit/" + temp_id} method="POST">
        <label className="inputs">
          <br></br>Title<br></br>
          <input name="title" type="text" />
          <br></br>
        </label>
        <label className="inputs">
          <br></br>Author<br></br>
          <input name="author" type="text" />
          <br></br>
        </label>
        <label className="inputs">
          <br></br>Date<br></br>
          <input name="date" type="date" />
          <br></br>
        </label>
        <label className="inputs">
          <br></br>Tags<br></br>
          <input name="tags" type="text" />
          <br></br>
        </label>
        <label className="inputs">
          <br></br>Entry<br></br>
          <textarea name="entry" type="text" />
          <br></br>
        </label>
        <input id="on-page-buttons" type="submit" value="Submit Changes"/>
      </form>
      <hr />
      <h1 id="page-headers">Original Post:</h1>
      {oneEntry.length !== 0 ? (
        <div id="update-container">
          <h1 key={oneEntry.index + "-title"}>{oneEntry.title}</h1>{" "}
          <h3 key={oneEntry.index + "-author"}>{oneEntry.author}</h3>{" "}
          <h4 key={oneEntry.index + "-date"}>{oneEntry.date}</h4>{" "}
          <p key={oneEntry.index + "-entry"}>{oneEntry.entry}</p>{" "}
          <h3 key={oneEntry.index + "-tags"}>{oneEntry.tags}</h3>{" "}
        </div>
      ) : (
        "Loading Data..."
      )}
{/* 
      <button className="on-page-buttons">Edit Entry Data</button> */}
      <button className="on-page-buttons">Delete Entry</button>
    </div>
  );
}
