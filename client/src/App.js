import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Our Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Factbook from "./pages/Factbook";
import Quiz from "./pages/Quiz/Quiz";

function App() {

  return (
    
    <AuthProvider>
   
      <Router>
      <ProtectedRoute  to={["/profile","/factbook","/quiz"]} />
      <h1 style={{textAlign : "center", fontFamily : "Didot, serif", fontWeight: "800", fontSize:"68px", margin: "0 auto"}}> HERstory</h1>
          <ProtectedRoute  to={["/profile","/factbook"]} >
         
          <Navbar />
          </ProtectedRoute>
          <Switch>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <Route exact path="/login">
            
              <Login />
            </Route>
            <Route exact path="/signup">
            
              <Signup />
            </Route>
            
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute exact path="/factbook">
              <Factbook/>
              </ProtectedRoute>
            <ProtectedRoute exact path="/quiz">
              <Quiz />
            </ProtectedRoute>
          </Switch>
       
      </Router>
    </AuthProvider>
  );
}

export default App;
