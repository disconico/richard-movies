import Page from '../../components/layout/Page';
import MovieDetails from '../../components/MovieDetails';
import MovieReviews from '../../components/MovieReviews';
import { useRouter } from 'next/router';
import { useQuery, QueryClient, dehydrate } from 'react-query';
import { fetchMovieDetails } from '../../lib/tmdbAPI';

const MovieDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError, error } = useQuery(
    ['movieDetails', id],
    () => fetchMovieDetails(id),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 60 * 24,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <Page title={data.title || 'Your movie'}>
      <div className='max-w-screen-lg mx-auto p-2'>
        <MovieDetails movie={data} />
        <MovieReviews movieId={id} />
      </div>
    </Page>
  );
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['movieDetails', id], () =>
    fetchMovieDetails(id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default MovieDetailsPage;
