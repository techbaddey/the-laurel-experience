import { Helmet } from "react-helmet-async"; 
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./WorksSection.css";
import afamwedding from "../../assets/afam-wedding.jpeg";
import afamwedding2 from "../../assets/afam-wedding-2.jpeg";
import afamwedding3 from "../../assets/afam-wedding-3.jpeg";
import alaynnaprewedding from "../../assets/alaynna-prewedding.jpeg";
import damiprewedding from "../../assets/dami-prewedding.jpeg";
import firedamibirthday from "../../assets/firedami-birthday.jpeg";
import funmikebooklaunch from "../../assets/funmike-booklaunch.jpeg";
import laurabirthday from "../../assets/laura-birthday.jpeg";
import proposal from "../../assets/proposal.jpeg";
 
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
