import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import afamwedding from "../../assets/afam-wedding.jpeg";
import afamwedding2 from "../../assets/afam-wedding-2.jpeg";
import afamwedding3 from "../../assets/afam-wedding-3.jpeg";
import alaynnaprewedding from "../../assets/alaynna-prewedding.jpeg";
import damiprewedding from "../../assets/dami-prewedding.jpeg";
import firedamibirthday from "../../assets/firedami-birthday.jpeg";
import funmikebooklaunch from "../../assets/funmike-booklaunch.jpeg";
import laurabirthday from "../../assets/laura-birthday.jpeg";
import proposal from "../../assets/proposal.jpeg";

import "./HomeSection.css";


  const Reveal = ({ children }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  };

export default function HomeSection() {

  /* ================= HERO SLIDER ================= */

  const heroImages = [
    afamwedding,
    afamwedding2,
    afamwedding3,
    alaynnaprewedding,
    damiprewedding,
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ================= GALLERY ROTATION ================= */

  const galleryImages = [
    afamwedding,
    afamwedding2,
    afamwedding3,
    alaynnaprewedding,
    damiprewedding,
    firedamibirthday,
    funmikebooklaunch,
    laurabirthday,
    proposal,
  ];

  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) =>
        (prev + 5) % galleryImages.length
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const visibleGallery = galleryImages.slice(
    galleryIndex,
    galleryIndex + 5
  );

  /* ================= REVEAL ================= */


  return (
    <>
      <Helmet>
        <title>The Laurel Experience | Luxury Event Planning</title>
      </Helmet>

      <Navbar />

      <main>

        {/* ================= HERO ================= */}
        {/* ================= HERO ================= */}
<section className="home-hero">
  {heroImages.map((img, index) => (
    <div
      key={index}
      className={`hero-bg ${
        index === heroIndex ? "active" : ""
      }`}
      style={{ backgroundImage: `url(${img})` }}
    />
  ))}

  <div className="hero-overlay" />
  <div className="hero-gradient-overlay" />

  <motion.div
    className="hero-content"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
  >
    <h1 className="hero-title">The Laurel Experience</h1>

    <div className="gold-line" />

    <h2 className="hero-subtitle">
      Creating unforgettable memories inspired by you, crafted by us 🦋
    </h2>

    <p className="hero-description">
      At The Laurel Experience, we believe every event should feel
      personal, intentional, and beautifully effortless.
      We curate experiences that leave lasting impressions.
    </p>

    <div className="hero-cta">
      <a href="/booking" className="btn-primary shimmer">
        Book a Consultation
      </a>
      <a href="/works" className="btn-outline">
        View Our Work
      </a>
    </div>
  </motion.div>
</section>

        {/* ================= WHAT WE DO ================= */}
        <section className="section parallax-section">
          <Reveal>
            <div className="container center">
              <h2>Event Planning Made Seamless</h2>
              <p className="center">
                At The Laurel Experience, our favourite thing to do is to make love happen ❤️
                We specialize in turning ideas into meaningful experiences...
              </p>
            </div>
          </Reveal>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="section alt">
          <Reveal>
            <div className="container">
              <h2 className="center">Our Core Services</h2>

              <div className="services-grid">

                <div className="service-card luxury-hover">
                  <h3>Event Consultation</h3>
                  <p>
                    A strategic and creative session designed to clarify your
                    vision, refine your ideas, and map out a confident plan.
                  </p>
                </div>

                <div className="service-card luxury-hover">
                  <h3>Event Planning</h3>
                  <p>
                    Full-service planning from concept development to vendor
                    management and flawless design execution.
                  </p>
                </div>

                <div className="service-card luxury-hover">
                  <h3>Event Coordination</h3>
                  <p>
                    Seamless oversight on your event day so every detail unfolds
                    exactly as planned.
                  </p>
                </div>

              </div>

              <p className="services-tagline center">
                From idea to execution, we’ve got you covered.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ================= EVENTS ================= */}
        <section className="section">
          <Reveal>
            <div className="container">
              <h2 className="center">Events We Specialize In</h2>

              <div className="events-grid">

                <div className="event-card luxury-hover">
                  <img src={afamwedding} alt="Wedding" />
                  <h3>Weddings</h3>
                  <p>Elegant, emotionally rich celebrations tailored to your love story.</p>
                </div>

                <div className="event-card luxury-hover">
                  <img src={laurabirthday} alt="Birthday" />
                  <h3>Birthday Celebrations</h3>
                  <p>Memorable milestones styled with intention and flair.</p>
                </div>

                <div className="event-card luxury-hover">
                  <img src={funmikebooklaunch} alt="Book Launch" />
                  <h3>Book Launches</h3>
                  <p>Refined literary events that captivate and impress.</p>
                </div>

                <div className="event-card luxury-hover">
                  <img src={proposal} alt="Proposal" />
                  <h3>Proposals</h3>
                  <p>Intimate, magical moments crafted to perfection.</p>
                </div>

              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="section alt">
          <div className="container">
            <h2 className="center">A Glimpse of Our Work</h2>

            <motion.div
              key={galleryIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="gallery-grid"
            >
              {visibleGallery.map((img, index) => (
                <img key={index} src={img} alt="Event showcase" />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="section cta-section">
          <Reveal>
            <div className="container center">
              <h2>Let’s create something unforgettable together ✨</h2>
              <a href="/booking" className="btn-primary shimmer large">
                Start Your Event Journey
              </a>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </>
  );
}