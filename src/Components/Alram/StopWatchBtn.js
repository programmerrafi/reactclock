import React from "react";

const StopWatchBtn = ({
  start,
  status,
  stop,
  reset,
  lap,
  upArr,
  clearAll,
  clearA,
}) => {
  return (
    <>
      {status === 0 ? (
        <div className="button-wrapper">
          <button className="button hidden"></button>
          <button className="button" onClick={start}>
            Start
          </button>
          <button className="button hidden"></button>
        </div>
      ) : (
        ""
      )}

      {status === 1 ? (
        <div className="button-wrapper">
          <button className="button" onClick={reset}>
            Reset
          </button>
          <button
            className="button stop"
            onClick={stop}
            style={{ border: "3px solid red" }}
          >
            Stop
          </button>
          <button className="button" onClick={lap}>
            Lap
          </button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div className="button-wrapper">
          <button className="button" onClick={reset}>
            Reset
          </button>
          <button className="button" onClick={start}>
            Start
          </button>
          <button className="button" onClick={lap}>
            Lap
          </button>
        </div>
      ) : (
        ""
      )}

      <ul className="laps">
        {clearA ? (
          <button className="lap-lear-button" onClick={clearAll}>
            Clear All
          </button>
        ) : null}

        {upArr.map((item, index) => {
          return (
            <li className="lap-item" key={index}>
              <span className="number">#{index}</span>
              <span className="timeStamp">
                {" "}
                {item.m} : {item.s} : {item.ms}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StopWatchBtn;
