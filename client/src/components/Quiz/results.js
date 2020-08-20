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
    backgroundColor: "#FAFEFC",
  },
  congrats: {
    color: "#000000",
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "center",
  },
  results: {
    color: "#000000",
    fontFamily: "Courier New",
    textAlign: "center",
    marginBottom: 3,
  },
});

function QuizResults() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.congrats} variant="h5">
            And you're done - CONGRATS!
          </Typography>
          <p className={classes.results}>
            You answered 4 out of 5 questions correctly.
            <p className={classes.results}>
              Add the following to your study list:
              <p className={classes.results}>
                Sacagawea, Marie Van Brittan Brown
              </p>
            </p>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuizResults;
