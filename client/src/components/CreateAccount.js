import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import pbkdf2 from 'pbkdf2'
import { Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

function CreateUser() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [validUserName, setValidUserName] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [allUserNames, setAllUserNames] = useState([])

  useEffect(()=>{
    Axios.get("http://localhost:5000/readUserNames").then((response) => {
      setAllUserNames(response.data)
    })
  }, [])

  const checkValidUserName = (userName) =>{
    let valid = true;
    allUserNames.map((val) => {
      if(userName.toUpperCase() === val.userName.toUpperCase()){
        valid = false;
      }
      return null;
    })
    setValidUserName(valid)
    return valid
  }

  const createUser = () => {
    if(checkValidUserName(userName)){
    var salt = uuidv4();
    var newPassword = (pbkdf2.pbkdf2Sync(password, salt, 1, 32, 'sha512').toString('hex'))
    Axios.post("http://localhost:5000/createUser", {userName: userName, password: newPassword, salt: salt})
    setRedirect(true)
  }}

 

  return <div className="App">

    {redirect ?  <Redirect to='/'/> : <p></p>}

    <h1>Create an account</h1>
    
    
    <label>Usename:</label>
    <input type="text" onChange={(event) => {setUserName(event.target.value)}}/>

    <label>Password:</label>
    <input type="password" onChange={(event) => {setPassword(event.target.value)}}/>

    
    
    {(userName && password)
    ?<button onClick={createUser}>Create</button>
    :<button disabled={true}>Create</button>
    }

    {validUserName ? 
    <p></p>
    : <p className="error-message">Username already in use, please choose a different one</p>}

    </div>
}

export default CreateUser;