import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios'
import Question from './Question';
import '../App.css';

const Quiz = props => {
    
  const quizDetails = props.location.state || {};

  const [loggedInUser, setLoggedInUser] = useState({});
  const [redirect, setRedirect] = useState(false)
  const [quiz, setQuiz] = useState([])
  const [questionAmount] = useState(quizDetails.questions.length);


  let questions = [];

 

  useEffect(()=>{
      setLoggedInUser(JSON.parse(localStorage.getItem("user")))
    }, [])


  const deleteQuiz = () =>{
    Axios.delete(`http://localhost:5000/deleteQuiz/${quizDetails._id}`)
    
  }

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
    {redirect ? <Redirect to={
      {
      pathname: '/Confirmation',
      message: "Quiz Deleted"
      }
      }/> :<p></p>}
   
      <h1>{quizDetails.name}</h1>

      {(loggedInUser.access === "edit") 
      ? <button className="delete-button" onClick={() => { if(window.confirm('Are you sure you wish to delete this item?')){
        deleteQuiz();
        setRedirect(true);
        } }}>Delete quiz</button>
      :  <p></p>
      }

      <div>
        <ul>{questions}</ul>
      </div>
      </div>
    </div>

}

export default Quiz;