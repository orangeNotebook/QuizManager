import './App.css';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import EditQuestion from './components/EditQuestion';

localStorage.setItem("user", JSON.stringify({access: "invalid"}))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <div>
           <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/CreateAccount" component={CreateAccount} exact/>
            <Route path="/Dashboard" component={Dashboard} extract/>
            <Route path="/EditQuestion" component={EditQuestion} extract/>
           <Route component={Error}/>
          </Switch>
       </div> 
       {JSON.parse(localStorage.getItem("user")).access === "invalid" ? <Redirect to='/'/> : <p></p>}
     </BrowserRouter>
    </div>
  );
}

export default App;
