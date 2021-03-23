import React, { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { GiPunch } from "react-icons/gi";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    function fetch2ndAnime(response) {
      axios.get(`https://api.jikan.moe/v3/anime/` + getRandomInt(15000)).then(
        (res2) => {
          setAnimes([response, res2.data]);
          setIsLoading(false);
        },
        function (error) {
          fetch2ndAnime(response);
        }
      );
    }

    const fetchAnime = async () => {
      try {
        const result = await axios(
          "https://api.jikan.moe/v3/anime/" + getRandomInt(15000)
        );
        var response = result.data;
        fetch2ndAnime(response);
      } catch (error) {
        fetchAnime();
      }
    };
    fetchAnime();
  }, []);

  if (isLoading) {
    return (
      <div class="flex h-screen">
        <div class="m-auto">
          <ClipLoader size={150} />
        </div>
      </div>
    );
  }

  return (
    <div className="p-10">
      {animes.length === 2 ? (
        <div class="grid grid-cols-3 h-full">
          <div class="flex bg-blue-100 p-10 shadow-lg rounded">
            <div class="m-auto">
              <img className="mx-auto" alt="" src={animes[0].image_url}></img>
              <p className="text-center text-lg font-bold pt-6">
                {animes[0].title}
              </p>{" "}
              <p className="hidden md:block text-center pt-2">
                {animes[0].synopsis.length !== null
                  ? animes[0].synopsis.substring(0, 240) + "..."
                  : ""}
              </p>
            </div>
          </div>
          <div class="text-center flex ">
            {" "}
            <div class="m-auto">
              <p class="font-bold text-xl">Which one is more popular?</p>
              <div class="grid grid-cols-1 px-10 gap-4 pt-6">
                <button class="bg-transparent hover:bg-blue-400 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded">
                  {animes[0].title}
                </button>

                <button class="bg-transparent hover:bg-red-400 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded">
                  {animes[1].title}
                </button>
              </div>
            </div>
          </div>
          <div class="flex bg-red-100 p-10 shadow-lg rounded">
            {" "}
            <div class="m-auto">
              <img className="mx-auto" alt="" src={animes[1].image_url}></img>
              <p className="text-center text-lg font-bold pt-6">
                {animes[1].title}
              </p>{" "}
              <p className="hidden md:block text-center pt-2">
                {animes[1].synopsis.length !== null
                  ? animes[1].synopsis.substring(0, 240) + "..."
                  : ""}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
