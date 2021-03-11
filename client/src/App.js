import "./App.css";
import Home from "./components/Home";
import Facts from "./components/Facts";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} />
          <Facts path='/facts' component={Facts} />
          <Route path={"/facts/:objectId"}>
            <h1>shows one specific entry</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
