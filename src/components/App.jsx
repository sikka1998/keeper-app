import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function updateNotes(id, newNote) { 
    setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
        if(id === index){
          noteItem.title = newNote.title;
          noteItem.content = newNote.content;
        }
        return prevNotes;
    });
  });
}


function disable(isOpen){
  setOpen(isOpen);
  console.log(isOpen);
}

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} open={open} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            notes={notes}
            updateNote={updateNotes}
            disable={disable}
            open={open}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
