import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { LinkStyled, Title } from './MovieDetails.styled';
import { getMovieDetails } from '../../services/Api';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const [backLinkHref] = useState(() => location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId).then(data => setDataMovie(data));
    // fetch(
    //   `https://api.themoviedb.org/3/movie/${movieId}?api_key=dd14f9487e4e02d7076de4f707af85c6`
    // )
    //   .then(r => r.json())
    //   .then(data => setDataMovie(data));
  }, [movieId]);

  const { title, overview, poster_path } = dataMovie;
  console.log(location);
  return (
    <div>
      <LinkStyled to={backLinkHref}> Return </LinkStyled>
      <div>
        <Title>{title}</Title>
        <img
          src={`https://www.themoviedb.org/t/p/w500//${poster_path}`}
          alt={title}
        ></img>
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
      <h2>Additional info:</h2>
      <Link to={'cast'}>cast 🐷</Link>
      <Link to={'review'}>review 👻</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
