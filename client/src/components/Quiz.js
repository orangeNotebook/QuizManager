import React, { useState  } from 'react';
import { Redirect } from 'react-router-dom';
import Question from './Question';
import '../App.css';

const Quiz = props => {
    
  const quizDetails = props.location.state || {};

  const [quiz, setQuiz] = useState([])
  const [questionAmount] = useState(quizDetails.questions.length);


  let questions = [];


 for(let i = 0; i < questionAmount; i++){
  questions.push(
    <div>
      <Question questionNumber={i} quiz={quiz} setQuiz={setQuiz} quizDetails={quizDetails}/>
    </div>
  )
 }

  return <div className="App">
    <div className="quiz">

    {(JSON.parse(localStorage.getItem("user")).access === "invalid") ?  <Redirect to='/'/> : <p></p>}
   
      <h1>{quizDetails.name}</h1>

      <div>
        <ul>{questions}</ul>
      </div>
      </div>
    </div>

}

export default Quiz;