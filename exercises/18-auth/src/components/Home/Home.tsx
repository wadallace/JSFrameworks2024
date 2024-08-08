// You might need to import something from React
import { useState } from "react";
import { IMovie } from "../../types/movies";
// import Axios (or use Fetch)

type HomeProps = {
  token: string;
  logout: Function;
};

function Home({ token, logout }: HomeProps) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Make an AJAX request to http://localhost:7001/api/movies to get a list of movies.
   * Be sure to provide the token in the AJAX request.
   */

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        {/* Make this button functional */}
        <button className="btn btn-primary">Logout</button>
      </div>
      {movies.map((movie, idx) => {
        return (
          <div className="media mb-3" key={`movie-${idx}`}>
            <img
              src={movie.poster}
              alt={movie.title}
              width="150"
              height="220.875"
              className="mr-3"
            />
            <div className="media-body">
              <h2 className="h3">{movie.title}</h2>
              <p>{movie.synopsis}</p>
            </div>
          </div>
        );
      })}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default Home;
