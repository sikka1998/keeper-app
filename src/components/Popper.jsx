import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import UpdateContent from "./UpdateContent";

function Popper(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [obj, setObj] = useState({});

  const openModal = () => {
    setIsOpen(!isOpen);
    setObj(props.notes[props.id]);
    console.log(" Popper " + !isOpen);
    props.turnOff(!isOpen);
};

  return (
    <div>
      <button onClick={openModal} disabled = {props.open}><EditIcon/></button>
      {isOpen && (
        <div className="modal">
          <div  className= "modal-content">
            <UpdateContent obj={obj} updateNote={props.updateNote} id={props.id} setOpen={setIsOpen} turnOff={props.turnOff}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popper;
