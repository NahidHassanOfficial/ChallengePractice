let feedback = document.querySelector(".feedback");
let ratedSuccess = document.querySelector(".rated-successful");
let submitBtn = document.querySelector("button");
let ratedStar = 0;
let optionSelected = false;
let successfulMsg;

function isRated() {
  successfulMsg = `<div class="flex justify-center align-items-center ">
          <img src="images/illustration-thank-you.svg" alt="thank you">
        </div>
        <div class="mt-8 flex flex-col  justify-center items-center text-center">
          <div class="h-8 px-5 bg-gray-700 rounded-3xl text-sm flex items-center text-orange-400"> You selected ${
            ratedStar + 1
          }
            out
            of 5
          </div>
          <h1 class="mt-5 text-white text-2xl font-extrabold">Thank you!</h1>

          <p class="mt-2 text-gray-500">We appreciate you taking the time to give a rating. If you ever need more
            support,
            don’t hesitate to get in touch!</p>
        </div>`;
}
submitBtn.addEventListener("click", () => {
  if (optionSelected) {
    feedback.remove();
    isRated();
    ratedSuccess.innerHTML = successfulMsg;
  } else {
    console.log("Rate First");
  }
});

let ratingOptions = document.querySelectorAll("[id='rating']");
ratingOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    const isSelected = option.classList.contains("bg-orange-500");

    if (isSelected) {
      // If the clicked option is already selected, remove styles from all options
      ratingOptions.forEach((opt) => {
        optionSelected = false;
        opt.classList.add("hover:bg-gray-600");
        opt.classList.remove("bg-orange-500");
        opt.classList.remove("text-white");
      });
      if (index != ratedStar) {
        optionSelected = true;
        // If the clicked option is selected but different then apply styles up to the clicked index
        for (let i = 0; i <= index; i++) {
          ratingOptions[i].classList.remove("hover:bg-gray-600");
          ratingOptions[i].classList.add("bg-orange-500");
          ratingOptions[i].classList.add("text-white");
        }
      }
      ratedStar = index;
    } else {
      optionSelected = true;
      // If the clicked option is not selected, apply styles up to the clicked index
      for (let i = 0; i <= index; i++) {
        ratingOptions[i].classList.remove("hover:bg-gray-600");
        ratingOptions[i].classList.add("bg-orange-500");
        ratingOptions[i].classList.add("text-white");
      }
      ratedStar = index;
    }
  });
});
