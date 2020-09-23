import axios from "axios";
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/signup", {username: username, email: email, password: password});
  },
  addNote: (note) => {
    return axios.post("/api/notes", {body: note});
  },
  getNotes: (note) => {
    return axios.get("/api/notes", {body: note});
  },
  updateNote: (note) => {
    return axios.put("/api/notes", {body: note})
  },
  deleteNote: (noteId) => {
    return axios.delete("/api/notes/" + noteId)
  }
};
