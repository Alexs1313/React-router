import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getMoviesByQuery } from '../services/Api';
import Spiner from 'components/Spiner';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onChange = e => {
    const inputText = e.target.value;
    inputText !== ''
      ? setSearchParams({ query: inputText })
      : setSearchParams({});
  };

  const handleSubmit = e => {
    e.preventDefault();

    getMoviesByQuery(query).then(response => {
      setData(response);

      setLoading(true);

      getMoviesByQuery(query).then(response => {
        if (response.length === 0) {
          setLoading(false);

          return toast.warn("We couldn't find result on your request.", {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
          });
        }

        setData(response);
        setLoading(false);
        setSearchParams('');
      });
    });
  };

  return (
    <Suspense>
      <form onSubmit={handleSubmit}>
        <h2>Search</h2>
        <input
          type="text"
          value={query}
          placeholder="Fight Club"
          onChange={onChange}
        />
        <button type="sumbit">Search 🔍</button>
      </form>
      {loading && <Spiner />}
      <MoviesList movies={data} />
      <ToastContainer />
    </Suspense>
  );
};

//   const [query, setQuery] = useState('');
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const queryString = searchParams.get('query') ?? '';

//   const onChange = e => {
//     setQuery(e.target.value);
//     setSearchParams(query !== '' ? { query: query } : {});
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!query) {
//       return;
//     }

//     setLoading(true);

//     if (query === '') {
//       return toast.error('Заповніть поле пошуку!', {
//         position: 'top-right',
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'colored',
//       });
//     }

//     getMoviesByQuery(query)
//       .then(response => {
//         if (response.length === 0) {
//           setLoading(false);
//           setData([]);
//           return toast.warn("We couldn't find result on your request.", {
//             position: 'top-right',
//             autoClose: 3000,
//             theme: 'colored',
//           });
//         }

//         setData(response);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log(error);
//       });

//     setQuery('');
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h2 className="formSearchTitle">Search</h2>
//         <input
//           className="formInput"
//           type="text"
//           value={query}
//           placeholder="Fight Club"
//           onChange={onChange}
//         />
//         <button className="formSubmit" type="sumbit">
//           Search 🔍
//         </button>
//       </form>
//       {loading && <Spiner />}
//       <div>
//         <ul>
//           {data.map(({ id, title }) => (
//             <li key={id}>
//               <Link to={`${id}`}>{title}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

export default Movies;
