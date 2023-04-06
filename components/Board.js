import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import MovieCard from './MovieCard';

const Board = ({ fetchFunction, queryKey }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const { page } = router.query;

    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }, [router.query]);

  const { data, isLoading, isError, error, isFetching, isPreviousData } =
    useQuery([queryKey, currentPage], () => fetchFunction(currentPage), {
      keepPreviousData: true,
    });

  const handleNextPage = () => {
    if (!isPreviousData) {
      router.push({ query: { ...router.query, page: currentPage + 1 } });
    }
  };

  const handlePrevPage = () => {
    router.push({
      query: { ...router.query, page: Math.max(currentPage - 1, 1) },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className='max-w-screen-lg mx-auto p-2'>
      <div className='flex flex-wrap justify-evenly'>
        {data.results &&
          data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      <div className='flex justify-center items-center space-x-4 my-4'>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={isPreviousData}>
          Next
        </button>
        {isFetching ? <span> Loading...</span> : null}{' '}
      </div>
    </div>
  );
};

export default Board;
