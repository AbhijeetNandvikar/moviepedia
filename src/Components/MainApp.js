import React from "react";
import MoviesPage from "./MoviesPage";
import TvShowsPage from "./TvShowsPage";

const MainApp = () => {
  const [currentPage, setCurrentPage] = react.useState("");

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCurrentPage("movies");
          }}
        >
          Movies
        </button>
        <button
          onClick={() => {
            setCurrentPage("tvShows");
          }}
        >
          TV Shows
        </button>
      </div>
      {currentPage === "movies" ? <MoviesPage /> : <TvShowsPage />}
    </div>
  );
};

export default MainApp;
