import React, { useCallback, useEffect, useState } from "react";
import { months, weekdays, hoursAM, hoursPM } from "./DayMonth";
import MasterTune from "./MasterTune";
import MasterDis from "./MasterDis";

const MasterAlram = (props) => {
  const [timerDay, setTimerDay] = useState("");
  const [timerHour, setTimerHour] = useState("");
  const [timerMinute, setTimerMinute] = useState("");
  const [timerSec, setTimerSec] = useState("");
  const [timerClose, setTimerClose] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [onOff, setOnOff] = useState(false);

  // props value
  let hrs1 = Number(props.item1.hours);
  let mint = Number(props.item1.min);
  let amPm = props.item1.amPM;
  let gtdate = props.item1.date;
  let gMonth = props.item1.month;

  // Calculating Hours AMpm
  let getHors = () => {
    if (amPm === "") {
      amPm = "AM";
    }
    if (hrs1 === 0) {
      hrs1 = 0;
    }
    if (amPm === "AM" && hrs1 <= 12) {
      let timeBd = hoursAM[hrs1];

      return timeBd;
    }
    if (amPm === "PM" && hrs1 <= 12) {
      let timeBd = hoursPM[hrs1];
      return timeBd;
    }
  };
  let mainHars = Number(getHors());
  // >>>>>>>>>>>>>>>>>>>

  // Calculatinf Date
  let getDte = () => {
    // 1st condition
    // nowTime.getHours() >= Number(getHors()) &&
    //   (nowTime.getDate() === Number(gtdate) || Number(gtdate) === 0)
    const nowTime = new Date();
    if (
      nowTime.getHours() >= Number(getHors()) &&
      (nowTime.getDate() === Number(gtdate) || Number(gtdate) === 0) &&
      (nowTime.getHours() === Number(getHors())
        ? nowTime.getMinutes() > mint
        : nowTime.getHours() >= Number(getHors()))
    ) {
      const getD1 = new Date().getDate();
      return getD1 + 1;
    }
    if (gtdate === "Days" || gtdate === "") {
      const getD = new Date().getDate();
      return getD;
    } else {
      return Number(gtdate);
    }
  };
  let cDate = getDte();
  // >>>>>>>>>>>>>>>>>>>

  // Calculatinf Month
  let getMon = () => {
    if (gMonth === "Months" || gMonth === "") {
      const bMon = new Date().getMonth();
      return bMon;
    } else {
      let array = months.length;
      for (let i = 0; i < array; i++) {
        if (months[i] === gMonth) {
          return i;
        }
      }
    }
  };

  // console.log(cMon);
  // >>>>>>>>>>>>>>>>>>>

  // Get Manual Future Date setting
  let bYear = new Date().getFullYear();

  // new Date(year, month, day, hours, minutes, seconds, milliseconds)
  let futureDate = new Date(bYear, getMon(), cDate, mainHars, mint, 0);

  // >>>>>>> For alarm message giveway start >>>>>>>>
  let year = futureDate.getFullYear();
  let hours = futureDate.getHours();
  let minutes = futureDate.getMinutes();
  // console.log(minutes);
  let date = futureDate.getDate();

  let month = futureDate.getMonth();
  month = months[month];
  // console.log(month);

  let weekday = weekdays[futureDate.getDay()];
  // console.log(futureDate.getDay(2));
  // >>>>>>>>>>>>>>>>>>>

  // Add before 0 minutes and hours
  let upHours = (hours) => {
    let timeHours = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
    ];
    return timeHours[hours];
  };
  let upMinutes = (minutes) => {
    if (minutes < 10) {
      let timeMinutes = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
      ];
      return timeMinutes[minutes];
    } else {
      let timeMin = futureDate.getMinutes();
      return timeMin;
    }
  };
  // >>>>>>>>>>>>>>>>>>>

  let giveaway = (
    <>
      <div className="alarm_tune">
        <h4 className={`giveaway ${onOff ? "" : "text_white"}`}>
          Ends on{" "}
          <span className={`${onOff ? "" : "text_yellow"}`}>
            {weekday}, {date} {month} {year}
          </span>
          <p>
            {" "}
            Time:{" "}
            <span className={`${onOff ? "" : "text_yellow"}`}>
              {upHours(hours)}:{upMinutes(minutes)} {amPm}
            </span>
          </p>
        </h4>
      </div>

      <div className="alarm_tune1">
        <h4>
          <p>
            <span className={`${onOff ? "" : "text_white"}`}>
              {upHours(hours)}:{upMinutes(minutes)}
              <span className="am">{amPm}</span>
            </span>
          </p>
          <span className={`${onOff ? "" : "text_yellow"}`}>
            {weekday}, {date} {month} {year}
          </span>
        </h4>
      </div>
    </>
  );
  // >>>>>>> For alarm message giveway End >>>>>>>>

  let futureTime = futureDate.getTime();

  let startTimer = useCallback(() => {
    //future time in ms
    let today = new Date().getTime();
    let t = futureTime - today;

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const onewHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    const days = Math.floor(t / oneDay);
    const hours = Math.floor((t % oneDay) / onewHour);
    const minutes = Math.floor((t % onewHour) / oneMinute);
    const seconds = Math.floor((t % oneMinute) / 1000);

    if (t < 1000) {
      if (Math.sign(t) === 1) {
        setTimerClose(true);
      }
    } else {
      setTimerClose(false);
      setTimerDay(days);
      setTimerHour(hours);
      setTimerMinute(minutes);
      setTimerSec(seconds);
    }
  }, [futureTime]);

  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        startTimer();
      }, 1000);
      return () => window.clearInterval(id);
    }
    return undefined;
  }, [isRunning, startTimer]);

  //  start and stop
  const handleOnOff = () => {
    if (onOff === false) {
      setOnOff(true);
      setIsRunning(false);
    } else {
      setOnOff(false);
      setIsRunning(true);
    }
  };

  return (
    <>
      {timerClose ? (
        <MasterTune
          giveaway={giveaway}
          id={props.id}
          deleteData={props.deleteData}
          label={props.item1.label}
          audiPlay={props.audiPlay}
          onOff={onOff}
          handleOnOff={handleOnOff}
          editTog={props.editTog}
        />
      ) : (
        <MasterDis
          giveaway={giveaway}
          timerDay={timerDay}
          timerHour={timerHour}
          timerMinute={timerMinute}
          timerSec={timerSec}
          deleteData={props.deleteData}
          editData={props.editData}
          id={props.id}
          editTog={props.editTog}
          onOff={onOff}
          handleOnOff={handleOnOff}
        />
      )}
    </>
  );
};

export default MasterAlram;
