import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";

function App() {
  sessionStorage.setItem("userId", null);
  sessionStorage.setItem("authToken", null);
  sessionStorage.setItem("userType", null);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
