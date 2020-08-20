import React, { Component } from "react";
import "./Quiz.css";
import QuizCard from "../../components/Quiz";
import QuizInstructions from "../../components/Quiz/instructions";
import QuizResults from "../../components/Quiz/results";
import quiz from "../../quiz.json";

function Quiz() {
    
        return (
        <body className="quiz-background">
     
            {/* Quiz page title */}
            <p className="quiz-title"> Quiz</p>

            {/* Quiz Instructions card */}
            <QuizInstructions />
            
            

            {/* Quiz card(s) with questions and answers */}
            {/* {this.state.quiz.map(quiz => ( */}
            <QuizCard
            // question={quiz.question}
            //  answerA={quiz.a}
            //  answerB={quiz.b}
            //  answerC={quiz.c}
             />
             {/* ))} */}

            {/* Quiz Results Card */}
            <QuizResults />
        </body>
    );
}
   

export default Quiz;