import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='border-b sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
      <nav className='max-w-screen-lg mx-auto p-2 h-20 flex justify-between'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center gap-4'>
            <Image
              src='/assets/images/popcorn.png'
              width={48}
              height={48}
              alt={'Richard Movies Logo'}
            />
            <h1 className='text-white text-4xl font-marker'>Richard Movies</h1>
          </Link>
        </div>
        <div className='flex gap-4 text-slate-50 items-center'>
          <Link
            href={{
              pathname: '/movies',
              query: { category: 'popular', page: 1 },
            }}
            className='rounded transition-colors duration-200 hover:bg-gray-500 hover:bg-opacity-50 px-4 py-2 h-10
            hover:text-gray-300'
          >
            Browse Movies
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
