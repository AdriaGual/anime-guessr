import React from "react";

function AnimeCard(props) {
  return (
    <div
      className="flex hover:opacity-50 cursor-pointer"
      style={{
        background: "url(" + props.anime.image_url + ")",
        backgroundSize: "cover",
      }}
    >
      <div class="flex blurredBG p-20 w-full">
        <div className="m-auto text-center ">
          <img
            className="mx-auto rounded-lg"
            alt=""
            src={props.anime.image_url}
          ></img>
          <p className="text-lg font-bold pt-6">{props.anime.title}</p>{" "}
          <p className="hidden md:block pt-2">
            {props.anime.synopsis !== null
              ? props.anime.synopsis.substring(0, 240) + "..."
              : ""}
          </p>
          {props.showRank ? <p>{props.anime.rank}</p> : ""}
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
