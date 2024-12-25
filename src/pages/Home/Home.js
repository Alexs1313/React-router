import { useEffect, useState } from 'react';
import { Item, LinkItem, MovieList, Title } from './Home.styled';
import { getMoviesHome } from '../../services/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMoviesHome()
      .then(setMovies)
      .catch(error => setError(error));

    // fetch(
    //   'https://api.themoviedb.org/3/trending/movie/day?api_key=dd14f9487e4e02d7076de4f707af85c6'
    // )
    //   .then(r => r.json())
    //   .then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <Title>Trending</Title>
      {error && <p>{error.message}</p>}
      <MovieList>
        {movies.map(({ id, title, backdrop_path, vote_average }) => (
          <Item key={id}>
            <LinkItem to={`movies/${id}`}>
              {title}
              {backdrop_path && (
                <img
                  width="300"
                  src={`https://www.themoviedb.org/t/p/w500//${backdrop_path}`}
                  alt={title}
                />
              )}
            </LinkItem>
            <p>Rating: {vote_average} ⭐️</p>
          </Item>
        ))}
      </MovieList>
    </div>
  );
};

export default Home;
