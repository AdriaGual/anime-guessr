import React from "react";
import { useHistory } from "react-router-dom";

function BannerSecondaryCard(props) {
  let history = useHistory();

  return (
    <div className="shadow-lg">
      <div class={"bg-gray-600 h-64 " + props.banner}></div>
      <div class="mainBG p-5">
        {" "}
        <p class="font-bold text-2xl ">{props.title}</p>
        <p>{props.description}</p>
        <button
          onClick={() => history.push(props.page)}
          class="bg-purple-600 hover:bg-purple-700 text-gray-100 font-semibold py-2 px-20 border-4  border-transparent rounded-full mt-4"
        >
          <>
            <p className="pl-2 inline-block align-middle text-lg">Play Now!</p>
          </>
        </button>
      </div>
    </div>
  );
}

export default BannerSecondaryCard;
