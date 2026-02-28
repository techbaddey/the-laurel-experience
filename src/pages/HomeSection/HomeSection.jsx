import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLightbulb, FaClipboardList, FaUserTie } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import afamwedding from "../../assets/afam-wedding.jpeg";
import afamwedding3 from "../../assets/afam-wedding-3.jpeg";
import damiprewedding from "../../assets/dami-prewedding.jpeg";
import funmikebooklaunch from "../../assets/funmike-booklaunch.jpeg";
import joshuabirthday from "../../assets/joshua-birthday.jpeg";
import laurabirthday2 from "../../assets/laura-birthday-2.jpeg";
import laurabirthday from "../../assets/laura-birthday.jpeg";
import proposal from "../../assets/proposal.jpeg";
import bridalshower from "../../assets/proposal.jpeg";
import corporateevent from "../../assets/proposal.jpeg";

import "./HomeSection.css";
import { sub } from "framer-motion/client";

/* ================= REVEAL ================= */
const Reveal = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default function HomeSection() {
  /* ================= HERO SLIDER ================= */

  const heroImages = [
    afamwedding3,
    funmikebooklaunch,
    joshuabirthday,
    laurabirthday2,
    damiprewedding,
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* ================= EVENTS CAROUSEL ================= */

  const events = [
    { title: "Weddings", img: afamwedding, subtitle: "From intimate elopements to grand celebrations, we create weddings that feel personal, intentional, and beautifully effortless." },
    { title: "Birthday Celebrations", img: laurabirthday, subtitle: "Whether it’s a milestone birthday or a simple gathering, we craft celebrations that are as unique and unforgettable as you are." },
    { title: "Book Launches", img: funmikebooklaunch, subtitle: "From intimate readings to grand galas, we create book launches that captivate your audience and celebrate your literary journey." },
    { title: "Bridal Showers", img: bridalshower, subtitle: "We design intimate bridal showers that celebrate the bride-to-be with elegance and joy." },
    { title: "Corporate & Creative Events", img: corporateevent, subtitle: "We create engaging corporate events that inspire creativity and foster meaningful connections." },
    { title: "Proposals", img: proposal, subtitle: "We craft romantic proposals that are as unique and memorable as your love story." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const itemsPerView = window.innerWidth <= 768 ? 2 : 4;

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerView >= events.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, itemsPerView, events.length]);

  const visibleEvents = events.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <>
      <Helmet>
        <title>The Laurel Experience | Luxury Event Planning</title>
      </Helmet>

      <Navbar />

      <main>
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

          {/* BUBBLES */}
          <div className="bubbles">
            {[...Array(15)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h1>The Laurel Experience</h1>
              <div className="gold-line" />
              <h2>
                Creating unforgettable memories inspired by you, crafted by us.
              </h2>

              <div className="hero-cta">
                <a href="/booking" className="btn-primary shimmer">
                  Book a Consultation
                </a>
                <a href="/works" className="btn-outline">
                  View Our Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}
        <section className="section parallax-section">
          <Reveal>
            <div className="container center">
              <h2>Event Planning Made Seamless</h2>
              <p>
                At The Laurel Experience, we believe every event should feel
                personal, intentional, and beautifully effortless. Whether
                you’re dreaming of a luxury celebration or something simple
                and intimate, we meet you exactly where you are—honouring
                your vision, your budget, and your story. From the first
                conversation to the final moment, we walk alongside you to
                create an experience that feels calm, seamless, and truly
                unforgettable.
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
                <div className="service-card">
                  <FaLightbulb className="service-icon" />
                  <h3>Event Consultation</h3>
                  <p>
                    A strategic and creative session designed to clarify
                    your vision, refine your ideas, and map out a confident plan.
                  </p>
                </div>

                <div className="service-card">
                  <FaClipboardList className="service-icon" />
                  <h3>Event Planning</h3>
                  <p>
                    Full-service planning from concept development to vendor
                    management and flawless design execution.
                  </p>
                </div>

                <div className="service-card">
                  <FaUserTie className="service-icon" />
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

        {/* ================= EVENTS CAROUSEL ================= */}
        <section className="section">
          <Reveal>
            <div className="container">
              <h2 className="center">Events We Specialize In</h2>

              <div
                className="carousel-wrapper"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="events-grid-carousel">
                  {visibleEvents.map((event, index) => (
                    <div key={index} className="event-card">
                      <img src={event.img} alt={event.title} />
                      <h3>{event.title}</h3>
                      <p>{event.subtitle}</p>
                    </div>
                  ))}
                </div>

                <div className="carousel-controls">
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev === 0 ? events.length - itemsPerView : prev - 1
                      )
                    }
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev + itemsPerView >= events.length ? 0 : prev + 1
                      )
                    }
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="section cta-section">
          <Reveal>
            <div className="container center">
              <h2>Let’s create something unforgettable together ✨</h2>
              <a href="/booking" className="btn-primary large shimmer">
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