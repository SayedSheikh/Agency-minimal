import "./App.css";
import BoostYourAgencies from "./Home/Boost/BoostYourAgencies";
import CustomerComments from "./Home/CustomerComments/CustomerComments";
import FeatureSection from "./Home/Features/FeatureSection";
import Hero from "./Home/Hero/Hero";
import LeadingCompanies from "./Home/LeadingCompanies.jsx/LeadingCompanies";
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
        <BoostYourAgencies />
        <LeadingCompanies />
        <CustomerComments />
      </main>
    </>
  );
}

export default App;
