import { Helmet } from "react-helmet-async"; 
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./WorksSection.css";
 
 
export default function WorksSection() {
 

  return (
    <>
      <Helmet>
        <title>Our Works | The Laurel Experience</title>
      </Helmet>

      <Navbar />

      <main className="works-page page">
        
        
      </main>
 

      <Footer />
    </>
  );
}
