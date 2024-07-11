
let now = new Date();
let day = now.getDay();
const dayNames = ["SÖNDAG", "MÅNDAG", "TISDAG", "ONSDAG", "TORSDAG", "FREDAG", "LÖRDAG"];

let date = now.getDate();

const month = now.getMonth();
const monthNames = ["JANUARI", "FEBRUARI", "MARS", "APRIL", "MAJ", "JUNI", "JULI", "AUGUSTI", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DECEMBER"];

const fullYear = now.getFullYear();

document.getElementById("date").innerHTML = dayNames[day] + " " + date + " " + monthNames[month] + " " + fullYear;