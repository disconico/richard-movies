import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import MovieCard from './MovieCard';
import { Pagination } from '@mui/material';
import useWindowSize from '../hooks/useWindowSize';

const PAGE_COUNT = 100;

const Board = ({ fetchFunction, queryKey, currentPage, setCurrentPage }) => {
  const router = useRouter();
  const { width } = useWindowSize();

  const { data, isLoading, isError, error, isFetching, isPreviousData } =
    useQuery([queryKey, currentPage], () => fetchFunction(currentPage), {
      keepPreviousData: true,
    });

  const handleChange = (event, value) => {
    if (!isPreviousData) {
      setCurrentPage(value);
      router.push({ query: { ...router.query, page: value } });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className='max-w-screen-lg mx-auto p-2'>
      <div className='flex flex-wrap justify-evenly gap-4'>
        {data.results &&
          data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} screenSize={width} />
          ))}
      </div>
      <div className='flex justify-center items-center space-x-4 my-4'>
        {isFetching ? <span> Loading...</span> : null}{' '}
        <Pagination
          count={PAGE_COUNT}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Board;
