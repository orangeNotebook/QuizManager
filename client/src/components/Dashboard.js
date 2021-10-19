import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import '../App.css';
import Header from './Header';

function Dashboard() {

  return <div className="App">
     {(JSON.parse(localStorage.getItem("user")).access === "invalid") ?  <Redirect to='/'/> : <p></p>}

      <Header/>
        
      <Link to="/EditQuiz"><button>Create a Quiz</button></Link>
      <Link to="/ViewQuizzes"><button>View all Quizzes</button></Link>


    </div>
}

export default Dashboard;