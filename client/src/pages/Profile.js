import React, { useState, useEffect, useContext, useReducer } from "react";
import API from "./../utils/API";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import "./Profile.css";
import AddNote from '../components/AddNote';
import NoteList from '../components/NoteList';
import EditNote from '../components/EditNote';
import NotesContext from '../pages/context';
import notesReducer from '../pages/reducer';

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      
    });
  }, [user]);

  return (
    
    <body className= "profileBackground">
      
      <Container>
      <h2>Welcome {user.name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <Link to="/">Go Home</Link>
    
    </Container>
    <NotesContext.Provider value={{ state, dispatch }}>

      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  
    </body>
  );
  
}



export default Profile;