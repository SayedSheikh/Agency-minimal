import "./App.css";
import BoostYourAgencies from "./Home/Boost/BoostYourAgencies";
import CustomerComments from "./Home/CustomerComments/CustomerComments";
import FeatureSection from "./Home/Features/FeatureSection";
import Footer from "./Home/Footer/Footer";
import Hero from "./Home/Hero/Hero";
import HireDevelopers from "./Home/HireDevelopers/HireDevelopers";
import LeadingCompanies from "./Home/LeadingCompanies.jsx/LeadingCompanies";
import Navbar from "./Home/Navbar/Navbar";
import QualityFeatures from "./Home/QualityFeatures/QualityFeatures";
import Support from "./Home/Support/Support";
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
        <Support />
        <QualityFeatures />
        <HireDevelopers />
        <Footer />
      </main>
    </>
  );
}

export default App;
