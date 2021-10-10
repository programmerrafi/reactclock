import React from "react";

const MasterDis = ({
  giveaway,
  timerDay,
  timerHour,
  timerMinute,
  timerSec,
  deleteData,
  id,
  editTog,
  onOff,
  handleOnOff,
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

          <div className="deadline_inner">
            <div className="deadline-format">
              <div>
                <h4 className="days">{timerDay}</h4>
                <span>days</span>
              </div>
            </div>
            <div className="deadline-format">
              <div>
                <h4 className="hours">{timerHour}</h4>
                <span>hours</span>
              </div>
            </div>
            <div className="deadline-format">
              <div>
                <h4 className="minutes">{timerMinute}</h4>
                <span>mins</span>
              </div>
            </div>
            <div className="deadline-format">
              <div>
                <h4 className="seconds">{timerSec}</h4>
                <span>secs</span>
              </div>
            </div>
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
        {/* <hr /> */}
      </div>
    </>
  );
};

export default MasterDis;
