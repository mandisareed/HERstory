import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/quiz");
  const goToEditfactbook = () => history.push("/factbook");
  return (
    <div className="Home">
      <div className="Home-header">
        
        <h1 style={{fontFamily : "Didot, serif"}}>Welcome to HERstory</h1>
        <h2 style={{fontFamily : "Didot, serif"}}>Welcome to Herstory ! We created this app to help educate people about the diversity of the 
          feminine experience & the influences feminine people have made throughout history. 
          Throughout the pandemic, emerging feminists everywhere have been looking for stories about powerful women who can further
          inspire them through these challenging times. 
          
           </h2>
          
           <img alt="" src="https://wp.dailybruin.com/images/2020/01/web.news_.womensmarch.2020.CK_.jpg" style={{maxHeight:"500px", padding:"10px"}}>

           </img>
           <div></div>
           <button onClick={goToEditfactbook } style={{ fontFamily: "Courier New", fontWeight: "bold"}}>View some visonaries</button>
           <button style={{ marginLeft: "1em", fontFamily: "Courier New", fontWeight: "bold"}}  onClick={goToEditProfile}>Take a Trivia Quiz</button>
        {/* <button style={{ marginLeft: "1em" }} onClick={() => logout()}>
          Logout
        </button> */}

      </div>
      
       
    </div>
  );
}

export default Home;
