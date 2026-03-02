// src/pages/WorksSection/EventDetail.jsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import afamwedding from "../../assets/afam-wedding.jpeg";
import afamwedding2 from "../../assets/afam-wedding-2.jpeg";
import afamwedding3 from "../../assets/afam-wedding-3.jpeg";
import alaynnaprewedding from "../../assets/alaynna-prewedding.jpeg";
import damiprewedding from "../../assets/dami-prewedding.jpeg";
import firedamibirthday from "../../assets/firedami-birthday.jpeg";
import funmikebooklaunch from "../../assets/funmike-booklaunch.jpeg";
import laurabirthday from "../../assets/laura-birthday.jpeg";
import proposal from "../../assets/proposal.jpeg";

import "./EventDetails.css";

// same dataset as WorksSection (keep in sync)
const worksData = [
  // (copy same objects as in WorksSection.jsx)
  {
    slug: "joy-and-lanre",
    title: "Joy & Lanre",
    type: "Weddings",
    location: "Lagos, Nigeria",
    year: 2023,
    brief: "A joyful day with an intimate ceremony and candlelight reception.",
    images: [afamwedding3, afamwedding2, afamwedding, proposal]
  },
  {
    slug: "o-and-o",
    title: "O & O",
    type: "Weddings",
    location: "Abuja, Nigeria",
    year: 2022,
    brief: "Elegant black-tie celebration with a modern twist.",
    images: [alaynnaprewedding, afamwedding2, damiprewedding]
  },
  {
    slug: "tobi-and-afam",
    title: "Tobi & Afam",
    type: "Weddings",
    location: "Ibadan, Nigeria",
    year: 2021,
    brief: "Colorful celebration celebrating family and tradition.",
    images: [afamwedding, afamwedding3]
  },
  {
    slug: "alaynna-and-x",
    title: "Alaynna & X",
    type: "Weddings",
    location: "Lagos, Nigeria",
    year: 2024,
    brief: "A soft-palette pre-wedding and intimate dinner.",
    images: [alaynnaprewedding, damiprewedding]
  },
  {
    slug: "dami-and-x",
    title: "Dami & X",
    type: "Weddings",
    location: "Lagos, Nigeria",
    year: 2020,
    brief: "Sunset ceremony with golden light and warm tones.",
    images: [damiprewedding, firedamibirthday]
  },
  {
    slug: "victor-and-ronke",
    title: "Victor & Ronke",
    type: "Weddings",
    location: "Port Harcourt, Nigeria",
    year: 2019,
    brief: "Large family wedding with heartfelt speeches.",
    images: [afamwedding2, proposal]
  },

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
    images: [firedamibirthday, laurabirthday]
  },
  {
    slug: "dami-birthday",
    title: "Dami — Birthday",
    type: "Birthday",
    location: "Lagos, Nigeria",
    year: 2021,
    brief: "Surprise party for friends and family.",
    images: [firedamibirthday, afamwedding3]
  },

  {
    slug: "gwr-corporate",
    title: "GWR Corporate",
    type: "Corporate",
    location: "Lagos, Nigeria",
    year: 2024,
    brief: "A polished corporate launch with keynote speakers.",
    images: [funmikebooklaunch, afamwedding2]
  },
  {
    slug: "funmike-booklaunch",
    title: "FunMike — Book Launch",
    type: "Corporate",
    location: "Lagos, Nigeria",
    year: 2023,
    brief: "Book launch with a refined reception and press kit.",
    images: [funmikebooklaunch, laurabirthday]
  }
];

export default function EventDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const event = worksData.find((w) => w.slug === slug);

  // fallback if not found
  if (!event) {
    return (
      <>
        <Helmet>
          <title>Not found | The Laurel Experience</title>
        </Helmet>
        <Navbar />
        <main className="section">
          <div className="container center">
            <h2>Event Not Found</h2>
            <p>We couldn't find that event. <Link to="/works">Back to Works</Link></p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const images = event.images;

  const openLightbox = (i) => {
    setIndex(i);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prev = () => setIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <>
      <Helmet>
        <title>{event.title} | The Laurel Experience</title>
      </Helmet>

      <Navbar />

      <main>
        <section className="works-hero small-hero">
          <div className="works-overlay">
            <span className="bubble" />
            <span className="bubble" />
          </div>

          <div className="works-hero-content">
            <h1>{event.title}</h1>
            <div className="gold-line" />
            <p className="muted">{event.type} • {event.location} • {event.year}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="event-intro">
              <div className="event-meta">
                <h3>{event.title}</h3>
                <p className="muted">{event.location} — {event.year}</p>
                <p>{event.brief}</p>
              </div>

              <div className="event-gallery-grid">
                {images.map((src, i) => (
                  <div key={i} className="thumb" onClick={() => openLightbox(i)}>
                    <img src={src} alt={`${event.title} ${i+1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <motion.div
              className="lightbox-inner"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}><FaTimes /></button>

              <div className="lightbox-media">
                <button className="lb-nav left" onClick={prev}><FaChevronLeft /></button>
                <img src={images[index]} alt={`img ${index+1}`} />
                <button className="lb-nav right" onClick={next}><FaChevronRight /></button>
              </div>

              <div className="lightbox-info">
                <div>{index + 1} of {images.length}</div>
                <div>{event.title} — {event.location} • {event.year}</div>
              </div>

            </motion.div>
          </div>
        ) }

      </main>

      <Footer />
    </>
  );
}