import React from "react";
import "./App.css";

const birthdays = require("./birthdays.json");

const months = [
  "Dec",
  "Nov",
  "Oct",
  "Sep",
  "Aug",
  "Jul",
  "Jun",
  "May",
  "Apr",
  "Mar",
  "Feb",
  "Jan"
];

let days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}

let counts = [];

function App() {
  return (
    <div className="root">
      <h1>Birthday Data Graph</h1>
      <h2>Alex Fones</h2>
      <table>
        <tbody>
          {months.map((month, index) => {
            counts[index] = 0;
            return (
              <tr key={`month-${index}`}>
                <th>{month}</th>
                {days.map(day => {
                  let countsClass = "";
                  if (birthdays.includes(`${12 - index}/${day}`)) {
                    countsClass = "exists";
                    counts[index]++;
                  }
                  return (
                    <td key={`month-day-${day}`} className={countsClass}>
                      &nbsp;
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr className="days">
            <td>&nbsp;</td>
            {days.map(day => (
              <td key={`day-${day}`}>{day}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="monthCounts">
        {months.map((month, index) => (
          <div>
            <div className="title">{month}</div>
            <div className="count">{counts[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
