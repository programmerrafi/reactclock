import React, { useRef, useEffect, useState } from "react";
import { months, weekdays, hoursAM, hoursPM } from "./DayMonth";
import MasterTune from "./MasterTune";
import MasterDis from "./MasterDis";

const MasterAlram = (props) => {
  const [timerDay, setTimerDay] = useState("");
  const [timerHour, setTimerHour] = useState("");
  const [timerMinute, setTimerMinute] = useState("");
  const [timerSec, setTimerSec] = useState("");
  const [timerClose, setTimerClose] = useState(false);

  let interval = useRef();

  // props value
  let hrs1 = Number(props.item1.hours);
  let mint = Number(props.item1.min);
  let amPm = props.item1.amPM;
  let gtdate = props.item1.date;
  let gMonth = props.item1.month;

  // Calculating Hours AMpm
  const getHors = () => {
    if (amPm === "") {
      amPm = "AM";
    }
    if (hrs1 === 0) {
      hrs1 = 1;
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
  const getDte = () => {
    if (gtdate === "Days" || gtdate === "") {
      const getD = new Date().getDate();
      return getD;
    }
    //  else if (new Date().getHours() > hrs1) {
    //   const cdt = new Date().getDate();
    //   console.log(cdt);
    //   return cdt + 1;
    // }
    else {
      return Number(gtdate);
    }
  };
  let cDate = getDte();
  // >>>>>>>>>>>>>>>>>>>

  // Calculatinf Month
  const getMon = () => {
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
  const bYear = new Date().getFullYear();
  const bsec = new Date().getSeconds();

  // new Date(year, month, day, hours, minutes, seconds, milliseconds)
  let futureDate = new Date(bYear, getMon(), cDate, mainHars, mint, bsec);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  // console.log(hours);
  const minutes = futureDate.getMinutes();
  const date = futureDate.getDate();

  let month = futureDate.getMonth();
  month = months[month];
  // console.log(month);

  let weekday = weekdays[futureDate.getDay()];
  // console.log(futureDate.getDay(2));
  // >>>>>>>>>>>>>>>>>>>

  // Add before 0 minutes and hours
  const upHours = (hours) => {
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
  const upMinutes = (minutes) => {
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

  const giveaway = (
    <>
      Ends on{" "}
      <span>
        {weekday}, {date} {month} {year}
      </span>
      <p>
        {" "}
        Time:{" "}
        <span>
          {upHours(hours)}:{upMinutes(minutes)} {amPm}
        </span>
      </p>
    </>
  );

  // Time Start maching using Iterval
  const startTimer = () => {
    //future time in ms
    const futureTime = futureDate.getTime();
    // console.log(futureTime);

    interval = setInterval(() => {
      const today = new Date().getTime();
      let t = futureTime - today;
      //   console.log(t);

      // values in ms
      const oneDay = 24 * 60 * 60 * 1000;
      const onewHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;

      // calculate all values
      let days = Math.floor(t / oneDay);
      let hours = Math.floor((t % oneDay) / onewHour);
      let minutes = Math.floor((t % onewHour) / oneMinute);
      let seconds = Math.floor((t % oneMinute) / 1000);

      if (t < 1000) {
        clearInterval(interval);
        if (Math.sign(t) === 1) {
          //   console.log("hy");
          setTimerClose(true);
        }
      } else {
        setTimerClose(false);
        setTimerDay(days);
        setTimerHour(hours);
        setTimerMinute(minutes);
        setTimerSec(seconds);
      }
    }, 1000);
  };
  // setInterv(setInterval(startTimer, 1000));

  useEffect(() => {
    startTimer();
    // return () => {
    //   clearInterval(interval.current);
    // };
  }, []);

  return (
    <>
      {timerClose ? (
        <>
          <MasterTune
            giveaway={giveaway}
            id={props.id}
            deleteData={props.deleteData}
            label={props.item1.label}
          />
        </>
      ) : (
        <>
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
          />
        </>
      )}
    </>
  );
};

export default MasterAlram;
