import React from "react";
import Facts from "./Facts";
import { BrowserRouter, Link, Switch } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Today I Learned</h1>
      <form action="/" method="POST">
        <label>
          <br></br>
          <input placeholder="title" type="text" />
          <br></br>
        </label>
        <label>
          <br></br>
          <input placeholder="author" type="text" />
          <br></br>
        </label>
        <label>
          <br></br>
          <input placeholder="date" type="text" />
          <br></br>
        </label>
        <label>
          <br></br>
          <input placeholder="tags" type="text" />
          <br></br>
        </label>
        <label>
          <br></br>
          <textarea placeholder="entry" type="text" />
          <br></br>
        </label>
        <input type="submit" />
      </form>
      <BrowserRouter>
        <Switch>
          <Facts><button>View All Entries</button></Facts>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
