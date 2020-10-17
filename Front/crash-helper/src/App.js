import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutUs}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
