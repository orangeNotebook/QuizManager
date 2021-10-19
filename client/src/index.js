import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

localStorage.setItem("user", JSON.stringify({access: "invalid"}))

ReactDOM.render(
    <App />,
  document.getElementById('root')
);