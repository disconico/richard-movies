import Board from '../../components/Board';
import Page from '../../components/layout/Page';
import { fetchPopularMovies } from '../../lib/tmdbAPI';

const PopularMoviesPage = () => {
  return (
    <Page title='Home'>
      <Board
        fetchFunction={fetchPopularMovies}
        queryKey={'popularMovies'}
        heading={'Popular movies'}
      />
    </Page>
  );
};

export default PopularMoviesPage;
