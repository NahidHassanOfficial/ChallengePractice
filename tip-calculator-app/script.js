let bill = document.getElementById("bill");
let people = document.getElementById("people");
let customTip = document.getElementById("custom-tip");
let peopleInvalid = document.getElementById("people-invalid");
let tipsContainer = document.querySelector(".tips");
let tipsDiv = tipsContainer.querySelectorAll("div");
let resultTipPerson = document.getElementById("tip-person");
let resultBillPerson = document.getElementById("bill-person");
let resetbtn = document.getElementById("reset");

let billAmount = 0;
let tipsAmount = 0;
let numOfPerson = 0;

let billInserted = false;
let tipsGiven = false;
let personSelected = false;

let selectedIndex = -1;
let isTipsSelected = false;
let customTipSelected = false;

function checkAllConditions() {
  if (billInserted && tipsGiven && personSelected) {
    let tips = tipsAmount / 100;
    let tipPerPerson = ((billAmount * tips) / numOfPerson).toFixed(2);
    let billPerPerson = (
      (billAmount + billAmount * tips) /
      numOfPerson
    ).toFixed(2);
    resultTipPerson.innerHTML = "$" + tipPerPerson;
    resultBillPerson.innerHTML = "$" + billPerPerson;
  } else {
    resultTipPerson.innerHTML = "$0.00";
    resultBillPerson.innerHTML = "$0.00";
    resetbtn.classList.replace("bg-[#0d686d]", "bg-[#26c2ad]");
  }
}

function removeSelection(tips) {
  tips.classList.toggle("bg-[#26c2ad]");
  tipsAmount = 0;
  isTipsSelected = false;
}

function markSelected(tips) {
  tips.classList.toggle("bg-[#26c2ad]");
  tipsAmount = parseInt(tips.textContent.replace(/\D/g, ""));
  isTipsSelected = true;
  tipsGiven = true;
  if (customTipSelected) {
    customTipSelected = false;
    customTip.value = "";
  }
  checkAllConditions();
}

function checkForTips() {
  tipsDiv.forEach(function (tips, currentIndex) {
    tips.addEventListener("click", function () {
      let isSelected = tips.classList.contains("bg-[#26c2ad]");

      if (isSelected) {
        removeSelection(tips);
      } else {
        if (isTipsSelected && currentIndex != selectedIndex) {
          tipsDiv[selectedIndex].classList.toggle("bg-[#26c2ad]");
        }
        markSelected(tips);
        selectedIndex = currentIndex;
      }
    });
  });

  customTip.addEventListener("change", function () {
    if (customTip.value != "" && customTip.value > 0) {
      customTipSelected = true;
      selectedIndex = -1;
      tipsDiv.forEach(function (tips) {
        if (tips.classList.contains("bg-[#26c2ad]")) removeSelection(tips);
      });
      tipsAmount = parseInt(customTip.value);
      tipsGiven = true;
    }
    checkAllConditions();
  });
}

window.addEventListener("load", () => {
  bill.addEventListener("change", function () {
    if (bill.value < 1) {
      bill.classList.add("border-red-500");
      billInserted = false;
    } else {
      bill.classList.remove("border-red-500");
      billInserted = true;
      billAmount = parseInt(bill.value);
      checkAllConditions();
    }
  });

  checkForTips();

  people.addEventListener("change", function () {
    if (people.value < 1) {
      peopleInvalid.classList.remove("hidden");
      people.classList.add("border-red-500");
      personSelected = false;
      numOfPerson = 0;
    } else {
      peopleInvalid.classList.add("hidden");
      people.classList.remove("border-red-500");
      personSelected = true;
      numOfPerson = parseInt(people.value);
      checkAllConditions();
    }
  });

  resetbtn.addEventListener("click", function () {
    location.reload();
  });
});
