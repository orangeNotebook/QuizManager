import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import pbkdf2 from 'pbkdf2'
import { Redirect, Link } from 'react-router-dom';
import '../App.css';

function Login() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const [allUsers, setAllUsers] = useState([])

  useEffect(()=>{
    Axios.get("http://localhost:5000/readUsers").then((response) => {
      setAllUsers(response.data)
    })
  }, [])

 
  const login = () => {
    allUsers.map((val, key) => {
      
      if(val.userName === userName && val.password === (pbkdf2.pbkdf2Sync(password, val.salt, 1, 32, 'sha512')).toString('hex')){
        localStorage.setItem("user", JSON.stringify({userName: val.userName, access: val.access}))
        setRedirect(true)
      }
    })
  }
  
  return <div className="App">

    {redirect ?  <Redirect to='/Dashboard'/> : <p></p>}

    <h1>Login</h1>
    
    <label>User Name:</label>
    <input type="text" onChange={(event) => {setUserName(event.target.value)}}/>

    <label>Password:</label>
    <input type="text" onChange={(event) => {setPassword(event.target.value)}}/>

    <button onClick={login}>Login</button>

    <p>Don't have an account? <Link to="/CreateAccount">Create one!</Link> </p>

    </div>


}

export default Login;