import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

const[isExpanded,setisExpanded] = useState(false)

function expand(){
    setisExpanded(true)
}
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleAdd(event) {
    props.onAdd(note);

    event.preventDefault();

    setNote({
      title:"",
      content:""
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded?<input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />:null}
        <textarea
        onClick={expand}
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note.."
          rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded}><Fab onClick={handleAdd}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
