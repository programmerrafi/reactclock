import React, { useState } from "react";
import Footer from "./Footer";
import StopWatchBtn from "./StopWatchBtn";
import { millsec } from "./StopWatch100";

const StopWatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [upArr, setUpArr] = useState([]);
  const [clearA, setClearA] = useState(false);
  const [rgb, setRgb] = useState(false);

  const start = () => {
    run();
    setStatus(1);
    setRgb(true);
    setInterv(setInterval(run, 10));
  };

  var updateMs = millsec[time.ms],
    updateS = time.s,
    updateM = time.m;
  // console.log(updateMs);

  const run = () => {
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    if (updateM === 60) {
      updateM = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    setRgb(false);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0 });
    setUpArr([]);
    setClearA(false);
    setRgb(false);
  };
  // add lap
  const lap = () => {
    setUpArr((prev) => {
      return [...prev, time];
    });
    setClearA(true);
  };
  // clear all lap
  const clearAll = () => {
    setUpArr([]);
    setClearA(false);
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <div className="container">
        <div className="head_container">
          <div className="watch">
            {rgb ? (
              <div className="outer-circle animation-bg">
                <div className="inner-circle">
                  <span className="text minute">
                    {time.m >= 10 ? time.m : "0" + time.m} :
                  </span>
                  <span className="text sec">
                    &nbsp;{time.s >= 10 ? time.s : "0" + time.s} :
                  </span>
                  <span className="text msec">&nbsp;{updateMs}</span>
                </div>
              </div>
            ) : (
              <div className="outer-circle">
                <div className="inner-circle">
                  <span className="text minute">
                    {time.m >= 10 ? time.m : "0" + time.m} :
                  </span>
                  <span className="text sec">
                    &nbsp;{time.s >= 10 ? time.s : "0" + time.s} :
                  </span>
                  <span className="text msec">&nbsp;{updateMs}</span>
                </div>
              </div>
            )}

            <div className="button_laps">
              <StopWatchBtn
                start={start}
                status={status}
                stop={stop}
                reset={reset}
                lap={lap}
                upArr={upArr}
                clearAll={clearAll}
                clearA={clearA}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StopWatch;
