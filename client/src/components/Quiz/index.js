import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#C4A349",
  },
  question: {
    color: "#FAFEFC",
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "center",
  },
  answers: {
    color: "#000000",
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3,
    role: "button",
    cursor: "pointer"
  },
});

function QuizCard(props) {
  const quizStyles = useStyles();

  return (
    <div>
      <Card className={quizStyles.root} variant="outlined">
        <CardContent>
          <Typography className={quizStyles.question} variant="h5">
            {props.question}
          </Typography>

          <p
            className={quizStyles.answers}
            onClick={props.onAnswer}
            value={props.choiceA}
            role="button"
            
          >
            {props.choiceA}
          </p>

          <p
            className={quizStyles.answers}
            onClick={props.onAnswer}
            value={props.choiceB}
            role="button"
          >
            {props.choiceB}
          </p>

          <p
            className={quizStyles.answers}
            onClick={props.onAnswer}
            value={props.choiceC}
            role="button"
          >
            {props.choiceC}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuizCard;
