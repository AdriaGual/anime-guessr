import React from "react";
import {
  HiHome,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiNewspaper,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import chihiroLogo from "../images/neko.svg";

function LeftPanel() {
  return (
    <div className="p-10 shadow-xl h-screen hidden md:block border-r-2 border-gray-300">
      <>
        <img
          src={chihiroLogo}
          width="40"
          alt="hatLogo"
          className="inline-block"
        ></img>
        <p className="text-lg font-bold inline-block align-middle pl-2">
          AnimeGuessr
        </p>
      </>
      <div className="pt-6">
        <Link to="/">
          {useLocation().pathname.endsWith("/") ? (
            <>
              <HiHome size={20} className="inline-block text-purple-700" />
              <p className="pl-2 inline-block align-middle font-semibold">
                Home
              </p>
            </>
          ) : (
            <>
              <HiOutlineHome size={20} className="inline-block" />
              <p className="pl-2 inline-block align-middle">Home</p>
            </>
          )}
        </Link>
      </div>

      <div className="pt-4">
        <Link to="/capitulos">
          {useLocation().pathname.match("/capitulos") ? (
            <>
              <HiNewspaper size={20} className="inline-block text-purple-700" />
              <p className="pl-2 inline-block align-middle font-semibold">
                LeaderBoards
              </p>
            </>
          ) : (
            <>
              <HiOutlineNewspaper size={20} className="inline-block" />
              <p className="pl-2 inline-block align-middle">Leaderboard</p>
            </>
          )}
        </Link>
      </div>
    </div>
  );
}

export default LeftPanel;
