import { useQuery } from 'react-query';
import { fetchMovieReviews } from '../lib/tmdbAPI';

const MovieReviews = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(
    ['movieReviews', movieId],
    () => fetchMovieReviews(movieId)
  );

  if (isLoading) return <div>Loading reviews...</div>;
  if (isError) return <div>Error fetching reviews: {error.message}</div>;

  if (data.results.length === 0) {
    return <div>No reviews available for this movie.</div>;
  }

  const sortedReviews = [...data.results]
    .filter((review) => review.author_details.rating !== null)
    .sort((a, b) => b.author_details.rating - a.author_details.rating);

  const bestReview = sortedReviews[0];
  const worstReview =
    sortedReviews.length > 1 ? sortedReviews[sortedReviews.length - 1] : null;

  return (
    <div className='bg-white p-6 rounded-md shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Reviews</h2>
      {bestReview && (
        <div className='mb-4'>
          <h3 className='font-medium text-lg'>
            Best review (Rating: {bestReview.author_details.rating}) by{' '}
            {bestReview.author}
          </h3>
          <p className='text-sm text-gray-600'>{bestReview.content}</p>
        </div>
      )}
      {worstReview && (
        <div>
          <h3 className='font-medium text-lg'>
            Worst review (Rating: {worstReview.author_details.rating}) by{' '}
            {worstReview.author}
          </h3>
          <p className='text-sm text-gray-600'>{worstReview.content}</p>
        </div>
      )}
      {!worstReview && <p>Only one review available.</p>}
    </div>
  );
};

export default MovieReviews;
