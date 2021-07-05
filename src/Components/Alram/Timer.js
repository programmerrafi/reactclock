import React, { useState } from "react";
import { optionMin, optionHrs } from "./TimerLoop";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
import TimerAnimation from "./TimerAnimation";
import TimerTune from "./TimerTune";

const Timer = () => {
  const [inputv, setInputv] = useState({
    hours: "",
    min: "",
    active: "hours",
  });
  const [updateTime, setUpdateTime] = useState({
    hours: "",
    min: "",
    active: "hours",
  });
  const [showTime, setShowTime] = useState(false);
  const [trueFalse, setTrueFalse] = useState(true);
  const [timerTune, setTimerTune] = useState(false);

  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputv((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // click event
  const handleClick = () => {
    setUpdateTime(inputv);
    setShowTime(true);
  };

  const children = ({ remainingTime }) => {
    if (remainingTime === 0) {
      setShowTime(false);
      setTimerTune(true);
    }
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const sec = remainingTime % 60;

    return `${hours}:${minutes}:${sec}`;
  };
  // cancel event
  const cancelEvent = () => {
    setShowTime(false);
    setTrueFalse(true);
  };
  // pause event
  const pauseEvent = () => {
    setTrueFalse(false);
  };

  // sartEvent
  const sartEvent = () => {
    setTrueFalse(true);
  };
  // timerTuneBtn
  const timerTuneBtn = () => {
    setTimerTune(false);
  };

  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Timer</h1>
      {showTime ? null : (
        <>
          <section className="section_center sec_center">
            <article className="gift_info">
              <div>
                <div className="input_fild">
                  <div className="select1 selectT">
                    <div>
                      <h3>Hours</h3>
                      <select
                        type="number"
                        name="hours"
                        value={inputv.hours}
                        onChange={inputEvent}
                      >
                        {optionHrs}
                      </select>
                    </div>
                    <div>
                      <h3>Min</h3>
                      <select
                        type="number"
                        name="min"
                        value={inputv.min}
                        onChange={inputEvent}
                      >
                        {optionMin}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="button_Timer">
                  <Button className="timer_btn" onClick={handleClick}>
                    Set Timer
                  </Button>
                </div>
              </div>
            </article>
          </section>
        </>
      )}
      <TimerAnimation
        updateTime={updateTime}
        showTime={showTime}
        children={children}
        pauseEvent={pauseEvent}
        cancelEvent={cancelEvent}
        trueFalse={trueFalse}
        sartEvent={sartEvent}
      />
      {timerTune ? <TimerTune timerTuneBtn={timerTuneBtn} /> : null}

      <Footer />
    </>
  );
};

export default Timer;
