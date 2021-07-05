import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "@material-ui/core/Button";

const TimerAnimation = ({
  children,
  showTime,
  updateTime,
  cancelEvent,
  pauseEvent,
  trueFalse,
  sartEvent,
}) => {
  let upTimerHour = Number(updateTime.hours);
  let upTimerMin = Number(updateTime.min);

  const hoursSec = upTimerHour * 60 * 60;
  const minuteSec = upTimerMin * 60;
  const totalSeconds = hoursSec + minuteSec;

  return (
    <>
      {showTime ? (
        <div className="count">
          <div className="time_wrapper">
            <CountdownCircleTimer
              isPlaying={trueFalse}
              duration={totalSeconds}
              strokeWidth={6}
              trailColor="#020422"
              colors={[["#fe6f6b", 0.33]]}
              onComplete={() => {
                //           stopTimer();
              }}
            >
              {children}
            </CountdownCircleTimer>
          </div>
          <div className="btn-wrapper">
            <Button className="but_c" onClick={cancelEvent}>
              Cancel
            </Button>
            {trueFalse ? (
              <Button className="but_p" onClick={pauseEvent}>
                Pause
              </Button>
            ) : (
              <Button className="but_p" onClick={sartEvent}>
                start
              </Button>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TimerAnimation;
