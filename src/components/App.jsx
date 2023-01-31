
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const MovieDetalis = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Layout = lazy(() => import('./Layout/Layout'));
const DefaultComponent = lazy(() =>
  import('./DefaultComponent/DefaultComponent')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetalis />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<DefaultComponent />} />
    </Routes>
  );
};
