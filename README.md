# Richard Movies

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Display popular movies with relevant information for users to browse.
- Filter movies by category: Popular, French, Top Rated, and Now Playing.
- Show detailed movie information on individual movie pages, including an overview, release date, and user ratings.
- Display movie reviews on individual movie pages, allowing users to read both positive and negative reviews.

## Possible improvements

- Implement user authentication to allow users to create profiles.
- Add a feature for users to save their favorite movies to their profiles.
- Allow users to rate movies and submit their own reviews.
- Add search functionality to help users find specific movies more easily.
- Enhance the filter options to include more categories or languages.

## The main components of the app include:

- /movies/index: Main movie listing page with category selection and movie board.
- /movies/[id]: Individual movie detail pages with movie information and reviews.
- /components/board: Movie board component to display movie cards and pagination.
- tmdbAPI.js: Helper functions for fetching movie data from the TMDB API.
- movieCategories.js: Defines movie categories and their corresponding fetch functions.

## API

- This app uses the The Movie Database API to fetch movie information and reviews.
