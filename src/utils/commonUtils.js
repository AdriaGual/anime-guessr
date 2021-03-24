import errorAnswer from "../images/lottie/error.json";
import successAnswer from "../images/lottie/success.json";
import { css } from "@emotion/core";

export function isRightAnswer(selectedOption, animes) {
  var answer;
  if (animes[0].rank < animes[1].rank) {
    answer = "0";
  } else {
    answer = "1";
  }
  return selectedOption === answer;
}

export const defaultErrorOptions = {
  loop: false,
  autoplay: true,
  animationData: errorAnswer,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const defaultSuccessOptions = {
  loop: false,
  autoplay: true,
  animationData: successAnswer,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const bounceLoaderOverride = css`
  display: block;
  margin: 0 auto;
`;

export function shuffle(arr) {
  var i, j, temp;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
