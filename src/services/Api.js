import axios from 'axios';

export const getMoviesHome = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=dd14f9487e4e02d7076de4f707af85c6'
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=dd14f9487e4e02d7076de4f707af85c6`
  );
  return response.data;
};

export const getMoviesByQuery = async query => {
  const response = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=dd14f9487e4e02d7076de4f707af85c6&query=${query}`
  );
  return (await response).data.results;
};
