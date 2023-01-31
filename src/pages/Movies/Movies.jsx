import { Suspense, useState } from 'react';
import { SearchField } from 'components/SearchField/SEarcoField';
import { fetchApiQuery } from 'service/service';
import { Link, useSearchParams, Outlet, useLocation } from 'react-router-dom';
import { Box } from 'pages/Home/Home.styled';
import { useEffect } from 'react';

 const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();


  const searchWord = queryWord => {
    setSearchParams(queryWord !== '' ? { query: queryWord } : {});
  };


  useEffect(() => {

    if (query !== '' )
      fetchApiQuery(query)
        .then(respons => {
          if (respons.ok) {
            return respons.json();
          }
          return Promise.reject(new Error('Sorry no info'));
        })
        .then(data => setMovies(data.results))

        .catch(error => console.log(error));
  }, [query]);

  return (
    <>
      <SearchField searchWord={searchWord} query={query} />
      {movies && (
        <>
          <Box>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title || movie.name}
                </Link>
              </li>
            ))}
          </Box>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default Movies;