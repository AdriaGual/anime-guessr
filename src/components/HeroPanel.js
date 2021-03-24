import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BannerCard from "./BannerCard";

function HeroPanel() {
  let history = useHistory();

  return (
    <div className="flex flex-col">
      <div class="flex p-10 ">
        <div class="my-auto w-full">
          <BannerCard
            title="Which anime is more popular?"
            description="A frustratingly addictive game of anime choosing according to
                  MyAnimeList"
            page="/trendAnime"
          ></BannerCard>
          <div class="pt-6"></div>
          <BannerCard
            title="Which manga is more popular?"
            description="A frustratingly addictive game of manga choosing according to
                  MyAnimeList"
            page="/trendManga"
          ></BannerCard>
        </div>
      </div>
      <div className="flex flex-col bodyBG"></div>
    </div>
  );
}

export default HeroPanel;
