import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import ContactTitle from "./components/TitleContact/ContactTitle";
import Footer from "./components/Footer/Footer";
import Heading from "./components/ServiceHeading/Heading";
import ZohoForm from "./components/ZohoForm/ZohoForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Heading />
        <Services />
        <Title title="About Us" />
        <About />
        <Gallery />
        <ContactTitle title="Contact Us" subtitle="Book Your Henna Art Today" />
        <Contact />

        <Footer />
      </div>
    </div>
  );
};

export default App;
