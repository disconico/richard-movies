import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0 maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width, initial-scale=1.0, viewport-fit=cover'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-full flex'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col sm:flex-row items-center gap-4 justify-center w-full'>
          <div className='text-white w-full flex gap-4 p-4 flex-col'>
            <h1 className='text-6xl font-marker mb-4'>Richard Movies</h1>
            <h2 className='text-2xl mb-4'>
              Discover a world of entertainment with Richard Movies
            </h2>
            <p className='text-gray-400 mb-4'>
              Explore a vast collection of popular, top-rated, French, and
              now-playing movies to suit every taste. Enjoy the ultimate movie
              experience from the comfort of your home, with friends, or on the
              go.
            </p>
            <div className='flex gap-4'>
              <Link href={'movies?category=popular&page=1'}>
                <button className='rounded bg-gradient-to-r from-red-500 to-red-700 text-white px-2 py-2 h-10 hover:from-white hover:to-white hover:text-red-500 hover:outline hover:outline-1 hover:outline-red-500 flex justify-center w-40 sm:w-44'>
                  Get started
                </button>
              </Link>
              <Link href={'movies?category=french&page=1'}>
                <button className='rounded transition-colors duration-200 hover:bg-gray-500 hover:bg-opacity-50 outline outline-1 outline-gray-500  px-2  py-2 h-10 flex justify-center gap-2 items-center  w-40 sm:w-44'>
                  French Movies{' '}
                  <span>
                    <BsArrowRightShort />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=' w-3/5  sm:w-full flex justify-center  '>
            <Image
              src='/assets/images/popcorn.png'
              width={360}
              height={360}
              alt={'Richard Movies Logo'}
              draggable={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}
