import Board from '../../components/Board';
import Page from '../../components/layout/Page';
import { fetchPopularMovies } from '../../helpers/tmdbAPI';

const PopularMoviesPage = () => {
  return (
    <Page title='Home'>
      <Board fetchFunction={fetchPopularMovies} queryKey={'popularMovies'} />
    </Page>
  );
};

export default PopularMoviesPage;
