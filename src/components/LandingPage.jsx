import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import ContactSignup from "./ContactSignup";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Hero id="hero" />
      <Features id="features" />
      <Testimonials id="testimonials" />
      <HowItWorks id="how-it-works" />
      <ContactSignup id="contact" />
    </div>
  );
}
