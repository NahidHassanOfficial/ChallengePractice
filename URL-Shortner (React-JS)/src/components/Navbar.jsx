const Head = () => {
  return (
    <div>
      <nav className="px-5 ">
        <nav className="desktop hidden lg:flex justify-between px-36">
          <div className="flex space-x-10">
            <img src="images/logo.svg" alt=""></img>
            <div className="text-gray-400 text-md font-medium flex space-x-5">
              <a className="hover:text-gray-900" href="">
                Features
              </a>
              <a className="hover:text-gray-900" href="">
                Pricing
              </a>
              <a className="hover:text-gray-900" href="">
                Resources
              </a>
            </div>
          </div>
          <div>
            <a
              className=" text-gray-400 hover:text-[#2bd1cf] text-md font-medium py-2 px-5 rounded-full"
              href=""
            >
              Login
            </a>
            <a
              className="bg-[#2bd1cf] hover:bg-[#9ce2e2] text-white text-md font-medium py-2 px-5 rounded-full"
              href=""
            >
              Sign Up
            </a>
          </div>
        </nav>
        <nav className="mobile lg:hidden flex justify-between">
          <img src="images/logo.svg" alt=""></img>
          <img src="images/icon-hamburger.svg" alt="" className="ham"></img>
        </nav>
      </nav>
    </div>
  );
};

export default Head;
