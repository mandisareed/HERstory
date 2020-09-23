import uuid from 'uuid';
export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      const newNote = {
        id: uuid.v4(),
        text: action.payload
      };

      const addedNotes = [...state.notes, newNote];

      return {
        ...state,
        notes: addedNotes
      };
    case 'DELETE_NOTE':
      console.log(action.payload)
      console.log(state.notes)
      const deletedNotes = state.notes.filter(
        note => note._id !== action.payload
      );

      return {
        ...state,
        notes: deletedNotes
      };
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        currentNote: action.payload
      };
    case 'UPDATE_NOTE':
      const updatedNoteId = action.payload._id

      const newNotes = state.notes.map(note => {
        return note._id == updatedNoteId ? action.payload : note
      })

      return {
        currentNote: null,
        notes: newNotes
      };
    case 'SET_NOTES':
      return {
        ...state,
        notes: action.payload
      }
    default:
      return state;
  }
}