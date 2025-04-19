export type Note = {
    id: string;
    content: string;
  };
  
  export type RootStackParamList = {
    Home: undefined;
    AddNote: {
      notes: Note[];
      setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
    };
    EditNote: {
      note: Note;
    };
  };
  
