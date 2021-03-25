import React, { useState, useEffect } from "react";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";
import { useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import {
  defaultErrorOptions,
  defaultSuccessOptions,
  shuffle,
  getRandomInt,
  bounceLoaderOverride,
} from "../utils/commonUtils";
import { HiHome } from "react-icons/hi";

function GuessAnimeGame(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState();
  const [pointsCounter, setPointsCounter] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  let history = useHistory();

  function verifyAnswer(answer) {
    console.log(answer.mal_id === selectedAnime.mal_id);
    if (answer.mal_id === selectedAnime.mal_id) {
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
  }

  useEffect(() => {
    setRightAnswer(false);
    setWrongAnswer(false);
    function fetch5thAnime(response) {
      axios
        .get(
          "https://api.jikan.moe/v3/" + props.type + "/" + getRandomInt(15000)
        )
        .then(
          (res3) => {
            if (res3.data.rank == null) {
              fetch5thAnime(response);
            } else {
              response.push(res3.data);
              setSelectedAnime(response[0]);
              setAnimes(shuffle(response));
              setIsLoading(false);
            }
          },
          function (error) {
            fetch5thAnime(response);
          }
        );
    }

    function fetch4rdAnime(response) {
      axios
        .get(
          "https://api.jikan.moe/v3/" + props.type + "/" + getRandomInt(15000)
        )
        .then(
          (res3) => {
            if (res3.data.rank == null) {
              fetch4rdAnime(response);
            } else {
              response.push(res3.data);
              fetch5thAnime(response);
            }
          },
          function (error) {
            fetch4rdAnime(response);
          }
        );
    }

    function fetch3rdAnime(response) {
      axios
        .get(
          "https://api.jikan.moe/v3/" + props.type + "/" + getRandomInt(15000)
        )
        .then(
          (res3) => {
            if (res3.data.rank == null) {
              fetch3rdAnime(response);
            } else {
              response.push(res3.data);
              fetch4rdAnime(response);
            }
          },
          function (error) {
            fetch3rdAnime(response);
          }
        );
    }

    function fetch2ndAnime(response) {
      axios
        .get(
          "https://api.jikan.moe/v3/" + props.type + "/" + getRandomInt(15000)
        )
        .then(
          (res2) => {
            if (res2.data.rank == null) {
              fetch2ndAnime(response);
            } else {
              response.push(res2.data);
              fetch3rdAnime(response);
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
          "https://api.jikan.moe/v3/" + props.type + "/" + getRandomInt(15000)
        );
        if (result.data.synopsis == null) {
          fetchAnime();
        } else {
          var firstResponse = [];
          firstResponse.push(result.data);
          fetch2ndAnime(firstResponse);
        }
      } catch (error) {
        fetchAnime();
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
    <div className="p-10">
      <div className="grid grid-cols-2">
        <button
          onClick={() => history.push("/")}
          className="bg-black bg-opacity-50 hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-700 py-2 border-gray-200 border-transparent rounded-full w-40"
        >
          <>
            <HiHome size={20} className="inline-block" />
            <p className="pl-2 inline-block align-middle text-lg">Home</p>
          </>
        </button>
        <div className="font-bold text-2xl text-right text-gray-500">
          Score: {pointsCounter}
        </div>
      </div>

      <div className="pt-10">
        {console.log(selectedAnime)}
        <p className="font-bold">
          {selectedAnime.published !== undefined
            ? selectedAnime.published.string
            : ""}
          {selectedAnime.aired !== undefined ? selectedAnime.aired.string : ""}
        </p>
        <p className="pt-4">{selectedAnime.synopsis}</p>
        <p className="pt-4">{selectedAnime.rating}</p>
        <p>{selectedAnime.source}</p>
        <p>{selectedAnime.rank}</p>
        <div className="block md:grid md:grid-cols-3 lg:grid-cols-5 px-40 pt-20">
          {animes.map((value, index) => {
            console.log(value);
            return (
              <img
                className="rounded-lg shadow-lg hover:opacity-80 cursor-pointer"
                onClick={() => verifyAnswer(value)}
                alt={value.title}
                src={value.image_url}
              ></img>
            );
          })}
        </div>
      </div>
      <div className="centered">
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
      </div>
    </div>
  );
}

export default GuessAnimeGame;
