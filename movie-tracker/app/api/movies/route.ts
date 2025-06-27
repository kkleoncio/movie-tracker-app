import { Movie } from "@/app/pages/my-list/types/movie";
import { addMovie, getMovies } from "@/lib/movieStore";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

let movies: Movie[] = [];


export async function GET() {
  return NextResponse.json(getMovies());
}

export async function POST(req: Request) {
  const body = await req.json();
  const newMovie = { id: uuidv4(), ...body };
  addMovie(newMovie);
  return NextResponse.json(newMovie, { status: 201 });
}

export const updateMovie = (id: string, updated: Partial<Movie>) => {
  movies = movies.map(movie =>
    movie.id === id ? { ...movie, ...updated } : movie
  );
};

export const deleteMovie = (id: string) => {
  movies = movies.filter(movie => movie.id !== id);
};

export default deleteMovie; updateMovie;
