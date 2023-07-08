import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


import "./HomeMainbar.css";
import QuestionList from "./QuestionList";


const HomeMainbar = () => {

  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();


  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };



 var questionList = [
  {
    _id: 1,
    Votes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript","nodejs", "reactjs", "mongodb"],
    userPosted: "manoj",
    askedOn: "jan 1"
  },{
    _id: 2,
    votes: 1,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "java", "python"],
    userPosted: "manoj",
    askedOn: "jan 1"   
  },{
    _id: 3,
    votes: 0,
    noOfAnswers: 1,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "java", "python"],
    userPosted: "manoj",
    askedOn: "jan 1"
  }
 ]



  return (

    <div className="main-bar">
      <div className="main-bar-header">
        {
          location.pathname === "/" ? (<h1>Top Questions</h1>) : (<h1>All Questions</h1>)
        }

        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>

      <div>
        {
          questionList === null ?
          (
            <h1>Loading...</h1> ) : (
            <>
                <p>{ questionList.length } questions</p>
                <QuestionList questionsList={questionList} />
            </>
          )
        }
      </div>

    </div>

  );
};

export default HomeMainbar;