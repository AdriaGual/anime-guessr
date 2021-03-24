import React, { Component } from "react";
import { HiOutlineHome } from "react-icons/hi";
import chihiroLogo from "../images/neko.svg";
export class TopPanel extends Component {
  render() {
    return (
      <div className="py-4 shadow-lg w-screen md:hidden block">
        <div className="grid grid-cols-2 text-center">
          <div>
            {window.location.pathname.match("/") ? (
              <>
                <img
                  src={chihiroLogo}
                  width="40"
                  alt="hatLogo"
                  className="inline-block"
                ></img>
                <p className="pl-2 inline-block align-middle font-semibold">
                  AnimeGuesser
                </p>
              </>
            ) : (
              <>
                <HiOutlineHome size={20} className="inline-block" />
                <p className="pl-2 inline-block align-middle">Home</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TopPanel;
