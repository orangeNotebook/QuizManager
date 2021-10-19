import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {

  
let [loggedInUser, setLoggedInUser] = useState({});


useEffect(()=>{
    setLoggedInUser(JSON.parse(localStorage.getItem("user")))
  }, [])
 
  const logout = () =>{
      localStorage.clear()
      localStorage.setItem("user", JSON.stringify({access: "invalid"}))
   
  }

  return <div className="App" class="header">
    
    {(loggedInUser.access != "invalid") ? <p>Logged in as {loggedInUser.userName}</p>
   : <p>Not logged in</p>}

     <Link to="/"><button onClick={logout}>Logout</button></Link>

    </div>
}

export default Header;