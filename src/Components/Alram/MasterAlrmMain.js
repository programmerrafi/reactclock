import React, { useState, useEffect } from "react";
import MasterAlram from "./MasterAlram";
import HeaderAlram from "./HeaderAlram";
import AddIcon from "@material-ui/icons/Add";
import { Scrollbars } from "react-custom-scrollbars-2";
import Footer from "./Footer";
import { option, optionM, optionAM, optionMin, optionHrs } from "./LoopCom";

// get Localstroage Data
const getLocalData = () => {
  const lists = localStorage.getItem("addalarm");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const MasterAlrmMain = () => {
  const [inputv, setInputv] = useState({
    hours: "",
    min: "",
    amPM: "",
    month: "",
    date: "",
    label: "",
  });
  // console.log(inputv);
  const [hrs, setHrs] = useState(getLocalData());
  const [headTog, setHeadTog] = useState(true);
  const [editTog, setEditTog] = useState(true);
  const [audiPlay, setAudiPlay] = useState(false);

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

  //click event
  const clickEvent = () => {
    const allInputData = {
      id: new Date().getTime().toString(),
      name: inputv,
    };
    setHrs([...hrs, allInputData]);

    setHeadTog(true);
    setAudiPlay(false);
  };

  // delete data
  const deleteData = (id) => {
    setHrs((prev) => {
      return prev.filter((item) => {
        return id !== item.id;
      });
    });
    setAudiPlay(true);
  };

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Edit Header show toggel
  const showRemoveBtn = () => {
    setEditTog(false);
  };
  // save Header show toggel
  const showSaveBtn = () => {
    setEditTog(true);
  };
  // addEvent
  const addEvent = () => {
    setHeadTog(false);
  };
  // cancel Header show toggel
  const cancelBtn = () => {
    setHeadTog(true);
  };

  const h3 = <h3 className="save">Save</h3>;
  const edit = <span onClick={showRemoveBtn}>Edit</span>;
  const save = <span onClick={showSaveBtn}>Save</span>;
  const cancel = <span onClick={cancelBtn}>Cancel</span>;
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // add Localstroage
  useEffect(() => {
    localStorage.setItem("addalarm", JSON.stringify(hrs));
  }, [hrs]);

  return (
    <>
      {headTog ? (
        <>
          {editTog ? (
            <HeaderAlram
              clickEvent={addEvent}
              Edit={edit}
              Alarm="Alarm"
              Icon={<AddIcon className="add" titleAccess="Add Alarm" />}
            />
          ) : (
            <HeaderAlram
              clickEvent={addEvent}
              Edit={save}
              Alarm="Alarm"
              Icon=""
            />
          )}
        </>
      ) : (
        <>
          <HeaderAlram
            clickEvent={clickEvent}
            Edit={cancel}
            Alarm="Add Alarm"
            Icon={h3}
          />
        </>
      )}

      <section
        className="section_center"
        style={headTog ? { display: "none" } : { display: "block" }}
      >
        <article className="gift_info">
          <div className="input_fild">
            <div className="select1">
              <select
                type="number"
                name="hours"
                value={inputv.hours}
                onChange={inputEvent}
              >
                {optionHrs}
              </select>
              <select
                type="number"
                name="min"
                value={inputv.min}
                onChange={inputEvent}
              >
                {optionMin}
              </select>

              <select
                type="text"
                name="amPM"
                value={inputv.amPM}
                onChange={inputEvent}
              >
                {optionAM}
              </select>
            </div>

            <div className="select2">
              <h4>* No need select for current day</h4>
              <select
                type="text"
                name="month"
                value={inputv.month}
                onChange={inputEvent}
              >
                {optionM}
              </select>
              <select
                type="number"
                name="date"
                value={inputv.date}
                onChange={inputEvent}
              >
                {option}
              </select>
            </div>

            <div className="alarm_mgs">
              <h3>Alarm Mgs</h3>
              <input
                type="text"
                placeholder="label"
                name="label"
                value={inputv.label}
                onChange={inputEvent}
              />
            </div>
          </div>
        </article>
      </section>

      <div
        className="timer_action"
        style={headTog ? { display: "block" } : { display: "none" }}
      >
        <Scrollbars>
          {hrs.map((item) => {
            // console.log(item.name);
            return (
              <MasterAlram
                key={item.id}
                item1={item.name}
                id={item.id}
                deleteData={deleteData}
                editTog={editTog}
                headTog={headTog}
                audiPlay={audiPlay}
              />
            );
          })}
        </Scrollbars>
      </div>

      {headTog ? <Footer /> : null}
    </>
  );
};

export default MasterAlrmMain;
