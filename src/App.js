import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/LandingPage/Home'
import StepForm from './Components/StepForm/StepForm'
 
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/form' component={StepForm} />
      </Switch>
    </div>
  );
}

export default App;
