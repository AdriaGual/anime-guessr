import React from "react";
import nekoLogo from "../images/neko.svg";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Toggle } from "../utils/toggle";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
function LeftPanel() {
  return (
    <div className="p-10 shadow-xl h-screen hidden lg:block border-r-2 border-gray-300 bg-primary">
      <img
        src={nekoLogo}
        width="40"
        alt="nekoLogo"
        className="inline-block"
      ></img>
      <p className="text-lg font-bold inline-block align-middle pl-2 text-primary">
        AnimeGuessr
      </p>

      <div className="pt-6">
        <Link to="/">
          {useLocation().pathname.endsWith("/") ? (
            <>
              <HiHome size={20} className="inline-block text-primary" />
              <p className="pl-2 inline-block align-middle font-semibold text-primary">
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

      <div className="pt-4 cursor-pointer absolute bottom-32 left-10">
        <div
          onClick={() =>
            window.open("https://github.com/AdriaGual/anime-guessr", "_blank")
          }
        >
          <FaGithub size={20} className="inline-block text-primary" />
          <p className="pl-2 inline-block align-middle font-semibold text-primary">
            Repo
          </p>
        </div>
      </div>
      <div className="pt-6 absolute bottom-10 left-10">
        <Toggle></Toggle>
      </div>

      <div className="pt-10 cursor-pointer absolute bottom-44 left-10">
        <div
          onClick={() => window.open("https://twitter.com/walie_6", "_blank")}
        >
          <FaTwitter size={20} className="inline-block text-primary" />
          <p className="pl-2 inline-block align-middle font-semibold text-primary">
            @walie_6
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
