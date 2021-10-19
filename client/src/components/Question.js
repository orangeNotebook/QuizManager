import React, { useState, useEffect } from 'react';
import '../App.css';

const Question = props => {

  let [loggedInUser, setLoggedInUser] = useState({});

  useEffect(()=>{
      setLoggedInUser(JSON.parse(localStorage.getItem("user")))
    }, [])

  const questionNumber = props.questionNumber
  const quizDetails = props.quizDetails
  const quizAnswers = quizDetails.questions[questionNumber].questions
  const quizAnswer = quizDetails.questions[questionNumber].answer
 
  const answers = [];
  const options = [];

 
 for(let i = 0; i < quizAnswers.length; i++){
  
        answers.push(
        <div>
            <label>{localStorage.getItem("questionLetter")[i]}</label>
            <h3>{quizAnswers[i].answer}</h3>
            
        </div>)
  
  options.push({label: localStorage.getItem("questionLetter")[i], value:localStorage.getItem("questionLetter")[i]})
}



  return <div className="App">
      <div className="question">

      <h1>Question {props.questionNumber + 1}</h1>
      
      <h2>{quizDetails.questions[questionNumber].name}</h2>

      <ul>{answers}</ul>
      
      {(loggedInUser.access === "restricted") ? <p></p>
      :  <p>Correct Answer: {quizAnswer}</p>
      }
     
      
      </div>
    </div>

}

export default Question;