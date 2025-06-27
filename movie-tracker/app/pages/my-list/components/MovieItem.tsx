
'use client';

import { Movie } from "../types/movie";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  movie: Movie;
  onUpdate: (movie: Movie) => void;
  onDelete: (id: string) => void;
}

export default function MovieItem({ movie, onUpdate, onDelete }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(movie.title);
  const [year, setYear] = useState(movie.year ?? '');
  const [rating, setRating] = useState<number | undefined>(movie.rating);

  const handleSave = () => {
    onUpdate({ id: movie.id, title, year, rating });
    setIsEditing(false);
  };

  return (
    <Card className="w-70 h-85 lg:w-70 md:w-60 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
      <CardHeader className="px-3 py-1">
        <div className="relative bg-linear-to-r from-[#2A9B88] to-[#16806D] text-black w-full rounded-sm h-33">
        </div>
        <CardTitle className="my-0 py-0">
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-2 text-gray-600">
          <Play/>
          Title: {movie.title}
        </div>
        <div className="flex items-center gap-2 mb-2 text-gray-600">
            <Calendar/>
            Year: {movie.year}
        </div>
        <div className="flex items-center gap-2 text-gray-600">
            <Star/>
            Rating: {movie.rating}
        </div>
      </CardContent>
      <CardFooter className="mt-auto pb-3 gap-3 flex items-center justify-center">
        <div>
          <Button variant="outline" className="bg-[#18453B] text-white rounded-2xl w-25">
          Edit
          </Button>
        </div>
        <div>
          <Button variant="outline" className="bg-[c3423f] text-white rounded-2xl w-25 onClick={() => onDelete(movie.id)}">Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
    // <li className="border p-4 rounded">
    //   {isEditing ? (
    //     <>
    //       <input value={title} onChange={e => setTitle(e.target.value)} className="border p-1 mr-2" />
    //       <input value={year} onChange={e => setYear(e.target.value)} className="border p-1 mr-2" />
    //       <input type="number" value={rating ?? ''} onChange={e => setRating(Number(e.target.value))} className="border p-1 mr-2" />
    //       <button onClick={handleSave} className="text-green-600">Save</button>
    //     </>
    //   ) : (
    //     <>
    //       <strong>{movie.title}</strong> ({movie.year}) - {movie.rating ?? "No rating"}
    //       <div className="space-x-2 mt-2">
    //         <button onClick={() => setIsEditing(true)} className="text-blue-500">Edit</button>
    //         <button onClick={() => onDelete(movie.id)} className="text-red-500">Delete</button>
    //       </div>
    //     </>
    //   )}
    // </li>
  );
}
