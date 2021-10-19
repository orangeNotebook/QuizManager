import './App.css';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import EditQuiz from './components/EditQuiz';
import Confirmation from './components/Confirmation';
import ViewQuizzes from './components/ViewQuizzes';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <div>
           <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/CreateAccount" component={CreateAccount} exact/>
            <Route path="/Dashboard" component={Dashboard} extract/>
            <Route path="/EditQuiz" component={EditQuiz} extract/>
            <Route path="/Confirmation" component={Confirmation} extract/>
            <Route path="/ViewQuizzes" component={ViewQuizzes} extract/>
            <Route path="/Quiz" component={Quiz} extract/>

           <Route component={Error}/>
          </Switch>
       </div> 
       {JSON.parse(localStorage.getItem("user")).access === "invalid" ? <Redirect to='/'/> : <p></p>}
     </BrowserRouter>
    </div>
  );
}

export default App;
