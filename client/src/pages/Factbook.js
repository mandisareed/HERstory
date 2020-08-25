import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './Factbook.css'; 

import FactCard from "../components/FactCard";
import axios from 'axios';import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


// function Factbook() {
//   const [person, setPerson] = useState(null)

//   useEffect(async () => {
//     const response = await fetch("https://my-json-server.typicode.com/saracharlotterose/factbook2/");
//     const data = await response.json();
//     const[item]= data.results;
//     setPerson(item);
//   }, []);
  
//   return (
//    <>
//       <h1 id="text">Factbook</h1>
//       <h1>test</h1>
//   { person && <h1  style={{color: "white" }}id="text">{person.name}</h1>}
//        <CSSGrid/>
//        <CSSGrid/>
        
       
       
//       </>
  
//   );
// }


 

 
  function Factbook() {
    const [persons, setPersons] = useState([]);
    
    useEffect(() => {
      // ajax on component load the first time
      axios.get("https://my-json-server.typicode.com/saracharlotterose/factbook2/people").then((res) => {
        console.log(res.data[0].name)
        setPersons(res.data)
        
        
      });
    }, []);
  

  return (
    <div >
   <h1 style={{color:"white" , textAlign:"center" ,fontFamily : "Didot, serif"}}>Factbook</h1>
   <Grid   container spacing={3}>
     
        {persons.map((user) => (
           <FactCard  quote={user.quote}lifespan={user.lifespan} about={user.about} name={user.name} src={user.src}/>
        ))}
         </Grid>
      {/* <Divider className={classes.divider} /> */}
    
    </div>
  );
}
 

export default Factbook;
