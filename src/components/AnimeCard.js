import React from "react";

function AnimeCard(props) {
  return (
    <div
      className="flex hover:opacity-90 cursor-pointer"
      style={{
        background: "url(" + props.anime.image_url + ")",
        backgroundSize: "cover",
      }}
      onClick={() => props.verifyAnswer(props.option)}
    >
      <div className="flex blurredBG p-20 w-full">
        <div className="m-auto text-center">
          <img
            className="mx-auto rounded-lg mb-6"
            alt={props.anime.title}
            src={props.anime.image_url}
          ></img>

          <div className="bg-gray-50 p-10 rounded-lg bg-opacity-40">
            <p className="text-2xl font-bold">{props.anime.title}</p>
            <p>
              {props.anime.synopsis !== null
                ? props.anime.synopsis.substring(0, 240) + "..."
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
