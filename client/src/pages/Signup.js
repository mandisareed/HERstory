import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import "./Signup.css";
const signupStyles = {
  maxWidth: "20rem",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => alert(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <body className= "signupBackground">
    <div style={signupStyles} className="Signup">
    <h1 className= "signupHeader" style={{textAlign : "center", fontFamily : "Arvo", fontWeight: "800", fontSize:"68px", color: "black"}}> HERstory</h1>
      <h1 style={{fontFamily : "Arvo", textAlign: "center", color: "black"}}>Sign Up</h1>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup
        style={{fontFamily : "Arvo",backgroundColor: "#C4A349"}}
          id="username"
          //labelText="Username"
          placeholder="Username"
          name="username"
          type="text"
          onChange={handleChange}
        />
        <InputGroup
        style={{fontFamily : "Arvo", backgroundColor: "#C4A349"}}
          id="email"
          //labelText="Email"
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <InputGroup
        style={{fontFamily : "Arvo", backgroundColor: "#C4A349"}}
          id="pwd"
          //labelText="Password"
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button style={{fontFamily : "Arvo", backgroundColor: "black"}} type="submit">Submit</button>
      </Form>
      <Link
        style={{
          marginTop: "1.5rem",
          textAlign: "center",
          fontFamily: "Arvo",
          color: "black"
        }}
        to="/login"
      >
        Go to Log In
      </Link>
      <br></br>
    </div>
    </body>
  );
}

export default Signup;
