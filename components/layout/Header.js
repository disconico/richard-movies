import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='border-b sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
      <nav className='max-w-screen-lg mx-auto p-2  px-2 sm:px-6 h-20 flex justify-between items-center'>
        <div className='flex items-center '>
          <Link href='/' className='flex items-center gap-4'>
            <Image
              src='/assets/images/popcorn.png'
              width={48}
              height={48}
              alt={'Richard Movies Logo'}
            />
            <h1 className='text-white  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-marker'>
              Richard Movies
            </h1>
          </Link>
        </div>
        <Link
          href={{
            pathname: '/movies',
            query: { category: 'popular', page: 1 },
          }}
          className='rounded text-slate-50 
          font-medium transition-colors duration-200 hover:bg-gray-500 hover:bg-opacity-50  px-2  sm:px-4 py-2 h-10
            hover:text-gray-300 max-sm:mr-4'
        >
          Browse Movies
        </Link>
      </nav>
    </header>
  );
};

export default Header;
