import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";
import NewDamages from "./pages/NewDamages";
import PricedDamages from "./pages/PricedDamages";
import DamagesInProgress from "./pages/DamagesInProgress";
import CompletedDamages from "./pages/CompletedDamages";
import MyOpinions from "./pages/MyOpinions";
import PendingOpinions from "./pages/PendingOpinions";
import WaitingForPricingDamages from "./pages/WaitingForPricingDamages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/damages/new" component={NewDamages} />
          <Route exact path="/damages/priced" component={PricedDamages} />
          <Route
            exact
            path="/damages/inProgress"
            component={DamagesInProgress}
          />
          <Route
            exact
            path="/damages/waitingForPricing"
            component={WaitingForPricingDamages}
          />
          <Route exact path="/damages/completed" component={CompletedDamages} />
          <Route exact path="/opinions/my" component={MyOpinions} />
          <Route exact path="/opinions/pending" component={PendingOpinions} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
