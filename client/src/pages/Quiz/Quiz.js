import React, { Component, useState, useEffect } from "react";
import "./Quiz.css";
import QuizInstructions from "../../components/Quiz/instructions";
import QuizCard from "../../components/Quiz";
import QuizResults from "../../components/Quiz/results";
import quizdata from "../../quiz.json";

function Quiz() {
  // when the page loads, ONLY render the instructions card w/begin button
  // things i want to keep track of (state: {quizStart: false (or if q-index is -1, then don't didsplay quiz), index of current question: 0, score: 0} )


  // add an onClick prop to each answer choice: <p onClick={handleClick} /p>
  // when an answer is clicked, compare the two: if(event.target.value === quiz.rightAnswer)
  // if user's answer matches the correct answer, update the score by 1: this.setState({ count: this.state.count + 1 });
  // THEN update the state of the index of the current question: this.setState({currentQuestion: the.state.currentQuestion + 1})
  // else don't change the state of the count and solely update the state of the current question's index (see above)

  // needs to know which question it is and what the answer is

  // sets the initial state of the current question's index to -1
  // so that when this state changes, the page will re-render and
  // the appropriate card will render
  const [currentQuestionIndex, setQuestionIndex] = useState(-1);
  //sets the initial state of the user's' score to 0
  const [score, setScore] = useState(0);

  const beginQuiz = () => {
    setQuestionIndex(0);
  };

  const onAnswer = (event) => {
    console.log(event.target.value)
      // if (
      //   the value of the user's choice === quizdata[currentQuestionIndex].rightanswer
      // ) setScore(score + 1);

    setQuestionIndex(currentQuestionIndex + 1);
  };

    


  

  if (currentQuestionIndex < 0) {
    return (
      <div>
        <body className="quiz-background">
          <p className="quiz-title"> Quiz</p>

          <QuizInstructions beginQuiz={beginQuiz} />
        </body>
      </div>
    );
  }

  if (currentQuestionIndex < quizdata.length) {
    return (
      <div>
        <body className="quiz-background">
          <p className="quiz-title"> Quiz</p>

          <QuizCard 
          onAnswer={onAnswer}
          // don't think i need to include the id property here. check the docs
          question={quizdata[currentQuestionIndex].question}
          choiceA={quizdata[currentQuestionIndex].a}
          choiceB={quizdata[currentQuestionIndex].b}
          choiceC={quizdata[currentQuestionIndex].c}
          />
        </body>
      </div>
    );
  }

  return (
    <div>
      <body className="quiz-background">
      <p className="quiz-title"> Quiz</p>
        <QuizResults />
      </body>
    </div>
  );
}

export default Quiz;
