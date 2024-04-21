const BoostLink = () => {
  return (
    <section className="bg-[#3a3053]  py-24 flex flex-col items-center gap-5 bg-[url('images/bg-boost-mobile.svg')] lg:bg-[url('images/bg-boost-desktop.svg')]  bg-cover bg-right lg:bg-center bg-no-repeat">
      <h1 className="text-3xl font-extrabold text-white">
        Boost your links today
      </h1>
      <a
        className="bg-[#2bd1cf] hover:bg-[#9ce2e2] text-white text-xl font-bold py-5 lg:py-3 px-10 rounded-full"
        href=""
      >
        Get Started
      </a>
    </section>
  );
};

export default BoostLink;
