import React from "react";
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
    textAlign: "center"
  },
  answers: {
    color: "#FAFEFC",
    fontFamily: "Courier New",
    textAlign: "center",
    marginBottom: 3,
  },
});

function QuizCard(props) {
  const quizStyles = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
  

    <Card className={quizStyles.root} variant="outlined">
      <CardContent>
        <Typography className={quizStyles.question} variant="h5">
          Sarah Breedlove became the first self-made female millionaire from
          selling what kind of products?
          {/* {props.question} */}
        </Typography>
        <p className={quizStyles.answers}>
          A) Hair
          {/* {props.a} */}
        </p>
        <p className={quizStyles.answers}>
          B) Cooking/Baking
          {/* {props.b} */}
        </p>
        <p className={quizStyles.answers}>
          C) Woodworking
          {/* {props.c} */}
        </p>
      </CardContent>
    </Card>

    
    </div>
  );
}

export default QuizCard;
