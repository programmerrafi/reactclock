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
            {/* <div className="icon_edit" title="edit">
              <i className="fas fa-edit" onClick={() => editData(id)}></i>
            </div> */}
          </div>
        )}

        <div className="deadline_info">
          <div className="alarm_tune">
            <h4 className="giveaway">{giveaway}</h4>
          </div>
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
        </div>
        {/* <hr /> */}
      </div>
    </>
  );
};

export default MasterDis;
