import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import "./Login.css";
const loginStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "20rem",
  margin: "0 auto",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/"))
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <body className= "loginBackground">
    <div style={loginStyle}>
    <h1 className= "loginHeader" style={{textAlign : "center", fontFamily : "Didot, serif", fontWeight: "800", fontSize:"68px"}}> HERstory</h1>
      <h1 style={{textAlign : "center"}}>Log In</h1>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup 
        style={{backgroundColor: "#293713"}} 
          id="email"
          placeholder="Email"
          // labelText="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup
        style={{backgroundColor: "#293713"}}
          id="password"
          placeholder="Password"
          // labelText="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </Form>
      <Link
        style={{
          marginTop: "1.5rem",
          textAlign: "center",
        }}
        to="/signup"
      >
        Go to Sign Up
      </Link>
    </div>
    </body>
  );
  
}

export default Login;
