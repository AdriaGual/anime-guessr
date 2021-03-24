import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function HeroPanel() {
  let history = useHistory();

  return (
    <div className="flex flex-col">
      <div class="flex p-10 ">
        <div class="my-auto w-full ">
          <div class="mainBG w-full rounded p-10 shadow-lg">
            <p class="font-bold text-2xl ">Which anime is more popular?</p>
            <p>
              A frustratingly addictive game of anime choosing according to
              MyAnimeList
            </p>
            <button
              onClick={() => history.push("/trendGame")}
              class="bg-green-600 hover:bg-green-700 text-gray-100 font-semibold py-2 px-20 border-4  border-transparent rounded-full mt-4"
            >
              <>
                <p className="pl-2 inline-block align-middle text-lg">
                  Play Now!
                </p>
              </>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bodyBG"></div>
    </div>
  );
}

export default HeroPanel;
