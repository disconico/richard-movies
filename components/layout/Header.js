import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  const handleMovies = (path) => {
    router.push({ pathname: path, query: { page: 1 } });
  };

  return (
    <header className='border-b sticky top-0 z-50 bg-gray-100'>
      <nav className='max-w-screen-lg mx-auto p-2 h-20 '>
        <div className='flex justify-between items-center'>
          <button onClick={() => handleMovies('/movies')}>
            Popular Movies
          </button>
          <button onClick={() => handleMovies('/movies/french')}>
            French Movies
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
