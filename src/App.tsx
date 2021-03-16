import React from "react";

import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { useSelector, useDispatch } from "react-redux";
import  NewNoteInput  from "./NewnoteInput";
import { NotesState } from "./notesReducer";
import { addNote } from "./actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
    <Typography variant='h3' align='center'>Note Tracker</Typography>
    <br />
    <Container maxWidth="md" >
   
      <NewNoteInput addNote={onAddNote} />
      <hr />
        <Paper>
          <ul>
            {notes.map((note) => {
              return <li key={note}>{note}</li>;
            })}
          </ul>
        </Paper>
      </Container>
    </>
  );
}

export default App;