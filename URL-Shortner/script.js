let inputUrl = document.querySelector("input");
let getUrlBtn = document.getElementById("shorten-btn");
let emptyError = document.getElementById("empty-url");
let shortenResultsDiv = document.getElementById("shorten-urls");

let userUrl = "";
let generatedUrl = "";

async function generateUrl(userUrl) {
  try {
    let response = await fetch(
      `https://tinyurl.com/api-create.php?url=${userUrl}`
    );
    generatedUrl = await response.text();

    shortenUrl = `<div
          class="w-full  bg-white rounded-md h-fit lg:h-14 p-5 text-sm flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
          <p class="text-gray-600">${userUrl}</p>
          <div class="w-full lg:w-fit flex justify-between lg:space-x-3">
            <p class="text-[#2bd1cf]">${generatedUrl}</p>
            <button
              class="bg-[#2bd1cf] hover:bg-[#9ce2e2] w-fit h-fit px-3 py-1 rounded-md text-xs text-white" id="copy-btn">Copy</button>
          </div>
        </div>`;

    shortenResultsDiv.insertAdjacentHTML("afterbegin", shortenUrl);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  getUrlBtn.addEventListener("click", function () {
    let url = inputUrl.value;
    let match = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/.test(
      url
    );
    if (!match) {
      emptyError.classList.remove("invisible");
      inputUrl.classList.add("border-red-400");
    } else {
      emptyError.classList.add("invisible");
      inputUrl.classList.remove("border-red-400");
      userUrl = url;
      generateUrl(userUrl);
    }
  });
});
