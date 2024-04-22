import Hero from "./../components/Hero";
import Shortner from "./../components/Shortner";
import Statistics from "./../components/Statistics";
import BoostLink from "./../components/BoostLink";
import Footer from "./../components/Footer";

const App = () => {
  return (
    <div className="w-screen">
      <Hero />
      <Shortner />
      <Statistics />
      <BoostLink />
      <Footer />
    </div>
  );
};

export default App;
