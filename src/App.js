import { useState } from "react";
import "./styles.css";

const storedValue = localStorage.getItem("date");
const now = new Date();

const MS_SECS = 1000;
const SECS_MIN = 60;
const MINS_HOUR = 60;
const HOURS_DAY = 24;
const DAYS_WEEK = 7;
const MS_HOUR = MS_SECS * SECS_MIN * MINS_HOUR;
const MS_DAY = HOURS_DAY * MS_HOUR;

const ms = (date) => date.getTime() - now.getTime();
const hours = (date) => ms(date) / MS_HOUR;
const days = (date) => ms(date) / MS_DAY;
const weeks = (date) => days(date) / DAYS_WEEK;
const months = (date) => days(date) / 30;
const bimester = (date) => days(date) / 60;
const trimester = (date) => days(date) / 90;
const semester = (date) => days(date) / 180;
const years = (date) => days(date) / 366;
const lustrum = (date) => days(date) / (366 * 5);
const sixYear = (date) => days(date) / (366 * 6);
const decade = (date) => days(date) / (366 * 10);
const century = (date) => days(date) / (366 * 100);
const millenium = (date) => days(date) / (366 * 1000);

export default function App() {
  const [target, setTarget] = useState(
    storedValue ? new Date(storedValue) : new Date("2022-07-24")
  );

  const updateDate = (event) => {
    const value = event.target.value;
    const date = new Date(value);

    localStorage.setItem("date", value);
    setTarget(date);
  };

  return (
    <div className="App">
      <h1>Cuanto hasta...</h1>
      <input
        type="date"
        value={target.toISOString().slice(0, 10)}
        onChange={updateDate}
      />
      {target && (
        <>
          <p>{hours(target).toFixed(0)} horiitas</p>
          <p>{days(target).toFixed(0)} diitas</p>
          <p>{weeks(target).toFixed(1)} semaniitas</p>
          <p>{months(target).toFixed(1)} meseciitos</p>
          <p>{bimester(target).toFixed(3)} bimestriillos</p>
          <p>{trimester(target).toFixed(4)} trimestretes</p>
          <p>{semester(target).toFixed(5)} semestrines</p>
          <p>{years(target).toFixed(6)} añicos</p>
          <p>{lustrum(target).toFixed(6)} lustros</p>
          <p>{sixYear(target).toFixed(6)} sexenicillos</p>
          <p>{decade(target).toFixed(8)} decadejas</p>
          <p>{century(target).toFixed(8)} siglillos</p>
          <p>{millenium(target).toFixed(10)} mileeeeniiitos</p>
        </>
      )}
    </div>
  );
}
