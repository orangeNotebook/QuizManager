import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Redirect, Link} from 'react-router-dom';
import '../App.css';

function ViewQuizzes() {

  
  const [allQuizzes, setAllQuizzes] = useState([])
  const [redirect, setRedirect] = useState(false);

  useEffect(()=>{
    Axios.get("http://localhost:5000/readQuizzes").then((response) => {
      console.log(response.data)
      setAllQuizzes(response.data)
    })
  }, [])



  const quizzes = [];

  for(let i = 0; i < allQuizzes.length; i++){
    quizzes.push(
      <div>
        <Link to={
          {
            pathname: "/Quiz/",
            state: allQuizzes[i]
          }
        }><button>{allQuizzes[i].name}</button></Link>
      </div>
    )
  }


  return <div className="App">

    {redirect ?  <Redirect to='/Dashboard'/> : <p></p>}

    <ul>{quizzes}</ul>

    </div>

}

export default ViewQuizzes;