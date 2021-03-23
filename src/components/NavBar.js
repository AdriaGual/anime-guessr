import React from "react";
import { Link } from "react-router-dom";
import chihiroLogo from "../images/chihiro.svg";
function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-5 bg-gray-700 shadow-md">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <img src={chihiroLogo} width="35" alt="hatLogo"></img>
        <span className="font-semibold text-lg text-white ml-2 hidden md:flex">
          AnimeGuessr
        </span>
      </div>

      <div className="flex items-center w-auto flex-grow">
        <div className="text-sm flex-grow"></div>
        <div>
          <Link
            to="/"
            className="inline-block text-gray-400  dark:text-gray-300 hover:text-white mr-4"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
