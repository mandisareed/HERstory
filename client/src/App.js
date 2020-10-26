import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Factbook from "./pages/Factbook";
import Quiz from "./pages/Quiz/Quiz";
// import Footer from "./components/Footer/Footer";

function App() {

  return (
    
    <AuthProvider>
   
      <Router>
      <ProtectedRoute  to={["/profile","/factbook","/quiz"]} />
      
          <ProtectedRoute  to={["/profile","/factbook"]} >
          <h1 style={{textAlign : "center", fontFamily : "Arvo, serif", fontWeight: "800", fontSize:"68px", margin: "0 auto"}}> HERstory</h1>
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

      {/* <Footer/> */}
    </AuthProvider>
  );
}

export default App;
