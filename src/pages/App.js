import React from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopularAnimeGame from "./PopularAnimeGame";
import LeftPanel from "../components/LeftPanel";
import TopPanel from "../components/TopPanel";
import HeroPanel from "../components/HeroPanel";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar></NavBar>
          <HeroPanel></HeroPanel>
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
