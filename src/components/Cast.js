import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=dd14f9487e4e02d7076de4f707af85c6`
    )
      .then(r => r.json())
      .then(data => setCast(data.cast))
      .catch(e => console.log(e));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ name, character, id, profile_path }) => (
        <li key={id}>
          <img
            src={`https://www.themoviedb.org/t/p/w500//${profile_path}`}
            alt={name}
          />
          <p>Name: {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
