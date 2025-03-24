import React from "react";
import Nav from "../components/Navbar"
import AboutSection from "../components/AboutSection";
import DomainsSection from "../components/DomainsSection";
import TeamSection from "../components/TeamSection";
// import Footer from "./components/Footer";
import "./styles/AboutUs.css";

function AboutUsPage() {
  return (
    <>
    <div className="container">
      <AboutSection />
      <DomainsSection />
      <TeamSection />
    </div>
    {/* <Footer /> */}
    </>
    
  );
}

export default AboutUsPage;
