import React, { Component, useState, useEffect } from "react";
import "./Quiz.css";
import QuizCard from "../../components/Quiz";
import QuizInstructions from "../../components/Quiz/instructions";
import QuizResults from "../../components/Quiz/results";
// import quiz from "../../quiz.json";
import axios from "axios";

function Quiz() {
    const [quiz, setQuizCard] = useState([]);

    useEffect(() => {
        // ajax on component load the first time
        axios.get("https://my-json-server.typicode.com/mandisareed/quizjson/quiz").then((res) => {
          console.log(res.data)
          setQuizCard(res.data)
        });
      }, []);


  return (
    <div>
      <body className="quiz-background">
        {/* Quiz page title */}
        <p className="quiz-title"> Quiz</p>

        {/* Quiz Instructions card */}
        <QuizInstructions />

        {/* Quiz card(s) with questions and answers */}
        {quiz.map(qc => (
        <QuizCard
        question={qc.question}
         answerA={qc.a}
         answerB={qc.b}
         answerC={qc.c}
        />
          ))}

        {/* Quiz Results Card */}
        <QuizResults />
      </body>
    </div>
  );
}

export default Quiz;
