import React from "react";

export default function Home() {
  return (
    //on home screen have the forms to fill out entry
    //the form info gets pushed into the entries page/compass db
    <div>
      <h1 id="page-headers">Today I Learned:</h1>
      <form id="form-container" action="/add" method="POST">
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
        <input id="on-page-buttons" type="submit" />
      </form>
    </div>
  );
}
