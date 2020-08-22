import React from 'react';


const NotesContext = React.createContext({
  currentNote: null,
  notes: [
    { id: 1, text: 'Study more about Rosa Parks since I got a question wrong about her during the quiz.' },
    { id: 2, text: 'Find out who Amelia Earhart is.' },
    { id: 3, text: 'Find out why Clara Barton founded the American Red Cross.' }
  ]
})

export default NotesContext;

