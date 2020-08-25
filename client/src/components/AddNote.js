import React, { useState, useContext, useRef, useEffect } from "react";
import NotesContext from "../pages/context";
import API from "../utils/API";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  //   backgroundColor: "#C4A349"
  // },
  buttonContainer: {
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontFamily: "Courier New",
    fontWeight: "bold",
    backgroundColor: "#000000",
  }
});



export default function AddNote() {
  const [value, setValue] = useState("");
const {state, dispatch} = useContext(NotesContext);
<<<<<<< HEAD

const newNoteStyles = useStyles();

=======
const [notes, setNotes] = useState([])
>>>>>>> ded22b1b3f6f1d4301512018450dd687b9838276
//let ref = useRef();

// useEffect(() => {
//   ref.current.focus();
// });
useEffect(() => {
  loadNotes()
}, [])

  function loadNotes() {
    API.getNotes()
      .then(res => 
        setValue(res.data)
      )
      .catch(err => console.log(err));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      alert("Cannot add a blank note");
    } else {
      API.addNote(value).then(() => setValue(""));
      dispatch({ type: 'ADD_NOTE', payload: value });
    }
  };

  return (
    <div className="note-form">
      <form onSubmit={handleSubmit} action="">
        <textarea
          style={{ color: "black" }}
          //ref={ref}
          onChange={handleChange}
          value={value}
          name=""
          id=""
          cols="30"
          rows="10"
        />
        {/* <button>Add note</button> */}
        <Container className={newNoteStyles.buttonContainer} > <button className={newNoteStyles.button} variant="contained" 
        >Add Note</button></Container> 

      </form>
    </div>
  );
}
