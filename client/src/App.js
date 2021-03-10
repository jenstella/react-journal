import './App.css';

function App() {
  return (
    <div id="">
    <h1>Today I Learned:</h1>
    <Switch>
      <Route exact path={"/"} component={Home} />
      {/* <Route path={} component={} />
      <Route path={} component={} /> */}
    </Switch>

  </div>
  );
}

export default App;

//put mongoose in here and send as props? to make secure?
//to write it once and then pass as props to cut down as many times`