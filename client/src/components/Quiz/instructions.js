import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "../Container";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#C4A349"
  },
  instructionsHeader: {
    color: "#FAFEFC",
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "center",
  },
  instructions: {
    color: "#FAFEFC",
    fontFamily: "Courier New",
    textAlign: "center",
    marginBottom: 3,
  },
  beginPrompt: {
    color: "#FAFEFC",
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontFamily: "Courier New",
    fontWeight: "bold",
    backgroundColor: "#000000",
  }
});
function QuizInstructions() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.instructionsHeader} variant="h5">
            Time to put your knowledge to the test!
          </Typography>
          <p className={classes.instructions}>
            For each question, choose your answer by directly clicking on an
            answer choice. The next question will then be displayed until you reach the end of the quiz.
            You got this!
          </p>
          <p className={classes.beginPrompt}>Click the button below to begin!</p>

            <Container className={classes.buttonContainer}> <Button className={classes.button} variant="contained" >Begin!</Button></Container> 
         
          
        </CardContent>
      </Card>
    </div>
  );
}

export default QuizInstructions;
