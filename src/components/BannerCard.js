import React from "react";
import { useHistory } from "react-router-dom";

function BannerCard(props) {
  let history = useHistory();

  return (
    <div className="mainBG w-full rounded shadow-lg">
      <div className={props.banner + " h-52 md:hidden"}></div>
      <div className="md:grid md:grid-cols-2 block">
        <div className="p-10">
          <p className="font-bold text-2xl ">{props.title}</p>
          <p>{props.description}</p>
          <button
            onClick={() => history.push(props.page)}
            className="bg-purple-600 hover:bg-purple-700 text-gray-100 font-semibold py-2 px-10 md:px-20 border-4  border-transparent rounded-full mt-4"
          >
            <p className="pl-2 inline-block align-middle text-lg">
              Play Now!
            </p>
          </button>
        </div>
        <div className={props.banner}></div>
      </div>
    </div>
  );
}

export default BannerCard;
