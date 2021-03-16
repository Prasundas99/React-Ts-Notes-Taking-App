import React, { ChangeEvent } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface NewNoteInputProps {
  addNote(note: string): void;
}

 const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <TextField
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <Button onClick={onAddNoteClick}>Add note</Button>
    </div>
  );
};

export default NewNoteInput;