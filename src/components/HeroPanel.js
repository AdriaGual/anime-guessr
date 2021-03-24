import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BannerCard from "./BannerCard";
import chihiroLogo from "../images/neko.svg";
import BannerSecondaryCard from "./BannerSecondaryCard";

function HeroPanel() {
  let history = useHistory();

  return (
    <div className="flex flex-col">
      <div class="flex p-10">
        <div class="my-auto w-full">
          <BannerCard
            title="Which anime is more popular?"
            description="A frustratingly addictive game of anime choosing according to
                  MyAnimeList"
            page="/trendAnime"
            banner="animeBanner"
          ></BannerCard>
          <div class="pt-6"></div>
          <BannerCard
            title="Which manga is more popular?"
            description="A frustratingly addictive game of manga choosing according to
                  MyAnimeList"
            page="/trendManga"
            banner="mangaBanner"
          ></BannerCard>
          {/*<div class="pt-6"></div>
          <BannerCard
            title="Guess the anime"
            description="A frustratingly addictive game of anime guessing"
            page="/guessAnime"
            banner="animeBanner"
          ></BannerCard>{" "}
          <div class="pt-6"></div>
          <BannerCard
            title="Guess the manga"
            description="A frustratingly addictive game of manga guessing"
            page="/guessManga"
            banner="mangaBanner"
  ></BannerCard>*/}
        </div>
      </div>
    </div>
  );
}

export default HeroPanel;
