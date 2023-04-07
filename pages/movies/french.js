import Page from '../../components/layout/Page';
import Board from '../../components/Board';
import { fetchFrenchMovies, fetchPopularMovies } from '../../lib/tmdbAPI';

const FrenchMoviesPage = () => {
  return (
    <Page title='French Movies'>
      <Board
        fetchFunction={fetchFrenchMovies}
        queryKey={'frenchMovies'}
        heading={'French movies'}
      />
    </Page>
  );
};

export default FrenchMoviesPage;
