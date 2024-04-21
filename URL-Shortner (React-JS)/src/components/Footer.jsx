const Footer = () => {
  return (
    <footer className="bg-[#232027] flex flex-col lg:flex-row lg:justify-between items-center lg:items-start lg:px-36 gap-10 py-14">
      <img className="img-w" src="images/logo-footer.svg" alt=""></img>

      <div className="text-lg flex flex-col text-center lg:text-left gap-4">
        <h1 className="font-bold text-white">Features</h1>
        <div className="flex flex-col text-[#bebcbf]">
          <a className="hover:text-[#2bd1cf]" href="">
            Link Shortening
          </a>
          <a className="hover:text-[#2bd1cf]" href="">
            Branded Links
          </a>
          <a className="hover:text-[#2bd1cf]" href="">
            {" "}
            Analytics
          </a>
        </div>
      </div>

      <div className="text-lg flex flex-col text-center lg:text-left gap-4">
        <h1 className="font-bold text-white">Resources</h1>
        <div className="flex flex-col text-[#bebcbf]">
          <a className="hover:text-[#2bd1cf]" href="">
            Blog
          </a>
          <a className="hover:text-[#2bd1cf]" href="">
            Developers
          </a>
          <a className="hover:text-[#2bd1cf]" href="">
            Support
          </a>
        </div>
      </div>

      <div className="text-lg flex flex-col text-center lg:text-left gap-4">
        <h1 className="font-bold text-white"> Company</h1>
        <div className="flex flex-col text-[#bebcbf]">
          <a className="hover:text-[#2bd1cf]" href="">
            About
          </a>
          <a className="hover:text-[#2bd1cf]" href="">
            Our Team
          </a>
          <a className="hover:text-[#2bd1cf]" href="">
            Careers
          </a>
          <a className="hover:text-[#2bd1cf]" href="">
            Contact
          </a>
        </div>
      </div>

      <div className="flex space-x-10 text-3xl">
        <i className="fa-brands fa-facebook text-white hover:text-[#2bd1cf]"></i>
        <i className="fa-brands fa-twitter text-white hover:text-[#2bd1cf]"></i>
        <i className="fa-brands fa-pinterest text-white hover:text-[#2bd1cf]"></i>
        <i className="fa-brands fa-instagram text-white hover:text-[#2bd1cf]"></i>
      </div>
    </footer>
  );
};

export default Footer;
