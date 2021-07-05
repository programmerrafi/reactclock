import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MasterAlrmMain from "./Components/Alram/MasterAlrmMain";
import StopWatch from "./Components/Alram/StopWatch";
import Timer from "./Components/Alram/Timer";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="alarm_start">
        <div className="alarm_main">
          <Switch>
            <Route exact path="/" component={MasterAlrmMain} />
            <Route exact path="/stopwatch" component={StopWatch} />
            <Route exact path="/timer" component={Timer} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
