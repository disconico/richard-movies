import Link from 'next/link';
import ImageWithFallback from './layout/ImageWIthFallback';
import fallback from '../public/assets/placeholderBackdrop.png';

const MovieCard = ({ movie }) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 m-4 w-72'>
      <Link href={`/movies/${movie.id}`}>
        <ImageWithFallback
          fallbackImage={fallback}
          className='w-full h-auto object-cover mb-2 rounded-lg'
          width={224}
          height={336}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h3 className='font-semibold text-lg'>{movie.original_title}</h3>
        <p className='text-gray-500'>Release Date: {movie.release_date}</p>
        <p className='text-gray-500'>
          Rating: {movie.vote_average} ({movie.vote_count} votes)
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
