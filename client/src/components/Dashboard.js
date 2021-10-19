import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import '../App.css';
import Header from './Header';

function Dashboard() {
  localStorage.setItem("questionLetter", ("ABCDE"))

  let [loggedInUser, setLoggedInUser] = useState({});

  useEffect(()=>{
      setLoggedInUser(JSON.parse(localStorage.getItem("user")))
    }, [])

  return <div className="App">
     {(loggedInUser.access === "invalid") ?  <Redirect to='/'/> : <p></p>}

      <Header/>
        
      {(loggedInUser.access === "edit") ? <Link to="/EditQuiz"><button>Create a Quiz</button></Link>
      : <button disabled={true}>Create a Quiz</button>
      }

      <Link to="/ViewQuizzes"><button>View all Quizzes</button></Link>


    </div>
}

export default Dashboard;