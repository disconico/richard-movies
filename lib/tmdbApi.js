import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchPopularMovies = async (page = 1) => {
  const { data } = await tmdbAPI.get('/movie/popular', {
    params: { page },
  });
  return data;
};

export const fetchFrenchMovies = async (page = 1) => {
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
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await tmdbAPI.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await tmdbAPI.get(`/movie/${movieId}/reviews`);
  return data;
};
