import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaChevronDown } from "react-icons/fa";
import "./ServicesSection.css";

const faqs = [
  {
    question: "Do you travel for events and sessions?",
    answer:
      "Yes. BojoStudios is available to travel for events, weddings, and portrait sessions. Travel logistics, accommodation, and scheduling are discussed during consultation to ensure smooth coverage.",
  },
  {
    question: "How do I book a session?",
    answer:
      "To secure a booking, a signed agreement and required deposit must be completed. Once confirmed, your date is locked in and preparations begin.",
  },
  {
    question: "What deposit is required?",
    answer:
      "A deposit between 50–80% is required depending on the nature and scale of the session. This helps secure your date and cover preparation costs.",
  },
  {
    question: "What is your delivery timeline?",
    answer:
      "Portrait sessions are delivered within 7–14 days. Events and birthdays take 2–3 weeks, while weddings are delivered within 3–4 weeks, allowing time for careful selection and editing.",
  },
  {
    question: "Are your rates negotiable?",
    answer:
      "Our pricing reflects our creative process, time, and quality of service. While rates are generally fixed, custom packages may be available depending on project scope.",
  },
  {
    question: "Do you offer consultations?",
    answer:
      "Yes. Paid consultations are available at ₦10,000 and are deducted from your final booking if you proceed. This helps align expectations and creative direction.",
  },
  {
    question: "Can my photos be kept private?",
    answer:
      "Absolutely. Private and confidential sessions are available for an additional fee. Your images will not be shared publicly without consent.",
  },
];

const ServicesSection = () => {
 
  return (
    <>
      <Helmet>
        <title>Our Services | The Laurel Experience</title>
        <meta
          name="description"
          content="Answers to common questions about BojoStudios photography services, booking process, and delivery timelines."
        />
      </Helmet>

      <Navbar />

      <main className="services-page page"> 
      <section className="services-section">
         
      </section>
      </main> 
      
      <Footer />
    </>
  );
};

export default ServicesSection;
