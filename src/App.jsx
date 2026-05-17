import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProblemSection from "./components/ProblemSection";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import LocationSection from "./components/LocationSection";
import WhyUsSection from "./components/WhyUsSection";
import { BrowserRouter, Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <WhyUsSection />
        <LocationSection />
        <ContactSection />
        <Footer />

        <Link to="https://wa.me/919745039313" target="_blank" rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform hover:shadow-green-500/50"
          style={{ boxShadow: "0 4px 20px rgba(34,197,94,0.5)" }}
          aria-label="WhatsApp">
          <IoLogoWhatsapp />
        </Link>
      </div>
    </BrowserRouter>
  );
}
