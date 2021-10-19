import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from './Header';

function Dashboard() {

  
let [loggedInUser, setLoggedInUser] = useState({});

useEffect(()=>{
    setLoggedInUser(JSON.parse(localStorage.getItem("user")))
  }, [])
 

  return <div className="App">
      <Header/>
        
      <Link to="/EditQuiz"><button>Create a Quiz</button></Link>
      <Link to="/ViewQuizzes"><button>View all Quizzes</button></Link>


    </div>
}

export default Dashboard;