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
import battleLogo from "../images/espadas.svg";
import { HiHome } from "react-icons/hi";

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
        history.push("/");
      }, 3000);
    }
  };

  useEffect(() => {
    setRightAnswer(false);
    setWrongAnswer(false);
    function fetch2ndAnime(response) {
      axios.get(`https://api.jikan.moe/v3/anime/` + getRandomInt(15000)).then(
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
          "https://api.jikan.moe/v3/anime/" + getRandomInt(15000)
        );
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
      <div className="topRight font-bold text-2xl text-gray-50 p-10">
        Score: {pointsCounter}
      </div>

      <button
        onClick={() => history.push("/")}
        class="topLeft bg-black bg-opacity-50 hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-700 py-2 px-10  border-gray-200 border-transparent rounded-full m-10"
      >
        <>
          <HiHome size={20} className="inline-block" />
          <p className="pl-2 inline-block align-middle text-lg">Home</p>
        </>
      </button>
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
            <p className="text-left font-bold text-yellow-400 text-3xl">
              Rank {animes[0].rank}
            </p>
          </div>
        ) : (
          ""
        )}

        {!(rightAnswer || wrongAnswer) ? (
          <img
            src={battleLogo}
            width="90"
            alt="hatLogo"
            class="hidden md:block centered"
          ></img>
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
            <p className="text-right font-bold text-yellow-400 text-3xl">
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
