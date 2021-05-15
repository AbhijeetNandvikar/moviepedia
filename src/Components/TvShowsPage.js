import { render } from "@testing-library/react";
import React, { useState, useRef } from "react";
import { baseUrl, fetchPopularShows } from "../fetch";

const TvShowsPage = () => {
  const dataGrid = useRef();
  const [showsData, setShowsData] = React.useState(null);
  const [page, setpage] = useState(1);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  React.useEffect(() => {
    fetchPopularShows().then((res) => {
      console.log(res);
      if (res) {
        setShowsData(res.results);
      }
    });
  }, []);

  const updateData = (page) => {
    fetchPopularShows(page).then((res) => {
      if (res) {
        setShowsData(res.results);
        setpage(page);
      }
    });
  };

  const searchShows = (query) => {
    console.log(query);
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=e8ff140250eb7f3306d60b02a528008d&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setShowsData(resp.results);
      });
  };
  const renderMovies = (data) => {
    if (data) {
      return data.map((movie) => {
        return (
          <div
            className="group animate rounded-lg overflow-hidden bg-gray-900 flex flex-col relative hover:text-white text-transparent hover:color-gray-900 z-10"
            style={{
              height: "25rem",
            }}
          >
            <img
              src={baseUrl + movie.poster_path}
              className="object-cover z-0 h-full"
            />
            <div className="absolute px-4 mt-auto flex justify-end py-4 flex-col h-full w-full hover:bg-gray-700 hover:bg-opacity-75">
              <div className="text-lg font-bold">{movie.original_name}</div>
              <div className="text-sm opacity-75">{movie.overview}</div>
              <div className="flex mt-3">
                <div className="text">{movie.first_air_date.split("-")[0]}</div>
                <div className="text ml-auto font-bold">
                  {movie.vote_average}
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return <></>;
  };
  return (
    <div ref={dataGrid} className="w-full my-12">
      <div className="flex mt-8 mb-8 items-center justify-center">
        <input
          value={query}
          className="px-3 h-full text-gray-800 py-4 text-lg"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="px-4 py-4 w-36 ml-4 bg-yellow-500 rounded"
          onClick={() => searchShows(query)}
        >
          Search Shows
        </button>
        <select
          onChange={(e) => {
            setFilter(e.target.value);
            fetch(
              `https://api.themoviedb.org/3/tv/${e.target.value}?api_key=e8ff140250eb7f3306d60b02a528008d&language=en-US&page=1&include_adult=false`
            )
              .then((res) => res.json())
              .then((resp) => {
                console.log(resp);
                setShowsData(resp.results);
              });
          }}
          className="text-gray-700 ml-4 h-full py-4  rounded"
        >
          <option>Choose filter</option>
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 mx-auto lg:w-3/4 gap-4">
        {renderMovies(showsData)}
      </div>
      <div className="flex items-center justify-center mt-8">
        <button
          className="px-4 py-4 w-36 mr-4 bg-yellow-500 rounded"
          onClick={() => updateData(page - 1)}
        >
          Previous Page
        </button>
        <button
          className="px-4 py-4 w-36 bg-yellow-500 rounded"
          onClick={() => updateData(page + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default TvShowsPage;
