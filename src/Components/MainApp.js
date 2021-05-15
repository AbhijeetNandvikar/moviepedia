import React from "react";
import MoviesPage from "./MoviesPage";
import TvShowsPage from "./TvShowsPage";
import { globalData } from "./UserContext";

const MainApp = () => {
  //   const [currentPage, setCurrentPage] = React.useState("movies");
  let { currentPage, setCurrentPage } = React.useContext(globalData);
  return (
    <div>{currentPage === "movies" ? <MoviesPage /> : <TvShowsPage />}</div>
  );
};

export default MainApp;
