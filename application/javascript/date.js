
let now = new Date();
let day = now.getDay();
const dayNames = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

let date = now.getDate();

const month = now.getMonth();
const monthNames = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

const fullYear = now.getFullYear();

document.getElementById("date").innerHTML = dayNames[day] + " " + date + " " + monthNames[month] + " " + fullYear;