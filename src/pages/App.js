import React from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopularAnimeGame from "./PopularAnimeGame";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <PopularAnimeGame></PopularAnimeGame>
        </Route>
        <Route exact path="/end">
          <h1>donete</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
