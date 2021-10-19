import React, { useState } from 'react';
import Axios from 'axios'
import { Redirect, Link} from 'react-router-dom';
import EditQuestion from './EditQuestion';
import '../App.css';

function EditQuiz() {


  const [quizName, setQuizName] = useState('');
  const [quiz, setQuiz] = useState([])
  const [questionAmount, setQuestionAmount] = useState(1);

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
  Axios.post("http://localhost:5000/createQuiz", {name: quizName, questions: quiz})
}

 for(let i = 0; i < questionAmount; i++){
  questions.push(
    <div>
      <EditQuestion questionNumber={i} quiz={quiz} setQuiz={setQuiz}/>
    </div>
  )
 }

  return <div className="App">

    {(JSON.parse(localStorage.getItem("user")).access === "invalid") ?  <Redirect to='/'/> : <p></p>}

    <h1>Edit Quiz</h1>
    
    <label>Quiz Name:</label>
    <input type="text" onChange={(event) => {setQuizName(event.target.value)}}/>

    <ul>{questions}</ul>

    <div className="quizOptions">
      {questionAmount === minQuestions 
      ? <button disabled={true}>Remove a question</button>
      : <button onClick={removeQuestion}>Remove a question</button>}
      
      {questionAmount === maxQuestions 
      ? <button disabled={true}>Add a question</button>
      : <button onClick={addQuestion}>Add a question</button>}

        <Link to={"/Confirmation"}><button onClick={saveQuiz}>Save Quiz</button></Link>
    </div>
    </div>

}

export default EditQuiz;