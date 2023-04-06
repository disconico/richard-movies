import Head from 'next/head';

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
      <section className=' dark:bg-gray-900'>hi</section>
    </>
  );
}
