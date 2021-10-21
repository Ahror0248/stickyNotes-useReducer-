import React, { useReducer, useState } from "react";
import {
  CloseIcon,
  Container,
  Form,
  FormButton,
  Header,
  Stickdiv,
  StickyText,
  Textarea,
} from "./AppStyle";
import { v4 as uuid } from "uuid";

const initialNotesState = {
  lastNoteCreated: null,
  totalNotes: 0,
  notes: [],
};

const noteReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      const newState = {
        lastNoteCreated: new Date().toTimeString().slice(0, 8),
        totelNotes: prevState.notes.length + 1,
        notes: [...prevState.notes, action.payload],
      };

      console.log("sfsdfs", newState);
      return newState;
    }

    case 'DELETE_NOTE':{
        const newState ={
            ...prevState,
            totalNotes: prevState.notes.length-1,
            notes: prevState.notes.filter(note=> note.id !== action.payload.id),
        }
            console.log('after deletenote', newState)
            return newState
    }
  }
};

const App = () => {
  const [noteInput, setNoteInput] = useState("");
  const [noteState, dispatch] = useReducer(noteReducer, initialNotesState);
  const addNote = (event) => {
    event.preventDefault();

    if (!noteInput) {
      return;
    }

    const newNote = {
      id: uuid(),
      text: noteInput,
      rotate: Math.floor(Math.random() * 20),
    };

    dispatch({ type: "ADD_NOTE", payload: newNote });
    setNoteInput("");
  };

  const dropNote = (event) => {
    event.target.style.left = `${event.pageX - 50}px`;
    event.target.style.top = `${event.pageY - 50}px`;
  };

  const dragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <Container ondragover={dragOver}>
     <Header>Sticky Notes  {/*  ({noteState.totalNotes})  */}
        {/* <span>{noteState.totalNotes > 0 ? `Last note created: ${noteState.lastNoteCreated}`: '' }  </span> */}
      </Header>
      <Form onSubmit={addNote}>
        <Textarea
          value={noteInput}
          onChange={(event) => setNoteInput(event.target.value)}
          placeholder="Create a new note..."
        ></Textarea>
        <FormButton>Add</FormButton>
      </Form>

      {noteState.notes.map((note) => (
        <Stickdiv
          key={note.id}
          style={{ transform: `rotate(${note.rotate}deg)` }}
          draggable="true"
          onDragEnd={dropNote}
        >
          <CloseIcon onClick={()=>  dispatch({type:'DELETE_NOTE', payload: note})} > 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </CloseIcon>
          <StickyText>{note.text}</StickyText>
        </Stickdiv>
      ))}
    </Container>
  );
};

export default App;
