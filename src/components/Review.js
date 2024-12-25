import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [review, setRewview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=dd14f9487e4e02d7076de4f707af85c6`
    )
      .then(r => r.json())
      .then(data => setRewview(data.results))
      .catch(e => console.log(e));
  }, [movieId]);

  return (
    <div>
      {review.length > 0 ? (
        <ul>
          {review.map(({ author, content }) => (
            <li>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'There are no rewiews about this film'
      )}
    </div>
  );
};

export default Review;
