import Page from '../../components/layout/Page';
import Board from '../../components/Board';
import { fetchFrenchMovies, fetchPopularMovies } from '../../helpers/tmdbAPI';

const FrenchMoviesPage = () => {
  return (
    <Page title='French Movies'>
      <Board fetchFunction={fetchFrenchMovies} queryKey={'frenchMovies'} />
    </Page>
  );
};

export default FrenchMoviesPage;
