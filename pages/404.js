import Page from '../components/layout/Page';

const Custom404 = () => {
  return (
    <Page title='404: Not Found'>
           <div className='max-w-screen-lg mx-auto py-2 px-6'>
      <h1 className='text-2xl md:text-4xl font-bold'>404: Not Found</h1>
      <p>The page you&apos;re looking for does not exist.</p>
      </div>
    </Page>
  );
};

export default Custom404;
