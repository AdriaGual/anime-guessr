import React from "react";
import chihiroLogo from "../images/neko.svg";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

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
      <div className="pt-6 cursor-pointer">
        <div
          onClick={() => window.open("https://github.com/AdriaGual", "_blank")}
        >
          <FaGithub size={20} className="inline-block text-purple-700" />
          <p className="pl-2 inline-block align-middle font-semibold">
            @AdriaGual
          </p>
        </div>
      </div>{" "}
      {/*<div className="pt-4 cursor-pointer">
        {" "}
        <div
          onClick={() => window.open("https://twitter.com/walie_6", "_blank")}
        >
          <FaTwitter size={20} className="inline-block text-purple-700" />
          <p className="pl-2 inline-block align-middle font-semibold">
            @walie_6
          </p>
        </div>
      </div>{" "}
      <div className="pt-4 cursor-pointer">
        {" "}
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/adri%C3%A0-gual-l%C3%B3pez-100005173/",
              "_blank"
            )
          }
        >
          <FaLinkedin size={20} className="inline-block text-purple-700" />
          <p className="pl-2 inline-block align-middle font-semibold">
            @Adrià Gual
          </p>
        </div>
      </div>{" "}
      <div className="pt-4 cursor-pointer">
        {" "}
        <div
          onClick={() =>
            window.open("https://www.instagram.com/adria_gual", "_blank")
          }
        >
          <FaInstagram size={20} className="inline-block text-purple-700" />
          <p className="pl-2 inline-block align-middle font-semibold">
            @adria_gual
          </p>
        </div>
      </div>
      
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
          </div>*/}
    </div>
  );
}

export default LeftPanel;
