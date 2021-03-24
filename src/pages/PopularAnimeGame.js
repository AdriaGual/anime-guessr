import React, { useState, useEffect } from "react";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";
import AnimeCard from "../components/AnimeCard";
import { useHistory } from "react-router-dom";
import {
  isRightAnswer,
  defaultErrorOptions,
  defaultSuccessOptions,
  getRandomInt,
  bounceLoaderOverride,
} from "../utils/commonUtils";
function PopularAnimeGame() {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [pointsCounter, setPointsCounter] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  let history = useHistory();

  const verifyAnswer = (option) => {
    if (isRightAnswer(option, animes)) {
      var points = pointsCounter;
      points++;
      setRightAnswer(true);
      setTimeout(() => {
        setIsLoading(true);
        setPointsCounter(points);
      }, 3000);
    } else {
      setWrongAnswer(true);
      setTimeout(() => {
        history.push("/end");
      }, 3000);
    }
  };

  useEffect(() => {
    setRightAnswer(false);
    setWrongAnswer(false);
    function fetch2ndAnime(response) {
      axios.get(`https://api.jikan.moe/v3/anime/` + getRandomInt(10000)).then(
        (res2) => {
          if (res2.data.rank == null) {
            fetch2ndAnime(response);
          } else {
            setAnimes([response, res2.data]);
            setIsLoading(false);
          }
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
        console.log(result.data);
        if (result.data.rank == null) {
          fetchAnime();
        } else {
          var response = result.data;
          fetch2ndAnime(response);
        }
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
            color="#ffffff"
            loading="true"
            css={bounceLoaderOverride}
            size={150}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 h-full">
      {" "}
      <AnimeCard
        anime={animes[0]}
        showRank={wrongAnswer || rightAnswer}
        verifyAnswer={verifyAnswer}
        option="0"
      ></AnimeCard>
      <AnimeCard
        anime={animes[1]}
        showRank={wrongAnswer || rightAnswer}
        verifyAnswer={verifyAnswer}
        option="1"
      ></AnimeCard>{" "}
      {/*
            <div className="grid grid-cols-3 h-full">
              <AnimeCard
                anime={animes[0]}
                classParam="flex bg-blue-100 p-10 shadow-lg rounded-3xl"
                showRank={wrongAnswer || rightAnswer}
              ></AnimeCard>
              <div className=" text-center">
                <p className="font-bold text-3xl text-gray-50">
                  Which anime is more popular?
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
                  <p className="font-bold text-gray-50 text-3xl">
                    Score: {pointsCounter}
                  </p>
                  {rightAnswer ? (
                    <Lottie
                      options={defaultSuccessOptions}
                      height={200}
                      width={200}
                    />
                  ) : (
                    ""
                  )}
                  {wrongAnswer ? (
                    <Lottie
                      options={defaultErrorOptions}
                      height={200}
                      width={200}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <AnimeCard
                anime={animes[1]}
                classParam="flex bg-red-100 p-10 shadow-lg rounded-3xl"
                showRank={wrongAnswer || rightAnswer}
              ></AnimeCard>
            </div>
          */}
    </div>
  );
}

export default PopularAnimeGame;
