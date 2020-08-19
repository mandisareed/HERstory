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
    <h1 className= "signupHeader" style={{textAlign : "center", fontFamily : "Didot, serif", fontWeight: "800", fontSize:"68px"}}> HERstory</h1>
      <h1 style={{fontFamily : "Courier New, monospace"}}>Signup</h1>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup
        style={{backgroundColor: "#293713"}}
          id="username"
          //labelText="Username"
          placeholder="username"
          name="username"
          type="text"
          onChange={handleChange}
        />
        <InputGroup
        style={{backgroundColor: "#293713"}}
          id="email"
          //labelText="Email"
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <InputGroup
        style={{backgroundColor: "#293713"}}
          id="pwd"
          //labelText="Password"
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </Form>
      <Link
        style={{
          marginTop: "1.5rem",
          textAlign: "center",
        }}
        to="/login"
      >
        Go to Login
      </Link>
      <br></br>
    </div>
    </body>
  );
}

export default Signup;
