import React, { useState, useContext, useRef, useEffect } from 'react';
import NotesContext from '../pages/context';
import API from "../utils/API";

export default function EditNote() {
  const { state, dispatch } = useContext(NotesContext);
  const [value, setValue] = useState(state.currentNote.body);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      alert('Cannot add a blank note');
    } else {
      API.updateNote({ ...state.currentNote, body: value }).then(() => setValue(""));
      dispatch({ type: 'UPDATE_NOTE', payload: { ...state.currentNote, body: value } });
      setValue('');
    }
  };

  return (
    <div className='note-form'>
      <form onSubmit={handleSubmit} action=''>
        <textarea
        style={{color: "black", fontFamily: "Montserrat"}}
          ref={ref}
          onChange={handleChange}
          value={value}
          name=''
          id=''
          cols='30'
          rows='10'
        />
        <div style={{ textAlign: 'right', fontFamily: "Montserrat" }}>
          <button style={{fontFamily: "Montserrat" }}>Update note</button>
        </div>
      </form>
    </div>
  );
}