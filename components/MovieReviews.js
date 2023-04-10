import Image from 'next/image';
import { useQuery } from 'react-query';
import { fetchMovieReviews } from '../lib/tmdbAPI';
import { IoIosThumbsUp, IoIosThumbsDown } from 'react-icons/io';

const MovieReviews = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(
    ['movieReviews', movieId],
    () => fetchMovieReviews(movieId)
  );

  if (isLoading) return <div>Loading reviews...</div>;
  if (isError) return <div>Error fetching reviews: {error.message}</div>;

  const nonNullReviews = data.results.filter(
    (review) => review.author_details.rating !== null
  );

  const sortedReviews = [...nonNullReviews].sort(
    (a, b) => b.author_details.rating - a.author_details.rating
  );

  const bestReview = sortedReviews[0];
  const worstReview =
    sortedReviews.length > 1 ? sortedReviews[sortedReviews.length - 1] : null;

  return (
    <div className='py-4 '>
      <div className='flex gap-4 items-center mb-4'>
        <Image
          src='/assets/images/star.png'
          alt='review'
          width={26}
          height={26}
        />
        <h2 className='text-2xl font-semibold '>Reviews</h2>
      </div>
      {nonNullReviews.length === 0 ? (
        <div className='py-4'>No reviews available for this movie.</div>
      ) : (
        <>
          {bestReview && (
            <div className='mb-6'>
              <div className='flex items-center gap-2 mb-2'>
                <IoIosThumbsUp className='text-green-500' />
                <h3 className='font-medium text-lg'>
                  Best review - {bestReview.author_details.rating}/10 :{' '}
                  <span className='text-sm font-normal italic'>
                    by {bestReview.author}
                  </span>
                </h3>
              </div>
              <p className='text-sm text-gray-600  '>{bestReview.content}</p>
            </div>
          )}
          {worstReview && (
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <IoIosThumbsDown className='text-red-400' />
                <h3 className='font-medium text-lg'>
                  Worst review - {worstReview.author_details.rating}/10 :{' '}
                  <span className='text-sm font-normal italic'>
                    by {worstReview.author}
                  </span>
                </h3>
              </div>
              <p className='text-sm text-gray-600'>{worstReview.content}</p>
            </div>
          )}
          {bestReview && !worstReview && <p>Only one review available.</p>}
        </>
      )}
    </div>
  );
};

export default MovieReviews;
