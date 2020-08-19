import React from "react";
import "./Quiz.css";
import Navbar from "../../components/Navbar";
import QuizCard from "../../components/Quiz";


function Quiz() {
    return (
        <div className="background">
            {/* app title */}
            <p className="app-title"> HERstory</p>

            {/* navbar */}
            <Navbar />
            {/* Quiz title */}
            <p className="quiz-title"> Quiz</p>

            {/* quiz card with questions and answer 
            - make a separate component? */}
            <QuizCard />
            {/* need to add: instructions with begin button and results */}
        </div>
    )
};

export default Quiz;