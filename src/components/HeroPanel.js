import React from "react";
import BannerCard from "./BannerCard";

function HeroPanel() {
  return (
    <div className="flex flex-col">
      <div className="flex p-10">
        <div className="my-auto w-full">
          <BannerCard
            title="Which anime is more popular?"
            description="A frustratingly addictive game of anime choosing according to
                  MyAnimeList"
            page="/trendAnime"
            banner="animeBanner"
          ></BannerCard>
          <div className="pt-6"></div>
          <BannerCard
            title="Which manga is more popular?"
            description="A frustratingly addictive game of manga choosing according to
                  MyAnimeList"
            page="/trendManga"
            banner="mangaBanner"
          ></BannerCard>
          {/*<div className="pt-6"></div>
          <BannerCard
            title="Guess the anime"
            description="A frustratingly addictive game of anime guessing"
            page="/guessAnime"
            banner="animeBanner"
          ></BannerCard>{" "}
          <div className="pt-6"></div>
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
