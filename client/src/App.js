import "./App.css";
import Home from "./components/Home";
import Facts from "./components/Facts";
import Edit from "./components/Edit"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/facts' component={Facts} >
            <Facts />
            </Route>
            <Route path='/edit' component={Edit} >
              <Edit />
            </Route>
          <Route path={"/facts/:objectId"}>
            <h1>shows one specific entry</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
