import React, { Component } from "react";
import {
  HiHome,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiNewspaper,
} from "react-icons/hi";
export class TopPanel extends Component {
  render() {
    return (
      <div className="py-4 shadow-lg w-screen md:hidden block">
        <div className="grid grid-cols-2 text-center">
          <div>
            {window.location.pathname.match("/") ? (
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
          </div>
          <div>
            {window.location.pathname.match("/content") ? (
              <>
                <HiNewspaper
                  size={20}
                  className="inline-block text-purple-700"
                />
                <p className="pl-2 inline-block align-middle font-semibold">
                  Capítulos
                </p>
              </>
            ) : (
              <>
                <HiOutlineNewspaper size={20} className="inline-block" />
                <p className="pl-2 inline-block align-middle">Capítulos</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TopPanel;
