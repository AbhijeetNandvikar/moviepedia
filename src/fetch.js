export const fetchTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=e8ff140250eb7f3306d60b02a528008d`
  );
};

export const fetchTrendingTvShows = () => {
  return fetch(
    `https://api.themoviedb.org/3/tv/latest?api_key=e8ff140250eb7f3306d60b02a528008d`
  );
};

export const fetchTopRatedMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=e8ff140250eb7f3306d60b02a528008d`
  );
};

export const fetchTopRatedTvShows = () => {
  return fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=e8ff140250eb7f3306d60b02a528008d`
  );
};

export const fetchPopularMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e8ff140250eb7f3306d60b02a528008d`
  );
};

export const fetchPopularShows = () => {
  return fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=e8ff140250eb7f3306d60b02a528008d`
  );
};

export const searchMovie = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=e8ff140250eb7f3306d60b02a528008d&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

export const serachTvShows = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=e8ff140250eb7f3306d60b02a528008d&language=en-US&query=${query}&page=1&include_adult=false`
  );
};
