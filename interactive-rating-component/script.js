let feedback = document.querySelector(".feedback");
let ratedSuccess = document.querySelector(".rated-successful");
let submitBtn = document.querySelector("button");

optionSelected = false;

submitBtn.addEventListener("click", () => {
  optionSelected = isRated();
  feedback.remove();
});

function isRated() {}

let ratingOptions = document.querySelectorAll("[id='rating']");
ratingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    //ratingOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.remove("hover:bg-gray-600");
    option.classList.toggle("bg-orange-400");
    option.classList.toggle("text-white");
  });
});
