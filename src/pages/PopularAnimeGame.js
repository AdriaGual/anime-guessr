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
import Lottie from "react-lottie";

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
      }, 5000);
    } else {
      setWrongAnswer(true);
      setTimeout(() => {
        history.push("/end");
      }, 5000);
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
    <div className="h-full">
      <div className="topRight font-bold text-3xl text-gray-50 p-10">
        Score: {pointsCounter}
      </div>
      <div className="grid md:grid-cols-2 h-full">
        <AnimeCard
          anime={animes[0]}
          verifyAnswer={verifyAnswer}
          option="0"
        ></AnimeCard>
        <AnimeCard
          anime={animes[1]}
          verifyAnswer={verifyAnswer}
          option="1"
        ></AnimeCard>
      </div>
      <div className="centered md:w-96">
        {rightAnswer || wrongAnswer ? (
          <div>
            <p className="text-left font-extrabold text-yellow-400 text-3xl">
              Rank {animes[0].rank}
            </p>
          </div>
        ) : (
          ""
        )}

        {rightAnswer ? (
          <Lottie options={defaultSuccessOptions} height={200} width={200} />
        ) : (
          ""
        )}
        {wrongAnswer ? (
          <Lottie options={defaultErrorOptions} height={200} width={200} />
        ) : (
          ""
        )}
        {rightAnswer || wrongAnswer ? (
          <div>
            <p className="text-right font-extrabold text-yellow-400 text-3xl">
              Rank {animes[1].rank}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PopularAnimeGame;
