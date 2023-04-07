import ImageWithFallback from './layout/ImageWIthFallback';
import fallback from '../public/assets/images/placeholderBackdrop.png';
import posterFallback from '../public/assets/images/placeholderPoster.png';
import useWindowSize from '../hooks/useWindowSize';

const MovieDetails = ({ movie }) => {
  const {
    poster_path,
    backdrop_path,
    release_date,
    title,
    genres,
    original_language,
    runtime,
    vote_average,
    vote_count,
    overview,
  } = movie;
  const { width } = useWindowSize();

  return (
    <div className='bg-white shadow-lg rounded-lg mx-auto max-w-5xl'>
      <div className='flex flex-col md:flex-row'>
        {width >= 768 ? (
          <ImageWithFallback
            fallbackImage={posterFallback}
            className='w-64 h-auto rounded-l-lg object-cover'
            width={500}
            height={800}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        ) : (
          <ImageWithFallback
            fallbackImage={fallback}
            className='w-full h-auto object-cover mb-2 rounded-lg'
            width={500}
            height={800}
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={title}
          />
        )}
        <div className='p-6'>
          <h2 className='text-2xl font-bold mb-2'>{title}</h2>
          <p className='text-sm text-gray-600 mb-4'>
            Release Date: {release_date}
          </p>
          <p className='mb-4'>{overview}</p>
          <div className='flex flex-wrap'>
            {genres.map((genre) => (
              <span
                key={genre.id}
                className='bg-gray-200 text-gray-600 py-1 px-2 rounded mr-2 mb-2'
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className='text-sm mt-4'>
            Original Language: {original_language.toUpperCase()}
          </p>
          <p className='text-sm'>Runtime: {runtime} minutes</p>
          <p className='text-sm'>
            Rating: {vote_average} ({vote_count} votes)
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
