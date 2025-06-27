


import { NextRequest, NextResponse } from "next/server";
import { deleteMovie, updateMovie, getMovies } from "@/lib/movieStore";


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const { id } = params;

  updateMovie(id, body);
  const updated = getMovies().find(m => m.id === id);
  if (!updated) return NextResponse.json({ error: "Movie not found" }, { status: 404 });

  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  deleteMovie(id);
  return NextResponse.json({ message: "Deleted" });
}

