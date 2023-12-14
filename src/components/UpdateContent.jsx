import React, { useState } from "react";
import { Button } from "@mui/material";

const UpdateContent = (props) => {

    const [newNote, setNote] = useState({
        title: props.obj.title,
        content: props.obj.content
    });

    function handleChange(e){
        const {name , value} = e.target;

        setNote(prevValue => {
            return {
                ...prevValue, 
                [name] : value
            };
        })
    }

    function onUpdate(){
        props.updateNote(props.id, newNote);
        props.setOpen(false);
        props.turnOff(false);
    }

    return (
        <div>
            <form className="create-note">
                <div>
                    <h1><span className="rectangular-background">NOTE : {props.id + 1}</span></h1>
                    <input name="title" value={newNote.title} placeholder="Title" disabled={true}/>
                    <textarea name="content" value={newNote.content} placeholder="Take a note..." onChange={handleChange} rows="2"/>
                    <Button variant="contained" color="success" onClick={onUpdate}>Update</Button>
                </div>
            </form>
        </div>
    );
}

export default UpdateContent;