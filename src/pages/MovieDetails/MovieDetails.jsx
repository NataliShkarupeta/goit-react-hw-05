import { Suspense, useEffect, useState } from 'react';
import { fetchApiDetalis } from 'service/service';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import {
  Span,
  ParentBox,
  ImageBox,
  Wrap,
  AdditionalBox,
  ButtonBack,
} from './MovieDetails.styled';
import { DefaultMassage } from 'components/DefaultComponent/DefaultComponent.styled';

const MovieDetalis = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [defMas] = useState(false);

  useEffect(() => {
    fetchApiDetalis(movieId)
      .then(respons => {
        if (respons.ok) {
          return respons.json();
        }
        return Promise.reject(new Error('Sorry no info'));
        //  setDefMas(true)
      })
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) {
    return null;
  }
  const { poster_path, original_title, overview, genres } = movie;

  console.log(defMas);
  return (
    <Wrap>
      {defMas && <DefaultMassage />}
      <Link to={location.state?.from ?? '/'}>
        <ButtonBack>Go back</ButtonBack>
      </Link>
      <ParentBox>
        <ImageBox>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={original_title}
            width="240"
          />
        </ImageBox>
        <div>
          <h2>{original_title}</h2>
          <p>
            <Span>Overview:</Span> {overview}
          </p>
          <p>
            <Span>Genres: </Span>

            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </p>
        </div>
      </ParentBox>
      <AdditionalBox>
        <p>Additional inrormation</p>
        <li key="cast">
          {' '}
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li key="reviews">
          {' '}
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </AdditionalBox>
      <Suspense>
        <Outlet />
      </Suspense>
    </Wrap>
  );
};

export default MovieDetalis;
