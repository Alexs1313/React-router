import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Layout from './Layout';

import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from './Cast';
import Review from './Review';

const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
