import React from "react";
import { globalData } from "./UserContext";

const Navbar = () => {
  let { currentPage, setCurrentPage } = React.useContext(globalData);

  return (
    <div className="w-full h-28 bg-gray-800  shadow-md flex items-center px-8">
      <div className="text-white font-bold text-2xl cursor-pointer">
        Moviepedia
      </div>
      <div className="flex items-center">
        <div
          onClick={(e) => setCurrentPage("movies")}
          className="ml-8 text-opacity-75 cursor-pointer"
        >
          Movies
        </div>
        <div
          onClick={(e) => setCurrentPage("tvShows")}
          className="ml-8 text-opacity-75 cursor-pointer"
        >
          TV Shows
        </div>
      </div>
    </div>
  );
};

export default Navbar;
