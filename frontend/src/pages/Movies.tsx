import { useState } from 'react';
import data from '../moviedatasample.json';
import Navbar from '../Navbar';
import MovieList from '../movies/MovieList';

const mds = data.MovieData;

function Movies() {
  const [ListofMovies, setListofMovies] = useState(mds);

  const addMovie = () => {
    setListofMovies([
      ...mds,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };
  return (
    <>
      <Navbar></Navbar>

      <MovieList />

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default Movies;
