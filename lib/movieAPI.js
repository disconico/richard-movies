import {
  fetchPopularMovies,
  fetchFrenchMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
} from './tmdbAPI';

export const fetchMovies = (selectedValue, page) => {
  if (selectedValue === 'popular') {
    return fetchPopularMovies(page);
  } else if (selectedValue === 'french') {
    return fetchFrenchMovies(page);
  } else if (selectedValue === 'nowPlaying') {
    return fetchNowPlayingMovies(page);
  } else if (selectedValue === 'topRated') {
    return fetchTopRatedMovies(page);
  }
  return fetchPopularMovies(page);
};
