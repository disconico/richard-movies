import { fetchMovies } from './movieAPI';

const movieCategories = {
  popular: {
    heading: 'Popular movies',
    value: 'popular',
    label: 'Popular',
    fetchMovies: (page) => fetchMovies('popular', page),
  },
  french: {
    heading: 'French movies',
    value: 'french',
    label: 'French',
    fetchMovies: (page) => fetchMovies('french', page),
  },
  topRated: {
    heading: 'Top rated movies',
    value: 'topRated',
    label: 'Top rated',
    fetchMovies: (page) => fetchMovies('topRated', page),
  },
  nowPlaying: {
    heading: 'Now playing movies',
    value: 'nowPlaying',
    label: 'Now playing',
    fetchMovies: (page) => fetchMovies('nowPlaying', page),
  },
};

export default movieCategories;
