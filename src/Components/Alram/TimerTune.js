import React from "react";
import game from "./music/music.mp3";
import Button from "@material-ui/core/Button";

const TimerTune = ({ timerTuneBtn }) => {
  return (
    <>
      <audio src={game} autoPlay></audio>
      <div className="mgsTune">
        <h2>Time is Up !!</h2>
        <Button className="timerBtn" onClick={timerTuneBtn}>
          stop Tune
        </Button>
      </div>
      <div className="backdrop"></div>
    </>
  );
};

export default TimerTune;
