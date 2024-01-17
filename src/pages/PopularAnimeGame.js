import React, { useState, useEffect, useRef } from "react";
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
  shuffle,
  getRandomIntRange,
  animeAlreadyShown,
} from "../utils/commonUtils";
import Lottie from "react-lottie";
import battleLogo from "../images/espadas.svg";
import { HiHome } from "react-icons/hi";

function PopularAnimeGame(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const animesShown = useRef([]);
  const [pointsCounter, setPointsCounter] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  let history = useHistory();

  const verifyAnswer = (option) => {
    if (!wrongAnswer && !rightAnswer) {
      if (isRightAnswer(option, animes)) {
        var points = pointsCounter;
        points++;
        setRightAnswer(true);
        setTimeout(() => {
          animesShown.current.push(animes[0], animes[1]);
          setIsLoading(true);
          setPointsCounter(points);
        }, 3000);
      } else {
        setWrongAnswer(true);
        setTimeout(() => {
          history.push("/");
        }, 5000);
      }
    }
  };

  useEffect(() => {
    setRightAnswer(false);
    setWrongAnswer(false);
    function fetch2ndAnime(response) {
      var difficultyRound;
      if (pointsCounter < 50) {
        difficultyRound = getRandomIntRange(100, 200);
      } else {
        difficultyRound = getRandomInt(100 - (pointsCounter % 10));
      }
      axios
        .get(
          "https://api.jikan.moe/v4/top/" + props.type + "?page=" + difficultyRound
        )
        .then(
          (res2) => {
            var response2 = res2.data['data'][getRandomInt(24)];
            if (animeAlreadyShown(response2, animesShown.current)) {
              fetch2ndAnime(response);
            } else {
              setAnimes(shuffle([response, response2]));
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
        var difficultyRound;
        if (pointsCounter < 10) {
          difficultyRound = getRandomInt(4) + 1;
        } else {
          difficultyRound = getRandomInt((pointsCounter % 10) + 4);
        }

        const result = await axios(
          "https://api.jikan.moe/v4/top/" + props.type + "?page=" +
            getRandomInt(difficultyRound)+1
        );
        var response = result.data['data'][getRandomInt(24)];
        console.log(result.data['data'][getRandomInt(24)])
        if (animeAlreadyShown(response, animesShown.current)) {
          fetchAnime();
        } else {
          fetch2ndAnime(response);
        }
      } catch (error) {
        //fetchAnime();
      }
    };
    fetchAnime();
  }, [pointsCounter, props.type]);

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <BounceLoader
            color="#c471ed"
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
        className="topLeft bg-black bg-opacity-50 hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-700 py-2 px-10  border-gray-200 border-transparent rounded-full m-10"
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
              Rank {animes[0].popularity}
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
            className="hidden md:block centered"
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
              Rank {animes[1].popularity}
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
