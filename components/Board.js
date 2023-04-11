import { useRouter } from 'next/router';
import { Pagination } from '@mui/material';
import MovieCard from './MovieCard';

const MAX_PAGE_COUNT = 100;

const Board = ({
  data,
  isLoading,
  isError,
  error,
  isFetching,
  isPreviousData,
  currentPage,
  setCurrentPage,
}) => {
  const router = useRouter();

  const handleChange = (event, value) => {
    if (!isPreviousData) {
      setCurrentPage(value);
      router.push({ query: { ...router.query, page: value } });
    }
  };

  if (isLoading) return <div></div>;
  if (isError) return <div>{error.message}</div>;

  const pages = Math.min(MAX_PAGE_COUNT, data.total_pages);

  return (
    <div className='max-w-screen-lg mx-auto p-2'>
      <div className='flex flex-wrap justify-evenly gap-4'>
        {data.results &&
          data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      <div className='flex justify-center items-center space-x-4 my-4'>
        {isFetching ? <span> Loading...</span> : null}{' '}
        <Pagination count={pages} page={currentPage} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Board;
