import React, { useContext } from 'react';
import NotesContext from '../pages/context';
import API from "../utils/API";
export default function Note({ note }) {
  const { dispatch } = useContext(NotesContext);

  return (
    <div className='note'>
      <p style={{fontFamily : "Montserrat"}}>{note.body}</p>
      <div className='btn-container'>
        <button
          onClick={() => dispatch({ type: 'SET_CURRENT_NOTE', payload: note })}
          className='edit'
        >
          Edit
        </button>
        <button
          onClick={() => {API.deleteNote(note._id); dispatch({ type: 'DELETE_NOTE', payload: note._id })} }
          className='delete'
        >
          Delete
        </button>
      </div>
    </div>
  );
}