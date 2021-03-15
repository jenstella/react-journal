//imports
import "./App.css";
import Home from "./components/Home";
import Entries from "./components/Entries";
import Edit from "./components/Edit";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//the nav bar buttons stay outside of the switch so they stay on each page
//routes to each component/page
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/entries" component={Entries}>
            <Entries />
          </Route>
          <Route path="/edit" component={Edit}>
            <Edit />
          </Route>
          {/* <Route path={"/entries/:objectId"}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
