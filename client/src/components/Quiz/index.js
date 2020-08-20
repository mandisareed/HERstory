import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import QuizInstructions from "./instructions";
import QuizResults from "./results";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#C4A349",
  },
  question: {
    color: "#FAFEFC",
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "center"
  },
  answers: {
    color: "#FAFEFC",
    fontFamily: "Courier New",
    textAlign: "center",
    marginBottom: 3,
  },
});

function QuizCard() {
  const quizStyles = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
      <div><QuizInstructions />
  

    <Card className={quizStyles.root} variant="outlined">
      <CardContent>
        <Typography className={quizStyles.question} variant="h5">
          Sarah Breedlove became the first self-made female millionaire from
          selling what kind of products?
        </Typography>
        <p className={quizStyles.answers}>
          A) Hair
        </p>
        <p className={quizStyles.answers}>
          B) Cooking/Baking
        </p>
        <p className={quizStyles.answers}>
          C) Woodworking
        </p>
      </CardContent>
    </Card>

    <QuizResults />
    </div>
  );
}

export default QuizCard;
