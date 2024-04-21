import BoostLink from "./components/BoostLink";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Shortner from "./components/Shortner";
import Statistics from "./components/Statistics";
import "./main.css";

const App = () => {
  return (
    <div className="w-screen font-poppins">
      <Hero />
      <Shortner />
      <Statistics />
      <BoostLink />
      <Footer />
    </div>
  );
};

export default App;
