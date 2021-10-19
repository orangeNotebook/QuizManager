import React, { useState, useEffect } from 'react';
import { Redirect, Link} from 'react-router-dom';
import '../App.css';

const EditQuestion = props => {
  

  const [questionName, setQuestionName] = useState('');
  const [quizAnswer, setQuizAnswer] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [questionAmount, setQuestionAmount] = useState(3);
  const [dropdownValue, setDropdownValue] = useState('A')


  const [refresh, setRefresh] = useState(0);


  const maxQuestions = 5;
  const minQuestions = 3;
 const answers = [];
 const options = [];

 const removeAnswer = () => {
    setQuestionAmount(questionAmount - 1)
}

const addAnswer = () => {
    setQuestionAmount(questionAmount + 1)
}

const handleDropdownChange = (event) => {
  setDropdownValue(event.target.value);
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

const saveQuiz = () => {
  let newQuiz = props.quiz
  newQuiz[props.questionNumber] = {name: questionName, questions: quizAnswer, answer: dropdownValue}
  props.setQuiz(newQuiz)
}


 
 for(let i = 0; i < questionAmount; i++){
  
        answers.push(
        <div>
            <label>{localStorage.getItem("questionLetter")[i]}</label>
            <input type="text" onChange={(event) => {
              let newArray = quizAnswer
              newArray[i] = {id: localStorage.getItem("questionLetter")[i], answer: event.target.value}
              setQuizAnswer(newArray)
              setRefresh(refresh + 1)
              }}/>
        </div>)
  
  options.push({label: localStorage.getItem("questionLetter")[i], value:localStorage.getItem("questionLetter")[i]})
}



  return <div className="App" class="question">

    {redirect ?  <Redirect to='/Dashboard'/> : <p></p>}

    <h1>Question {props.questionNumber + 1}</h1>
    
    <label>Question:</label>
    <input class="questionName" type="text" onChange={(event) => {setQuestionName(event.target.value)}}/>

    <label>Question Answers:</label>
    <ul>{answers}</ul>

    {(refresh)
    ? <div>
      <Dropdown
      label="Correct answer: "
      options={options}
      value={dropdownValue}
      onChange={handleDropdownChange}/>
      {saveQuiz()}
      </div>
    : <p></p>
    }
    

    {questionAmount === minQuestions 
    ? <button disabled={true}>Remove an answer</button>
    : <button onClick={removeAnswer}>Remove an answer</button>}
    
    {questionAmount === maxQuestions 
    ? <button disabled={true}>Add an answer</button>
    : <button onClick={addAnswer}>Add an answer</button>}

    </div>

}

export default EditQuestion;