import React, { useState, useEffect } from 'react';

const MovieApi = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = 'b026697073d41d63efa453c6bb2bb600';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieApi;
