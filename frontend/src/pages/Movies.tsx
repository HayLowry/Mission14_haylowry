import { useState } from 'react';
import data from '../moviedatasample.json';
import Navbar from '../Navbar';

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
      <div>
        <h3>Joel Hilton's Movie</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {ListofMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default Movies;
