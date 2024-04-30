import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  movie_id: number;
  vote_average: number;
}

interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();


    setLoading(true);
    const fetchMovies = async() => {
      
      try {
      const {data} = await apiClient.get<FetchMoviesResponse>('/movie/popular', {
        signal: controller.signal,
      });
      setMovies(data.results)
      setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) {
          console.warn('Request cancelled:', error.message);
          setLoading(false);
          return;
        }

        console.error ('Error fetching movies:', error);
        setError((error as AxiosError).message || "An error occurred.")

      }    
    }

    fetchMovies();

      return () => controller.abort();
  }, []);


  return { movies, error, isLoading };
}

export default useMovies;