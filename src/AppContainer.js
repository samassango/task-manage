import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import SignUp from "./components/signup";
import SignIn from "./components/login";
import PasswordReset from "./components/reset-password";
import CreateJob from "./components/create-job";
import AllJobs from "./components/all-jobs";
import AvailableJobs from "./components/available-jobs";
import JobInProgress from "./components/job-in-progress";
import Reports from "./components/reports";
import JobTodos from "./components/job-todos";
import NoMatch from "./components/no-match";

const AppContainer = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/reset" component={PasswordReset} />
      <Route path="/create-job" component={CreateJob} />
      <Route path="/available-job" component={AvailableJobs} />
      <Route path="/all-jobs" component={AllJobs} />
      <Route path="/job-in-progress" component={JobInProgress} />
      <Route path="/reports" component={Reports} />
      <Route path="/job-todos" component={JobTodos} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default AppContainer;
