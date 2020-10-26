import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() {
    return (
    //   <React.Fragment>
    <div style={{ backgroundColor: "#000000", color: "#FFFFFF", fontFamily: "Arvo" }}>
        <CssBaseline />
        <Container style={{ backgroundColor: "#000000", color: "#FFFFFF", fontFamily: "Arvo" }} >
          {/* <Typography component="div" style={{ marginTop: "1em", height: '10vh' }}  /> */}
          
          <p > Copyright 2020</p>
        </Container>
        </div>
    //   </React.Fragment>
    );
  }