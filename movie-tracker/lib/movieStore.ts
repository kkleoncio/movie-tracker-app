import { Movie } from "@/app/pages/my-list/types/movie";

let movies: Movie[] = [];

export const getMovies = () => movies;

export const addMovie = (movie: Movie) => {
  movies.push(movie);
};

export const updateMovie = (id: string, updated: Partial<Movie>) => {
  movies = movies.map(movie =>
    movie.id === id ? { ...movie, ...updated } : movie
  );
};

export const deleteMovie = (id: string) => {
  movies = movies.filter(movie => movie.id !== id);
};

