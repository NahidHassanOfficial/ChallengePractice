const Statistics = () => {
  return (
    <section className="bg-[#f0f1f6] px-5 py-20 flex flex-col justify-center items-center text-center lg:text-left gap-32">
      <div className="text-center lg:flex flex-col items-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#312e39] mb-5">
          Advanced Statistics
        </h1>
        <p className="lg:text-xl lg:w-2/3 text-gray-500">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-32 lg:gap-10 lg:px-36 relative z-10">
        <div className="bg-white rounded-md pt-20 pb-10 lg:px-10 lg:h-fit relative">
          <div
            className="bg-[#3a3053] rounded-full w-20 h-20 flex justify-center items-center absolute top-0 left-1/2 lg:left-[20%] transform -translate-x-1/2 -translate-y-1/2
        "
          >
            {" "}
            <img src="images/icon-brand-recognition.svg" alt=""></img>
          </div>

          <h1 className="text-2xl font-bold text-[#312e39] mb-5">
            Brand Recognition
          </h1>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="bg-white rounded-md pt-20 pb-10 lg:px-10 lg:h-fit relative lg:mt-12">
          <div
            className="bg-[#3a3053] rounded-full w-20 h-20 flex justify-center items-center absolute top-0 left-1/2 lg:left-[20%]  transform -translate-x-1/2 -translate-y-1/2
                  "
          >
            {" "}
            <img src="images/icon-detailed-records.svg" alt=""></img>
          </div>

          <h1 className="text-2xl font-bold text-[#312e39] mb-5">
            Detailed Records
          </h1>
          <p>
            {" "}
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="bg-white rounded-md pt-20 pb-10 lg:px-10 lg:h-fit relative lg:mt-24">
          <div
            className="bg-[#3a3053] rounded-full w-20 h-20 flex justify-center items-center absolute top-0 left-1/2 lg:left-[20%]  transform -translate-x-1/2 -translate-y-1/2
                  "
          >
            {" "}
            <img src="images/icon-fully-customizable.svg" alt=""></img>
          </div>
          <h1 className="text-2xl font-bold text-[#312e39] mb-5">
            Fully Customizable
          </h1>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>

      <div className="joining-line bg-[#2bd1cf] h-[90vh] w-2 lg:h-2 lg:w-1/2 translate-y-28 absolute z-0"></div>
      {/* <div className="joining-line bg-[#2bd1cf]  absolute left-[49%] z-0"></div> */}
    </section>
  );
};

export default Statistics;
