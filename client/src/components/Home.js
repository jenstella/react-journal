import React from "react";
import Facts from "./Facts";
import { useState, useEffect } from "react";
import Nav from './Nav';
import Edit from './Edit';


export default function Home() {
 
  return (
    <div>
        <Nav />
      <h1 id="page-headers">Today I Learned:</h1>
      <form id="form-container" action="/add" method="POST">
        <label name="title" className="inputs">
          <br></br>Title<br></br>
          <input type="text" />
          <br></br>
        </label>
        <label name="author" className="inputs">
          <br></br>Author<br></br>
          <input type="text" />
          <br></br>
        </label>
        <label name="date" className="inputs">
          <br></br>Date<br></br>
          <input type="date" />
          <br></br>
        </label>
        <label name="tags" className="inputs">
          <br></br>Tags<br></br>
          <input type="text" />
          <br></br>
        </label>
        <label name="entry" className="inputs">
          <br></br>Entry<br></br>
          <textarea type="text" />
          <br></br>
        </label>
        <input id="submit-button" type="submit" />
      </form>
    </div>
  );
}
