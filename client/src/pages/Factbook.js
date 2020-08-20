import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import './Factbook.css'; 
import CSSGrid from "../components/Grid";

const loginStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "20rem",
  margin: "0 auto",
};

function Factbook() {
  
  return (
   <>
      <h1 id="text">Factbook</h1>
     
       <CSSGrid/>
       <CSSGrid/> 
       
       
      </>
  
  );
}

export default Factbook;
