'use client';

import Header from "@/components/ui/header";
import { useEffect, useState } from "react";
import { Movie } from "./types/movie";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function MyList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch("/api/movies");
    const data = await res.json();
    setMovies(data);
    setLoading(false);
  };

  const addMovie = async (movie: Omit<Movie, 'id'>) => {
    const res = await fetch("/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie)
    });
    const newMovie = await res.json();
    setMovies(prev => [...prev, newMovie]);
  };

  const updateMovie = async (movie: Movie) => {
    const res = await fetch(`/api/movies/${movie.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie)
    });
    const updated = await res.json();
    setMovies(prev => prev.map(m => m.id === updated.id ? updated : m));
  };

  const deleteMovie = async (id: string) => {
    await fetch(`/api/movies/${id}`, { method: "DELETE" });
    setMovies(prev => prev.filter(m => m.id !== id));
  };

  return (
    <main className="p-10">
      <div className="flex justify-between mb-8">
        <Header title="Watched Movies" />
        <MovieForm onAdd={addMovie} />
      </div>
      {loading ? <p>Loading...</p> : (
        <MovieList
          movies={movies}
          onUpdate={updateMovie}
          onDelete={deleteMovie}
        />
      )}
    </main>
  );
}