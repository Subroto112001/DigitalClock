const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Month = document.querySelector(".col2__span");
const DatefromHtml = document.querySelector(".col1__span");
const col1__spanday = document.querySelector(".col1__spanday");
const col1__spanYear = document.querySelector(".col1__spanYear");
const Seconds = document.querySelector(".Seconds");
const Minute = document.querySelector(".Minute");
const Hours = document.querySelector(".Hours");

setInterval(() => {
    
const d = new Date();
// Month
let month = months[d.getMonth()];
// date
let date = d.getDate();
// day
let day = days[d.getDay()];
// year
let year = d.getFullYear();
// Seconds
let Sec = d.getSeconds();
let Min = d.getMinutes();
let hour = d.getHours();

Seconds.innerHTML = `${Sec}`;
Minute.innerHTML = `${Min}`;
Hours.innerHTML = `${hour - 12}`;

Month.innerHTML = `${month}`;
DatefromHtml.innerHTML = `${date}`;
col1__spanday.innerHTML = `${day}`;

col1__spanYear.innerHTML = `${year}`;
},1000)


