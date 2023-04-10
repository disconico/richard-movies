import Board from '../../components/Board';
import Page from '../../components/layout/Page';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import movieCategories from '../../lib/movieCategories';
import SelectMenu from '../../components/ui/SelectMenu';

const MoviesPage = () => {
  const router = useRouter();
  const initialSelectedValue = router.query.category || 'popular';
  const initialPage = router.query.page || 1;

  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);
  const [currentPage, setCurrentPage] = useState(parseInt(initialPage, 10));

  const selectedCategory = movieCategories[selectedValue];

  useEffect(() => {
    setSelectedValue(router.query.category || 'popular');
    setCurrentPage(parseInt(router.query.page || 1, 10));
  }, [router.query, router]);

  const handleSelectChange = (event) => {
    router.push({
      query: { ...router.query, category: event.target.value, page: 1 },
    });
  };

  const selectMenuItems = [];
  for (const key in movieCategories) {
    selectMenuItems.push({
      value: movieCategories[key].value,
      label: movieCategories[key].label,
    });
  }

  return (
    <Page title={selectedCategory.heading}>
      <div className='flex flex-col sm:flex-row justify-between gap-4 px-4 sm:px-8 my-4 max-w-screen-lg mx-auto items-center'>
        <h1 className='  text-2xl md:text-4xl font-bold '>
          {selectedCategory.heading}
        </h1>
        <SelectMenu
          value={selectedValue}
          onChange={handleSelectChange}
          items={selectMenuItems}
        />
      </div>
      <Board
        fetchFunction={selectedCategory.fetchMovies}
        queryKey={selectedValue}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Page>
  );
};

export default MoviesPage;
