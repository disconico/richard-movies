import Page from '../../components/layout/Page';
import MovieDetails from '../../components/MovieDetails';
import MovieReviews from '../../components/MovieReviews';
import { useRouter } from 'next/router';
import { useQuery, QueryClient, dehydrate } from 'react-query';
import { fetchMovieDetails } from '../../lib/tmdbApi';
import { AiOutlineBackward } from 'react-icons/ai';

const MovieDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError, error } = useQuery(
    ['movieDetails', id],
    () => fetchMovieDetails(id),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 60 * 24,
      retry: 3,
      retryDelay: 3000,
    }
  );

  return (
    <Page title={(data && data.title) || 'Your movie'}>
      <div className='max-w-screen-lg mx-auto py-2 px-6'>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Film not found</div>}
        {data && !error && (
          <>
            <MovieDetails movie={data} />
            <MovieReviews movieId={id} />
          </>
        )}
        <div className='flex flex-col items-end'>
          <button
            onClick={() => router.back()}
            className='rounded bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-2 py-2 h-10 hover:from-white hover:to-white hover:text-gray-800 hover:outline hover:outline-1 hover:outline-gray-600 hover:shadow-xl transition duration-300 ease-in-out flex justify-center items-center w-36 gap-2'
          >
            <span>
              <AiOutlineBackward />
            </span>{' '}
            Go Back
          </button>
        </div>
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
