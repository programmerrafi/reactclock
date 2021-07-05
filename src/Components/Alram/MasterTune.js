import React from "react";
import game from "./music/music.mp3";
const MasterTune = ({ giveaway, deleteData, id, label }) => {
  return (
    <>
      <div className="deadline">
        <div className="icon_control">
          <div className="icon_delete" title="stop alarm">
            <i
              className="fas fa-times-circle"
              onClick={() => deleteData(id)}
            ></i>
          </div>
        </div>

        <div className="deadline_info">
          <div className="alarm_tune">
            <h4 className="giveaway">{giveaway}</h4>
            <audio src={game} autoPlay></audio>
          </div>
          <div className="massage" style={{ textAlign: "center" }}>
            <h2>{label}</h2>
            {/* <h3 style={{ color: "#c07718" }}>{label}</h3> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterTune;
