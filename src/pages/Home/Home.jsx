import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchApi } from 'service/service';
import { Box, H2 } from './Home.styled';
import DefaultComponent from 'components/DefaultComponent/DefaultComponent';
 const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchApi()
      .then(respons => {
        if (respons.ok) {
          return respons.json();
        }

        return Promise.reject(new Error('Sorry no info'));
      })
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  if (movies.length === 0) {
    return <DefaultComponent/>
  }
  return (
    <>
      <Box>
        <H2>Trending Today</H2>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </Box>
      
    </>
  );
};

export default Home;