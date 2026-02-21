import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import afamwedding from "../../assets/afam-wedding-3.jpeg";
import alaynnaprewedding from "../../assets/alaynna-prewedding.jpeg";
import proposal from "../../assets/proposal.jpeg";

import "./AboutSection.css";

export default function AboutSection() {

  const Reveal = ({ children }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 70 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>About | The Laurel Experience</title>
      </Helmet>

      <Navbar />

      <main>

        {/* ================= HERO ================= */}
        <section className="about-hero">
          <div
            className="about-hero-bg"
            style={{ backgroundImage: `url(${afamwedding})` }}
          />
          <div className="about-overlay" />

          <div className="about-hero-content">
            <h1>About The Laurel Experience</h1>
            <div className="gold-line" />
            <p>
              Where passion meets precision — and moments become memories.
            </p>
          </div>
        </section>

        {/* ================= OUR STORY ================= */}
        <section className="section">
          <Reveal>
            <div className="container about-grid">
              <div className="about-text">
                <h2>Our Story</h2>
                <p>
                  The Laurel Experience was born from a deep passion for meaningful moments and beautifully executed celebrations.
                  We understand that events are more than just gatherings—they are milestones filled with emotion, intention, and love.
                  That understanding guides every decision we make.
                </p>
                <p>
                  We approach each event with care, professionalism, and heart—treating every detail as important and every client as unique.
                </p>
              </div>

              <div className="about-image luxury-hover">
                <img src={alaynnaprewedding} alt="Elegant event" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= MISSION ================= */}
        <section className="section alt parallax-about">
          <Reveal>
            <div className="container center">
              <h2>Our Mission</h2>
              <p className="mission-text">
                To create unforgettable, stress-free events that reflect our clients’ unique stories,
                vision, and budget — while delivering excellence and warmth at every stage of the process.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ================= VALUES ================= */}
        <section className="section">
          <Reveal>
            <div className="container">
              <h2 className="center">Our Values</h2>

              <div className="values-grid">

                <div className="value-card luxury-hover">
                  <h3>Excellence</h3>
                  <p>
                    We deliver every event with the highest standards, paying attention
                    to the details that transform moments into unforgettable experiences.
                  </p>
                </div>

                <div className="value-card luxury-hover">
                  <h3>Integrity</h3>
                  <p>
                    We operate with honesty, transparency, and accountability in every
                    relationship and decision we make.
                  </p>
                </div>

                <div className="value-card luxury-hover">
                  <h3>Client-Centered Service</h3>
                  <p>
                    Our clients are at the heart of everything we do. We listen deeply,
                    communicate clearly, and personalize every experience.
                  </p>
                </div>

              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= APPROACH ================= */}
        <section className="section alt">
          <Reveal>
            <div className="container about-grid reverse">

              <div className="about-image luxury-hover">
                <img src={proposal} alt="Luxury proposal setup" />
              </div>

              <div className="about-text">
                <h2>Our Approach</h2>
                <p>
                  We walk alongside you — listening, guiding, and executing — so you can
                  fully enjoy your special moment while we handle the details behind the scenes.
                </p>
                <p>
                  From the first consultation to the final farewell, we ensure your
                  experience feels calm, seamless, and beautifully intentional.
                </p>
              </div>

            </div>
          </Reveal>
        </section>

        {/* ================= CTA ================= */}
        <section className="section about-cta">
          <Reveal>
            <div className="container center">
              <h2>Let’s create something extraordinary together</h2>
              <a href="/booking" className="btn-primary shimmer large">
                Book a Consultation
              </a>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </>
  );
}