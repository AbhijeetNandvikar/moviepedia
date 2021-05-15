export const baseUrl = "https://image.tmdb.org/t/p/w500";

export const fetchTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=e8ff140250eb7f3306d60b02a528008d`
  ).then((res) => res.json());
};

export const fetchTrendingTvShows = () => {
  return fetch(
    `https://api.themoviedb.org/3/tv/latest?api_key=e8ff140250eb7f3306d60b02a528008d`
  ).then((res) => res.json());
};

export const fetchTopRatedMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=e8ff140250eb7f3306d60b02a528008d`
  ).then((res) => res.json());
};

export const fetchTopRatedTvShows = () => {
  return fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=e8ff140250eb7f3306d60b02a528008d`
  ).then((res) => res.json());
};

export const fetchPopularMovies = (page) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e8ff140250eb7f3306d60b02a528008d&page=${
      page ? page : 1
    }`
  ).then((res) => res.json());
};

export const fetchPopularShows = (page) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=e8ff140250eb7f3306d60b02a528008d&page=${
      page ? page : 1
    }`
  ).then((res) => res.json());
};

export const searchMovie = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=e8ff140250eb7f3306d60b02a528008d&language=en-US&query=${query}&page=1&include_adult=false`
  ).then((res) => res.json());
};

export const serachTvShows = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=e8ff140250eb7f3306d60b02a528008d&language=en-US&query=${query}&page=1&include_adult=false`
  ).then((res) => res.json());
};
