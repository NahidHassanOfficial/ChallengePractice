import { NavLink } from "react-router-dom";
const Head = () => {
  return (
    <div>
      <nav className="px-5 ">
        <nav className="desktop hidden lg:flex justify-between px-36">
          <div className="flex space-x-10">
            <NavLink to="/">
              <img src="images/logo.svg" alt=""></img>
            </NavLink>

            <div className="text-gray-400 text-md font-medium flex space-x-5">
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? "text-[#2bd1cf]" : " hover:text-gray-900"
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "text-[#2bd1cf]" : "hover:text-gray-900"
                }
              >
                Pricing
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  isActive ? "text-[#2bd1cf]" : "hover:text-gray-900"
                }
              >
                Resources
              </NavLink>
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
