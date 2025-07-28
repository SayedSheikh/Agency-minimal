import "./App.css";
import FeatureSection from "./Home/Features/FeatureSection";
import Hero from "./Home/Hero/Hero";
import Navbar from "./Home/Navbar/Navbar";
import Container from "./Utilities/Container";

function App() {
  return (
    <>
      <header className=" bg-[#F6F8FB]">
        <Navbar />
        <Hero></Hero>
      </header>
      <main>
        <FeatureSection />
      </main>
    </>
  );
}

export default App;
