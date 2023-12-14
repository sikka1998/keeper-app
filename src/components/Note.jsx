import React from "react";
import Popper from "./Popper";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  
  function handleClick() {
    props.onDelete(props.id);
  }

  return (

      <div className="note">
        <h1><span className="rectangular-background">NOTE : {props.id + 1}</span></h1>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={handleClick} disabled={props.open}><DeleteIcon /></button>
        <Popper notes={props.notes} id={props.id} updateNote={props.updateNote} turnOff={props.disable} open={props.open}/>
      </div>
    
  );
}

export default Note;
