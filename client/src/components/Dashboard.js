import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Dashboard() {

  
let [loggedInUser, setLoggedInUser] = useState({});

useEffect(()=>{
    setLoggedInUser(JSON.parse(localStorage.getItem("user")))
  }, [])
 

  return <div className="App">
      <p>Logged in</p>
        
      <button>Create a Quiz</button>
      <button>View all Quizzes</button>


    </div>
}

export default Dashboard;