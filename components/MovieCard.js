import Link from 'next/link';
import ImageWithFallback from './layout/ImageWIthFallback';
import fallback from '../public/assets/images/placeholderBackdrop.png';
import posterFallback from '../public/assets/images/placeholderPoster.png';
import { FcCalendar } from 'react-icons/fc';
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';

const MovieCard = ({ movie, screenSize }) => {
  const getRating = (rating) => {
    if (rating === 0 || rating === null) {
      return <BsStar className='text-yellow-500' />;
    } else if (4 <= rating && rating <= 7) {
      return <BsStarHalf className='text-yellow-500' />;
    } else if (rating > 7) {
      return <BsStarFill className='text-yellow-500' />;
    } else {
      return <BsStar className='text-yellow-500' />;
    }
  };

  return (
    <div
      className='bg-white shadow-md rounded-lg p-4 m-2 w-4/5 sm:w-64 
     flex flex-col'
    >
      <Link href={`/movies/${movie.id}`} className='flex flex-col flex-grow'>
        {screenSize >= 640 && (
          <ImageWithFallback
            fallbackImage={fallback}
            className='w-full h-auto object-cover mb-2 rounded-lg'
            width={224}
            height={336}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
        )}
        {screenSize < 640 && (
          <ImageWithFallback
            fallbackImage={posterFallback}
            className='w-full h-auto object-cover mb-2 rounded-lg'
            width={500}
            height={800}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <div className='flex-grow flex flex-col justify-between gap-2'>
          <h3 className='font-semibold text-lg'>{movie.original_title}</h3>
          <div>
            <p className='text-gray-500 flex gap-2 items-center'>
              <span>{<FcCalendar />}</span> Release Date: {movie.release_date}
            </p>
            <p className='text-gray-500 flex gap-2 items-center'>
              <span>{getRating(movie.vote_average)}</span>Rating:{' '}
              {movie.vote_average} ({movie.vote_count} votes)
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
