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
function App() {

  return (
    
    <AuthProvider>
   
      <Router>
        <div>
        <h1 style={{textAlign : "center", fontFamily : "Didot, serif", fontWeight: "800", fontSize:"68px"}}> HERstory</h1>
          
          <ProtectedRoute  to="/profile" to="/factbook" >
            
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
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
