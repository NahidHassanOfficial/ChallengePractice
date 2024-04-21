import PropTypes from "prop-types";
import { useRef } from "react";

const ShortenResult = ({ data }) => {
  const { userUrl, generatedUrl } = data;
  let copyBtns = useRef();
  function copyUrl() {
    navigator.clipboard.writeText(generatedUrl);
    copyBtns.current.classList.add("bg-[#3a3053]");
    copyBtns.current.innerText = "copied!";
  }

  return (
    <div className=" w-full  bg-white rounded-md h-fit lg:h-14 p-5 text-sm flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
      <p className="text-gray-600 break-all">{userUrl}</p>
      <div className="w-full lg:w-fit flex justify-between lg:space-x-3">
        <p className="text-[#2bd1cf]">{generatedUrl}</p>
        <button
          className="bg-[#2bd1cf] hover:bg-[#9ce2e2] w-fit h-fit px-3 py-1 rounded-md text-xs text-white"
          onClick={copyUrl}
          ref={copyBtns}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

ShortenResult.propTypes = {
  data: PropTypes.shape({
    userUrl: PropTypes.string.isRequired,
    generatedUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShortenResult;
