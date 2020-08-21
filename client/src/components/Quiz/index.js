import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import quiz from "../../quiz.json";

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

// const [quiz, setQuizCard] = useState([]);

//     useEffect(() => {
//         // ajax on component load the first time
//         axios.get("https://my-json-server.typicode.com/mandisareed/quizjson/quiz").then((res) => {
//           console.log(res.data)
//           setQuizCard(res.data)
//         });
//       }, []);

  return (
      <div>
  

    <Card className={quizStyles.root} variant="outlined">
      <CardContent>

        <Typography className={quizStyles.question} variant="h5">
          {/* Sarah Breedlove became the first self-made female millionaire from
          selling what kind of products? */}
          {props.question}
        </Typography>
        <p className={quizStyles.answers} onClick={props.onAnswer}>
          {/* A) Hair */}
          {props.choiceA}
        </p>
        <p className={quizStyles.answers} onClick={props.onAnswer}>
          {/* B) Cooking/Baking */}
          {props.choiceB}
        </p>
        <p className={quizStyles.answers} onClick={props.onAnswer}>
          {/* C) Woodworking */}
          {props.choiceC}
        </p>
      </CardContent>
    </Card>

    
    </div>
  );
}

export default QuizCard;
