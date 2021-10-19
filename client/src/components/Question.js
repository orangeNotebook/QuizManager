import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

const Question = props => {
  

  const questionNumber = props.questionNumber
  const quizDetails = props.quizDetails
  const quizAnswers = quizDetails.questions[questionNumber].questions
  const quizAnswer = quizDetails.questions[questionNumber].answer
  console.log(quizAnswers)




const answers = [];
const options = [];

const [redirect, setRedirect] = useState(false);


 
 for(let i = 0; i < quizAnswers.length; i++){
  
        answers.push(
        <div>
            <label>{localStorage.getItem("questionLetter")[i]}</label>
            <h3>{quizAnswers[i].answer}</h3>
            
        </div>)
  
  options.push({label: localStorage.getItem("questionLetter")[i], value:localStorage.getItem("questionLetter")[i]})
}



  return <div className="App" className="question">

    {redirect ?  <Redirect to='/Dashboard'/> : <p></p>}

    <h1>Question {props.questionNumber + 1}</h1>
    
    <h2>{quizDetails.questions[questionNumber].name}</h2>

    <ul>{answers}</ul>
    <p>Correct Answer: {quizAnswer}</p>
    

    </div>

}

export default Question;