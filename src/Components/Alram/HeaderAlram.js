import React from "react";

const HeaderAlram = ({ clickEvent, Edit, Alarm, Icon }) => {
  return (
    <>
      <header className="header_alarm">
        <h4>{Edit}</h4>
        <h3>{Alarm}</h3>
        <div className="alarm_add_icon">
          <button onClick={clickEvent}>{Icon}</button>
        </div>
      </header>
    </>
  );
};

export default HeaderAlram;
