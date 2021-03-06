import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopularAnimeGame from "./PopularAnimeGame";
import LeftPanel from "../components/LeftPanel";
import TopPanel from "../components/TopPanel";
import HeroPanel from "../components/HeroPanel";
import GuessAnimeGame from "./GuessAnimeGame";
import Footer from "../components/Footer";
import { ThemeProvider } from "../utils/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopPanel></TopPanel>
            <div className="grid grid-cols-5 lg:grid-cols-6 bg-primary">
              <LeftPanel></LeftPanel>
              <div className="col-span-5">
                <HeroPanel></HeroPanel>
              </div>
            </div>
            <Footer></Footer>
          </Route>
          <Route exact path="/trendAnime">
            <div className="flex flex-col h-screen bodyBG">
              <PopularAnimeGame type="anime"></PopularAnimeGame>
            </div>
          </Route>
          <Route exact path="/trendManga">
            <div className="flex flex-col h-screen bodyBG">
              <PopularAnimeGame type="manga"></PopularAnimeGame>
            </div>
          </Route>
          <Route exact path="/guessAnime">
            <div className="flex flex-col h-screen bodyBG">
              <GuessAnimeGame type="anime"></GuessAnimeGame>
            </div>
          </Route>
          <Route exact path="/guessManga">
            <div className="flex flex-col h-screen bodyBG">
              <GuessAnimeGame type="manga"></GuessAnimeGame>
            </div>
          </Route>
          <Route exact path="/rankings">
            <p>ldfghb</p>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
