import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Movie {
  id: number;
  title: string;
}

interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}

function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/movies")
      .then((res) => setMovies(res.data.results))
      .then((res) => console.log(res))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}

export default MovieGrid;
