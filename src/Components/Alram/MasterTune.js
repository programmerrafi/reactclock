import React from "react";
import game from "./music/music.mp3";
const MasterTune = ({
  giveaway,
  deleteData,
  id,
  label,
  audiPlay,
  onOff,
  handleOnOff,
  editTog,
}) => {
  return (
    <>
      <div className="deadline">
        {editTog ? null : (
          <div className="icon_control">
            <div className="icon_delete" title="delete">
              <i
                className="fas fa-times-circle"
                onClick={() => deleteData(id)}
              ></i>
            </div>
          </div>
        )}

        <div className="deadline_info">
          {giveaway}
          {audiPlay ? null : onOff ? null : <audio src={game} autoPlay></audio>}

          <div className="massage" style={{ textAlign: "center" }}>
            <h2>{label}</h2>
            {/* <h3 style={{ color: "#c07718" }}>{label}</h3> */}
          </div>
          {/* swtich btn start */}
          <div
            className={`button_mobile ${onOff ? "" : "bg"}`}
            onClick={handleOnOff}
          >
            <span className={`switch ${onOff ? "slide" : ""}`}></span>
          </div>
          {/* swtich btn end */}
        </div>
      </div>
    </>
  );
};

export default MasterTune;
