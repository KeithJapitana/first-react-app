import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

//bfc2f41d

const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a';

const movie1 = {
  Title: 'Spiderman',
  Year: '1990',
  imdbID: 'tt0100669',
  Type: 'movie',
  Poster: 'N/A',
};
function App() {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies('Spiderman');
  }),
    [];
  return (
    <>
      <div className="app flex flex-col items-center justify-center ">
        <h1>Movie Land</h1>
      </div>
      <div className="search flex items-center  justify-center">
        <input
          type="text"
          placeholder="Search for movies"
          value={'Superman'}
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search icon" onClick={() => {}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie={movies[0]} /> */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </>
  );
}

export default App;
