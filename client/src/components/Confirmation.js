import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Confirmation = props => {

  
  return <div className="App">
    <h1>{props.location.message}</h1>
     <Link to="/Dashboard"><button>Return to Dashboard</button></Link>

    </div>
}

export default Confirmation;