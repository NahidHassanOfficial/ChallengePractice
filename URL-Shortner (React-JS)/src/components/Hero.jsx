import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="hero h-full pt-10 pb-40">
      <Navbar />
      <div className="lg:flex lg:flex-row-reverse justify-center items-center my-10 lg:my-20 lg:ml-36">
        <div className="pl-5 overflow-hidden lg:overflow-visible">
          <img
            className="my-20 ml-24 scale-150 lg:scale-150"
            src="images/illustration-working.svg"
            alt=""
          ></img>
        </div>
        <div className="px-5">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5">
            <h1 className="text-4xl lg:text-8xl font-extrabold text-[#312e39]">
              More than just shorter links
            </h1>
            <p className="text-[#96949e] text-xl lg:text-2xl lg:mr-16">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>

            <a
              className="bg-[#2bd1cf] hover:bg-[#9ce2e2] text-white text-xl font-bold py-5 lg:py-4 px-10 rounded-full"
              href=""
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
