import React from "react";

function AnimeCard(props) {
  return (
    <div className={props.classParam}>
      {" "}
      <div className="m-auto">
        <img className="mx-auto" alt="" src={props.anime.image_url}></img>
        <p className="text-center text-lg font-bold pt-6">
          {props.anime.title}
        </p>{" "}
        <p className="hidden md:block text-center pt-2">
          {props.anime.synopsis !== null
            ? props.anime.synopsis.substring(0, 240) + "..."
            : ""}
        </p>
      </div>
    </div>
  );
}

export default AnimeCard;
