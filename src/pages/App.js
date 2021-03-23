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
    <div>
      {animes.length === 2 ? (
        <div className="h-screen">
          <div className="h-20 w-screen bg-gray-500">
            <p className=" text-2xl font-bold">Which one is more popular?</p>
            <GiPunch className="mx-auto text-6xl text-white" />
          </div>
          <div className="grid grid-cols-2 h-screen">
            <div className="flex flex-col justify-center px-20 border bg-blue-100">
              <img className="mx-auto" alt="" src={animes[0].image_url}></img>
              <p className="text-center text-lg font-semibold pt-6">
                {animes[0].title}
              </p>{" "}
              <p className="hidden md:block text-center pt-2">
                {animes[0].synopsis.substring(0, 240) + "..."}
              </p>
            </div>
            <div className="flex flex-col justify-center px-20 border bg-red-100">
              <img className="mx-auto" alt="" src={animes[1].image_url}></img>
              <p className="text-center text-lg font-semibold pt-6">
                {animes[1].title}
              </p>{" "}
              <p className="hidden md:block text-center pt-2">
                {animes[1].synopsis.substring(0, 240) + "..."}
              </p>
            </div>
          </div>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
