import React from "react";
import Facts from "./Facts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from './Nav';
import Edit from './Edit';

export default function Home() {
  //state for if the button is clicked..starts as false
  const [clicked, setClicked] = useState(false);
  //state for the results of the fetch aka.. the results of the query to the database
  const [data, setData] = useState();

  //when something happens to clicked state .. activate this useEffect
  useEffect(() => {
    //if the button is clicked (aka clicked state === true)
    if (clicked) {
      //get it by calling the api endpoint from server.js
      fetch("/Facts")
        .then((res) => res.json())
        .then((restList) => {
          //then set it in state
          setData(restList);
        });
    }
  }, [clicked]);

  return (
    <div>
        <Nav />
      <h1>Today I Learned:</h1>
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
      {/* <BrowserRouter>
        <Switch>
          <Route path="/facts">
            <Facts>
              <button
                onClick={() => {
                  setClicked(true);
                  setData(true);
                }}
              >
                View All Entries
              </button>
            </Facts>
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}
