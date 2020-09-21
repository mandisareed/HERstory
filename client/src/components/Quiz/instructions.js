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
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    textAlign: "center",
  },
  instructions: {
    color: "#FAFEFC",
    fontFamily: 'Montserrat',
    textAlign: "center",
    marginBottom: 3,
  },
  beginPrompt: {
    color: "#FAFEFC",
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    backgroundColor: "#000000",
  }
});
function QuizInstructions(props) {
  const instructStyles = useStyles();

  return (
    <div>
      <Card className={instructStyles.root} variant="outlined">
        <CardContent>
          <Typography className={instructStyles.instructionsHeader} variant="h5">
            Time to put your knowledge to the test!
          </Typography>
          <p className={instructStyles.instructions}>
            For each question, choose your answer by directly clicking on an
            answer choice. The next question will then be displayed until you reach the end of the quiz.
            You got this!
          </p>
          <p className={instructStyles.beginPrompt}>Click the button below to begin!</p>

            <Container className={instructStyles.buttonContainer} > <Button className={instructStyles.button} variant="contained" onClick={props.beginQuiz}>Begin!</Button></Container> 
         
          
        </CardContent>
      </Card>
    </div>
  );
}

export default QuizInstructions;
