import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expand, isExpanded] = useState(false);
  const [mandatory, setMandatory] = useState(false);

  function handleClick(){
    isExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMandatory(false);
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if(note.title === "")
    {
      setMandatory(true);
    }
    else{
      setMandatory(false);
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }
    event.preventDefault();
  }

  return (
    <div className="content">
      <form className="create-note">
        {expand && <input
          style={mandatory ? {border: '1px red solid'} : {border: 'none'}}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          disabled={props.open}
        />}
        {mandatory && <span className="mandatory-text">Title is Mandatory!</span>}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick = {handleClick}
          rows= {expand ? "3" : "1"}
          disabled={props.open}
        />
        {expand && <Fab size="medium" onClick={submitNote} disabled={props.open}><AddIcon /></Fab>}
      </form>
    </div>
  );
}

export default CreateArea;
