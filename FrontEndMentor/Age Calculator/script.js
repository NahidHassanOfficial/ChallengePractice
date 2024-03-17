let circleButton = document.querySelector(".circle");
let currentDate = new Date();

let ageMonth = document.getElementById("result-month");
let ageDay = document.getElementById("result-day");
let ageYear = document.getElementById("result-year");

let invalidMonth = 0,
  invalidDay = 0,
  invalidYear = 0;
let invalidFlag = false;
function addZero(number) {
  return `${number < 10 ? "0" : ""}${number}`;
}

function isValidDate(year, month, day) {
  // Check if the year is in the past
  const currentYear = new Date().getFullYear();
  if (year > currentYear) {
    invalidYear = 1;
  }

  // Check if the month is valid
  if (month < 1 || month > 12) {
    invalidMonth = 1;
  }

  // Check if the day is valid for the given month
  if (day < 1 || day > new Date(year, month, 0).getDate()) {
    invalidDay = 1;
  }
  if (invalidDay || invalidMonth || invalidYear) return false;
  else return true;
}

function generateErrorMsg() {
  invalidFlag = true;
  let inputs = document.querySelectorAll("input");
  // for (let input of inputs) {
  //   input.classList.add("error");
  //}
  // let labels = document.querySelectorAll("label");
  // for (let label of labels) {
  //   label.classList.add("error-text");
  // }
  inputs.forEach((input) => {
    let inputId = input.id;
    let paragraph = document.createElement("p");

    if (inputId === "day" && invalidDay) {
      let parentElement = input.parentNode;
      parentElement.classList.add("error-text");
      input.classList.add("error");

      paragraph.textContent = "Must be a valid day";
      input.insertAdjacentElement("afterend", paragraph);
      invalidDay = 0;
    } else if (inputId === "month" && invalidMonth) {
      let parentElement = input.parentNode;
      parentElement.classList.add("error-text");
      input.classList.add("error");

      paragraph.textContent = "Must be a valid month";
      input.insertAdjacentElement("afterend", paragraph);
      input.classList.add("error");
      invalidMonth = 0;
    } else if (inputId === "year" && invalidYear) {
      let parentElement = input.parentNode;
      parentElement.classList.add("error-text");
      input.classList.add("error");

      paragraph.textContent = "Must be a past year";
      input.insertAdjacentElement("afterend", paragraph);
      input.classList.add("error");
      invalidYear = 0;
    }
  });
}

function removeErrorMsg() {
  invalidFlag = false;
  let inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    let parentElement = input.parentNode;
    parentElement.classList.remove("error-text");
    input.classList.remove("error");

    if (input.nextElementSibling && input.nextElementSibling.tagName === "P") {
      input.nextElementSibling.remove();
    }
  });
}

circleButton.addEventListener("click", function () {
  let age = calculateAge();

  if (age === false) {
    if (invalidFlag) {
      removeErrorMsg();
    }
    generateErrorMsg();
    invalidCounter = 1;
    ageYear.innerHTML = "--";
    ageMonth.innerHTML = "--";
    ageDay.innerHTML = "--";
  } else {
    if (invalidFlag) removeErrorMsg();
    ageYear.innerHTML = addZero(age[0]);
    ageMonth.innerHTML = addZero(age[1]);
    ageDay.innerHTML = addZero(age[2]);
  }
});

function calculateAge() {
  let birthYear = parseInt(document.getElementById("year").value);
  let birthMonth = parseInt(document.getElementById("month").value);
  let birthDay = parseInt(document.getElementById("day").value);

  //Check input validity
  let flag = isValidDate(birthYear, birthMonth, birthDay);
  if (!flag) return flag;

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
