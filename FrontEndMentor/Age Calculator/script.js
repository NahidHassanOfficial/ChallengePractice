let circleButton = document.querySelector(".circle");
let currentDate = new Date();

let ageMonth = document.getElementById("result-month");
let ageDay = document.getElementById("result-day");
let ageYear = document.getElementById("result-year");

let invalidMonth = 0,
  invalidDay = 0,
  invalidYear = 0;
function addZero(number) {
  return `${number < 10 ? "0" : ""}${number}`;
}

circleButton.addEventListener("click", function () {
  let age = calculateAge();

  ageYear.innerHTML = addZero(age[0]);
  ageMonth.innerHTML = addZero(age[1]);
  ageDay.innerHTML = addZero(age[2]);
});

function calculateAge() {
  let birthMonth = parseInt(document.getElementById("month").value);
  let birthDay = parseInt(document.getElementById("day").value);
  let birthYear = parseInt(document.getElementById("year").value);

  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDay > currentDay) {
    currentDay = currentDay + month[birthMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (birthMonth > currentMonth) {
    currentYear = currentYear - 1;
    currentMonth = currentMonth + 12;
  }

  let calculated_date = currentDay - birthDay;
  let calculated_month = currentMonth - birthMonth;
  let calculated_year = currentYear - birthYear;
  return [calculated_year, calculated_month, calculated_date];
}
