let monthName=document.getElementById('month-name');
let dayName=document.getElementById('day');
let dateName=document.getElementById('date');
let yearName=document.getElementById('year');

let date=new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let currentMonth=new Date().getMonth();
let currentDay=new Date().getDay();
let  currentYear=new Date().getFullYear();
console.log(currentYear);
currentMonth=months[currentMonth];
currentDay=days[currentDay]
monthName.innerText=currentMonth;
dayName.innerText=currentDay;
yearName.innerText=currentYear



