import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className='max-w-screen-lg mx-auto p-4 flex items-center gap-4 justify-evenly w-full'>
          <div className='text-white w-full '>
            <h1 className='text-6xl font-marker mb-4'>Richard Movies</h1>
            <h2 className='text-2xl mb-4'>
              Browse popular films and illuminate your evenings
            </h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              a quod
            </p>
            <Link href={'/movies'}>
              <button className='rounded bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 h-10'>
                Get started
              </button>
            </Link>

            <Link href={'movies/french'}>
              <button className='rounded transition-colors duration-200 hover:bg-gray-500 hover:bg-opacity-50 px-4 py-2 h-10'>
                French Movies
              </button>
            </Link>
          </div>
          <div className='w-full flex flex-col gap-10'>
            <Image
              src='/assets/images/popcorn.png'
              width={124}
              height={124}
              alt={'Richard Movies Logo'}
              draggable={false}
            />
            <Image
              src='/assets/images/movies.png'
              width={124}
              height={124}
              alt={'Richard Movies Logo'}
              draggable={false}
            />
            <Image
              src='/assets/images/cinema.png'
              width={124}
              height={124}
              alt={'Richard Movies Logo'}
              draggable={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}
