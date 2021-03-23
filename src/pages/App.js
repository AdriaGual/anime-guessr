import React, { useState, useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import AnimeCard from "../components/AnimeCard";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [pointsCounter, setPointsCounter] = useState(0);

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  function verifyAnswer(points, option) {
    var answer;

    if (animes[0].rank < animes[1].rank) {
      answer = 0;
    } else {
      answer = 1;
    }

    if (option === answer) {
      points++;
      setIsLoading(true);
      setPointsCounter(points);
    }
  }

  useEffect(() => {
    function fetch2ndAnime(response) {
      axios.get(`https://api.jikan.moe/v3/anime/` + getRandomInt(10000)).then(
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
          "https://api.jikan.moe/v3/anime/" + getRandomInt(10000)
        );
        var response = result.data;
        fetch2ndAnime(response);
      } catch (error) {
        fetchAnime();
      }
    };
    fetchAnime();
  }, [pointsCounter]);

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <BounceLoader
            color={color}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto px-10">
        {animes.length === 2 ? (
          <div className="grid grid-cols-3 h-full">
            <AnimeCard
              anime={animes[0]}
              classParam="flex bg-blue-100 p-10 shadow-lg rounded"
            ></AnimeCard>
            <div className=" text-center">
              <p className="font-bold text-3xl text-gray-50">
                Which one is more popular?
              </p>
              <div className="grid grid-cols-1 px-10 gap-4 pt-6">
                <button
                  onClick={() => verifyAnswer(pointsCounter, 0)}
                  className="bg-gray-50 hover:bg-blue-400 text-blue-600 font-semibold hover:text-white py-4 border-4 border-blue-400 hover:border-transparent rounded-full"
                >
                  {animes[0].title}
                </button>
                <button
                  onClick={() => verifyAnswer(pointsCounter, 1)}
                  className="bg-gray-50 hover:bg-red-400 text-red-600 font-semibold hover:text-white py-4 border-4 border-red-400 hover:border-transparent rounded-full"
                >
                  {animes[1].title}
                </button>

                <p class="font-bold text-gray-50 text-3xl">
                  Score: {pointsCounter}
                </p>
              </div>
            </div>
            <AnimeCard
              anime={animes[1]}
              classParam="flex bg-red-100 p-10 shadow-lg rounded"
            ></AnimeCard>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
