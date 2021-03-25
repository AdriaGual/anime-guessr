import React from "react";
import { ThemeContext } from "./themeContext";
import Switch from "react-switch";

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  return (
    <Switch
      checked={isDark()}
      onChange={(e) => setTheme(e ? "dark" : "light")}
      offColor="#baaa80"
      onColor="#353535"
      className="react-switch mx-auto"
      width={90}
      height={40}
      uncheckedIcon={
        <span
          className="iconify"
          data-icon="twemoji:owl"
          data-inline="false"
          style={{
            display: "block",
            height: "100%",
            fontSize: 25,
            textAlign: "end",
            marginLeft: "20px",
            color: "#353239",
          }}
        ></span>
      }
      checkedIcon={
        <span
          className="iconify"
          data-icon="noto-v1:sun-with-face"
          data-inline="false"
          style={{
            display: "block",
            height: "100%",
            fontSize: 25,
            textAlign: "end",
            marginLeft: "10px",
            color: "#353239",
          }}
        ></span>
      }
      id="icon-switch"
    />
  );
};
