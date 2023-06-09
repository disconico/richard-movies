import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const fetchPopularMovies = async (page = 1) => {
  try {
    const { data } = await tmdbAPI.get('/movie/popular', {
      params: { page },
    });
    return data;
  } catch (error) {
    console.error('fetchPopularMovies error : ', error.message);
    throw error;
  }
};

const fetchFrenchMovies = async (page = 1) => {
  try {
    const sort_by = 'popularity.desc';
    const with_original_language = 'fr';

    const { data } = await tmdbAPI.get('/discover/movie', {
      params: {
        page,
        sort_by,
        with_original_language,
      },
    });
    return data;
  } catch (error) {
    console.error('fetchFrenchMovies error : ', error.message);
    throw error;
  }
};

const fetchNowPlayingMovies = async (page = 1) => {
  try {
    const { data } = await tmdbAPI.get('/movie/now_playing', {
      params: { page },
    });
    return data;
  } catch (error) {
    console.error('fetchNowPlayingMovies error : ', error.message);
    throw error;
  }
};

const fetchTopRatedMovies = async (page = 1) => {
  try {
    const { data } = await tmdbAPI.get('/movie/top_rated', {
      params: { page },
    });
    return data;
  } catch (error) {
    console.error('fetchTopRatedMovies error : ', error.message);
    throw error;
  }
};
const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await tmdbAPI.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error('fetchMovieDetails error : ', error.message);
    throw error;
  }
};

const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await tmdbAPI.get(`/movie/${movieId}/reviews`);
    return data;
  } catch (error) {
    console.error('fetchMovieReviews error : ', error.message);
    throw error;
  }
};

const fetchFunctions = {
  popular: fetchPopularMovies,
  french: fetchFrenchMovies,
  nowPlaying: fetchNowPlayingMovies,
  topRated: fetchTopRatedMovies,
};

const fetchMovies = (selectedValue, page) => {
  const fetchFunction = fetchFunctions[selectedValue] || fetchPopularMovies;
  return fetchFunction(page);
};

export { fetchMovies, fetchMovieDetails, fetchMovieReviews };
