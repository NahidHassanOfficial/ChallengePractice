import { useRef, useState } from "react";
import ShortenResult from "./ShortenResult";

const Shortner = () => {
  let inputUrl = useRef();
  let emptyUrl = useRef();

  let [stack, setStack] = useState([]);

  function shortenIt() {
    let userUrl = inputUrl.current.value;
    let match = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/.test(
      userUrl
    );

    if (!match) {
      emptyUrl.current.classList.remove("invisible");
      inputUrl.current.classList.add("border-red-400");
    } else {
      emptyUrl.current.classList.add("invisible");
      inputUrl.current.classList.remove("border-red-400");
      generateUrl(userUrl);
    }
  }

  async function generateUrl(userUrl) {
    try {
      let response = await fetch(
        `https://tinyurl.com/api-create.php?url=${userUrl}`
      );
      let generatedUrl = await response.text();

      setStack((prevStack) => [
        { userUrl: userUrl, generatedUrl: generatedUrl },
        ...prevStack,
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <section className="shortner-option bg-[#f0f1f6] ">
      <div className=" bg-[#3a3053] rounded-xl mx-5 lg:mx-36 overflow-hidden -translate-y-[90px]">
        <div className="bg-[url('images/bg-shorten-mobile.svg')] lg:bg-[url('images/bg-shorten-desktop.svg')] bg-contain lg:bg-cover  bg-no-repeat bg-right p-5 lg:p-16 flex flex-col lg:flex-row gap-6 ">
          <div className="w-full">
            <input
              ref={inputUrl}
              className="w-full h-14 p-5 rounded-md outline-none border-2 focus:border-[#2bd1cf] relative"
              type="text"
              placeholder="Shorten a link here..."
            ></input>
            <p className="text-red-400 absolute invisible" ref={emptyUrl}>
              Please add a link
            </p>
          </div>
          <button
            onClick={shortenIt}
            className="w-full lg:w-3/12 bg-[#2bd1cf] hover:bg-[#9ce2e2] rounded-md h-14 p-5 text-white text-2xl font-bold flex items-center justify-center"
            id="shorten-btn"
          >
            Shorten It!
          </button>
        </div>
      </div>
      <div
        className="mt-5 mx-5 lg:mx-36 flex flex-col gap-3 -translate-y-[90px]"
        id="shorten-urls"
      >
        {/* urls here */}
        {stack.map((url, idx) => (
          <ShortenResult
            key={idx}
            data={{ userUrl: url.userUrl, generatedUrl: url.generatedUrl }}
          />
        ))}
      </div>
    </section>
  );
};

export default Shortner;
