import React from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import TimerIcon from "@material-ui/icons/Timer";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer_timer">
        <div className="alarm_type">
          <NavLink
            to="/"
            exact
            activeClassName="tin_color"
            className="alarm"
            aria-current="page"
          >
            <AccessAlarmIcon className="alarmI" />
            <h5>Alarm</h5>
          </NavLink>

          <NavLink
            to="/stopwatch"
            exact
            activeClassName="tin_color"
            className="alarm"
          >
            <TimerIcon className="alarmI" />
            <h5>Stopwatch</h5>
          </NavLink>

          <NavLink
            to="/timer"
            exact
            activeClassName="tin_color"
            className="alarm"
          >
            <AvTimerIcon className="alarmI" />
            <h5>Timer</h5>
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
