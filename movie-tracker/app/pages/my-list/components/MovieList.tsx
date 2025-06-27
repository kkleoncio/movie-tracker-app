import { Movie } from "../types/movie";
import MovieItem from "./MovieItem";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  movies: Movie[];
  onUpdate: (movie: Movie) => void;
  onDelete: (id: string) => void;
}

export default function MovieList({ movies, onUpdate, onDelete }: Props) {
  if (movies.length === 0) return <p>No movies added yet.</p>;

  return (
    <div className="grid grid-cols-4 max-w-500 justify-between gap-7">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}