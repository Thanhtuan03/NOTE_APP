import { create } from "zustand";

export type Note = {
  id: string;
  content: string;
  createdAt: string;
};

type NoteStore = {
  notes: Note[];
  addNote: (content: string) => void;
  editNote: (id: string, newContent: string) => void;
};

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  addNote: (content) =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          id: Date.now().toString(),
          content,
          createdAt: new Date().toLocaleString(),
        },
      ],
    })),
  editNote: (id, newContent) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, content: newContent } : note
      ),
    })),
}));
