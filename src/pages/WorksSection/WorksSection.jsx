// src/pages/WorksSection/WorksSection.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaCameraRetro, FaRing, FaBirthdayCake, FaBriefcase } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import afamwedding from "../../assets/afam-wedding.jpeg";
import afamwedding2 from "../../assets/afam-wedding-2.jpeg";
import afamwedding3 from "../../assets/afam-wedding-3.jpeg";
import afamprewedding from "../../assets/afam-prewedding.jpeg";
import alaynnaprewedding from "../../assets/alaynna-prewedding.jpeg";
import damiprewedding from "../../assets/dami-prewedding.jpeg";
import firedamibirthday from "../../assets/firedami-birthday.jpeg";
import funmikebooklaunch from "../../assets/funmike-booklaunch.jpeg";
import laurabirthday from "../../assets/laura-birthday.jpeg";
import proposal from "../../assets/proposal.jpeg";
import GwrEvent from "../../assets/gwr-event.png";
import joshuabirthday from "../../assets/joshua-birthday.jpeg";
import ronkeprewedding from "../../assets/ronke-prewedding.jpeg";
import olaprewedding from "../../assets/ola-prewedding-1.jpeg";

import "./WorksSection.css";

// ----------------- dummy data -----------------
const imagesPool = [
  afamwedding,
  afamwedding2,
  afamwedding3,
  alaynnaprewedding,
  damiprewedding,
  firedamibirthday,
  funmikebooklaunch,
  laurabirthday,
  proposal,
  GwrEvent,
  joshuabirthday,
  ronkeprewedding,
  olaprewedding,
  afamprewedding,

];

const worksData = [
  // weddings
  {
    slug: "joy-and-lanre",
    title: "Joy & Lanre",
    type: "Weddings",
    location: "Lagos, Nigeria",
    year: 2025,
    brief: "A joyful day with an intimate ceremony and candlelight reception.",
    images: [olaprewedding, afamwedding2, afamwedding, proposal]
  },
  {
    slug: "o-and-o",
    title: "Omolola & Ooluwdami",
    type: "Weddings",
    location: "Abuja, Nigeria",
    year: 2025,
    brief: "Elegant black-tie celebration with a modern twist.",
    images: [damiprewedding, afamwedding2, damiprewedding]
  },
  {
    slug: "tobi-and-afam",
    title: "Tobi & Afam",
    type: "Weddings",
    location: "Lagos, Nigeria",
    year: 2025,
    brief: "Colorful celebration celebrating family and tradition.",
    images: [afamwedding, afamwedding3, afamprewedding, afamwedding2]
  },
  {
    slug: "alaynna-and-x",
    title: "Alaynna & Wisdom",
    type: "Weddings",
    location: "Lagos, Nigeria",
    year: 2024,
    brief: "A soft-palette pre-wedding and intimate dinner.",
    images: [alaynnaprewedding, damiprewedding]
  },
  {
    slug: "victor-and-ronke",
    title: "Victor & Ronke",
    type: "Weddings",
    location: "Port Harcourt, Nigeria",
    year: 2025,
    brief: "Large family wedding with heartfelt speeches.",
    images: [ronkeprewedding, proposal]
  },

  // birthdays
  {
    slug: "laura-birthday",
    title: "Laura — Birthday",
    type: "Birthday",
    location: "Lagos, Nigeria",
    year: 2023,
    brief: "An intimate birthday brunch with close family.",
    images: [laurabirthday, firedamibirthday]
  },
  {
    slug: "joshua-birthday",
    title: "Joshua — Birthday",
    type: "Birthday",
    location: "Abuja, Nigeria",
    year: 2022,
    brief: "Lively evening with themed decorations and music.",
    images: [joshuabirthday, laurabirthday]
  },
  {
    slug: "dami-birthday",
    title: "Oluwaforedami — Birthday",
    type: "Birthday",
    location: "Lagos, Nigeria",
    year: 2021,
    brief: "Surprise party for friends and family.",
    images: [firedamibirthday, afamwedding3]
  },

  // corporate
  {
    slug: "gwr-event",
    title: "GWR Event",
    type: "Corporate",
    location: "Lagos, Nigeria",
    year: 2024,
    brief: "A polished corporate launch with keynote speakers.",
    images: [GwrEvent, afamwedding2]
  },
  {
    slug: "funmike-booklaunch",
    title: "Funmike — Book Launch",
    type: "Corporate",
    location: "Lagos, Nigeria",
    year: 2023,
    brief: "Book launch with a refined reception and press kit.",
    images: [funmikebooklaunch, laurabirthday]
  }
];

// group by category for preview
const groupByType = (arr) =>
  arr.reduce((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc;
  }, {});

// ----------------- small Reveal wrapper -----------------
const Reveal = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

// ----------------- WorksSection -----------------
export default function WorksSection() {
  const grouped = groupByType(worksData);

  return (
    <>
      <Helmet>
        <title>Works | The Laurel Experience</title>
      </Helmet>

      <Navbar />

      <main>
        {/* HERO */}
        <section className="works-hero">
          <div className="works-overlay">
            {/* bubbles */}
            <span className="bubble" />
            <span className="bubble" />
            <span className="bubble" />
            <span className="bubble" />
          </div>

          <div className="works-hero-content">
            <h1>Our Work</h1>
            <div className="gold-line" />
            <p>
              A thoughtfully curated collection of events we’ve planned and coordinated.
            </p>
          </div>
        </section>

        {/* GALLERY PREVIEWS */}
        <section className="section">
          <div className="container">
            <Reveal>
              <h2 className="center mb-2">Gallery Sections Preview</h2>
              <p className="center muted">Click any card to view the full story & gallery</p>
            </Reveal>

            {/* categories */}
            <div className="gallery-groups">
              {Object.entries(grouped).map(([type, items]) => (
                <div className="group" key={type}>
                  <div className="group-header">
                    <h3>{type}</h3>
                    <div className="group-meta">
                      <span>{items.length} previews</span>
                    </div>
                  </div>

                  <div className="preview-grid">
                    {items.map((item) => (
                      <Reveal key={item.slug}>
                        <Link to={`/works/${item.slug}`} className="preview-card">
                          <div className="preview-media">
                            <img src={item.images[0] || imagesPool[0]} alt={item.title} />
                            <div className="preview-caption">
                              <div className="caption-left">
                                <strong>{item.title}</strong>
                                <span className="muted">{item.type}</span>
                              </div>
                              <div className="caption-right">
                                <span className="muted">{item.location}</span>
                                <span className="muted">{item.year}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}