import React from "react";
import "./Quiz.css";
import Navbar from "../../components/Navbar";
import QuizCard from "../../components/Quiz";


function Quiz() {
    return (
        <body className="quiz-background">
            

            {/* navbar */}
            <Navbar />
            {/* Quiz title */}
            <p className="quiz-title"> Quiz</p>

            {/* quiz card with questions and answer 
            - make a separate component? */}
            <QuizCard />
            {/* need to add: instructions with begin button and results */}
        </body>
    )
};

export default Quiz;