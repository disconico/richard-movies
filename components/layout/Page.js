import { Fragment } from 'react';
import Head from 'next/head';
import Header from './Header';

const Page = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`Richard Movies | ${title}`}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0 maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width, initial-scale=1.0, viewport-fit=cover'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=' mx-auto h-full'>
        <Header />
        <Fragment>{children}</Fragment>
      </div>
    </>
  );
};

export default Page;
