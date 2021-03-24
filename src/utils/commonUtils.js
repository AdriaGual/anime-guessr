import errorAnswer from "../images/lottie/error.json";
import successAnswer from "../images/lottie/success.json";
import { css } from "@emotion/core";
export function isRightAnswer(selectedOption, animes) {
  var answer;
  if (animes[0].rank < animes[1].rank) {
    answer = 0;
  } else {
    answer = 1;
  }

  return selectedOption == answer;
}

export const defaultErrorOptions = {
  loop: true,
  autoplay: true,
  animationData: errorAnswer,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const defaultSuccessOptions = {
  loop: true,
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
