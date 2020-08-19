import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import './Factbook.css'; 
import FactCard from "../components/FactCard";

const loginStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "20rem",
  margin: "0 auto",
};

function Factbook() {
  
  return (
    <div style={loginStyle}>
      <h1 id="text">Factbook</h1>
       <FactCard/>
    
    </div>
  );
}

export default Factbook;
