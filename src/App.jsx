import "./App.css";
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
    </>
  );
}

export default App;
