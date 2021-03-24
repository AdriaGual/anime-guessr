import React from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopularAnimeGame from "./PopularAnimeGame";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>donete</h1>
        </Route>
        <Route exact path="/game">
          <div className="flex flex-col h-screen bodyBG">
            <PopularAnimeGame></PopularAnimeGame>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
