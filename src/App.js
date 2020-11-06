import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/LandingPage/Home'
import StepForm from './Components/StepForm/StepForm'
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/form' component={StepForm} />
      </Switch>
    </div>
  );
}

export default App;
