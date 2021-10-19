import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Confirmation() {

  
  return <div className="App">
    <h1>Quiz Created</h1>
     <Link to="/Dashboard"><button>Return to Dashboard</button></Link>

    </div>
}

export default Confirmation;