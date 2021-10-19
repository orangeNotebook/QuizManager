import React, { useState  } from 'react';
import Axios from 'axios'
import { Redirect } from 'react-router-dom';
import Question from './Question';
import '../App.css';

const Quiz = props => {
    
  const quizDetails = props.location.state || {};

  const loggedInUser = localStorage.getItem("User");

  const [quizName, setQuizName] = useState('');
  const [quiz, setQuiz] = useState([])
  const [redirect, setRedirect] = useState(false);
  const [questionAmount, setQuestionAmount] = useState(quizDetails.questions.length);

  const maxQuestions = 5;
  const minQuestions = 1;
  let questions = [];

 const removeQuestion = () => {
    setQuestionAmount(questionAmount - 1)
}

const addQuestion = () => {
    setQuestionAmount(questionAmount + 1)
}

const saveQuiz = () => {
  Axios.put("http://localhost:5000/updateQuiz", {name: quizName, questions: quiz})
}

 for(let i = 0; i < questionAmount; i++){
  questions.push(
    <div>
      <Question questionNumber={i} quiz={quiz} setQuiz={setQuiz} quizDetails={quizDetails}/>
    </div>
  )
 }

  return <div className="App" class="quiz">

      {redirect ?  <Redirect to='/Dashboard'/> : <p></p>}
   
      <h1>{quizDetails.name}</h1>

      <div>
        <ul>{questions}</ul>
      </div>
    </div>

}

export default Quiz;