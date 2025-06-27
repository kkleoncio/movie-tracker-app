
'use client';

import { useState } from "react";
import { Movie } from "../types/movie";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
  onAdd: (movie: Omit<Movie, 'id'>) => void;
}

export default function MovieForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState<number | undefined>();
  const [open, setOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title, year, rating });
    setTitle("");
    setYear("");
    setRating(undefined);
    setOpen(false);
  };

  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
           <Button 
              variant="outline"
              className="bg-[#18453B] text-white">
                <Plus className="text-white"/>
              Add Movie
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label>Title</Label>
              <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="border p-2" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Year</Label>
              <Input value={year} onChange={e => setYear(e.target.value)} placeholder="Year" className="border p-2" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Rating</Label>
              <Input type="number" value={rating ?? ''} onChange={e => setRating(Number(e.target.value))} placeholder="Rating" className="border p-2" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" onClick={handleSubmit} className="bg-[#18453B] text-white px-4 py-2">Add Movie</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}