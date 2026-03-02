import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import LargeImg1 from "../../assets/afam-wedding-3.jpeg";
import LargeImg2 from "../../assets/alaynna-prewedding.jpeg";

import { FaLightbulb } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import "./ServicesSection.css";

export default function ServicesSection() {

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
        <title>Services | The Laurel Experience</title>
      </Helmet>

      <Navbar />

      <main>

{/* ================= HERO ================= */}

<section className="services-hero">

<div className="services-overlay">

<span className="bubble"></span>
<span className="bubble"></span>
<span className="bubble"></span>
<span className="bubble"></span>
<span className="bubble"></span>

</div>

<div className="services-hero-content">

<h1>Our Services</h1>

<div className="gold-line" />

<p>
Thoughtful planning, elegant execution, and unforgettable experiences.
</p>

</div>

</section>

{/* ================= EVENT CONSULTATION ================= */}

<section className="section">

<Reveal>

<div className="container service-layout">

<div className="service-text">

<div className="service-icon shimmer">
<FaLightbulb/>
</div>

<h2>Event Consultation</h2>

<p className="service-desc">
Ideal for clients who need clarity, direction, and professional guidance before committing fully.
</p>

<ul className="service-list">

<li>Event idea refinement and concept development</li>

<li>Budget guidance and realistic planning insights</li>

<li>Event feasibility assessment and planning direction</li>

</ul>

</div>

<div className="service-image">
<img src={LargeImg1} alt="Event Consultation"/>
</div>

</div>

</Reveal>

</section>

{/* ================= EVENT PLANNING ================= */}

<section className="section alt">

<Reveal>

<div className="container service-layout reverse">

<div className="service-text">

<div className="service-icon shimmer">
<FaCalendarCheck/>
</div>

<h2>Event Planning</h2>

<p className="service-desc">
Comprehensive, end-to-end planning for a seamless and intentional event experience.
</p>

<ul className="service-list">

<li>Vendor sourcing, recommendations, and management</li>

<li>Event styling support and coordination</li>

<li>Detailed timelines and logistics planning</li>

<li>Budget management and cost control</li>

</ul>

</div>

<div className="service-image">
<img src={LargeImg2} alt="Event Planning"/>
</div>

</div>

</Reveal>

</section>

{/* ================= EVENT COORDINATION ================= */}

<section className="section">

<Reveal>

<div className="container service-layout">

<div className="service-text">

<div className="service-icon shimmer">
<FaClipboardList/>
</div>

<h2>Event Coordination</h2>

<p className="service-desc">
For clients who have planned their event but want professional, stress-free execution.
</p>

<ul className="service-list">

<li>On-the-day coordination</li>

<li>Vendor supervision and communication</li>

<li>Event flow and timeline management</li>

</ul>

</div>

<div className="service-image">
<img src={LargeImg1} alt="Event Coordination"/>
</div>

</div>

</Reveal>

</section>

{/* ================= WHY CHOOSE US ================= */}

<section className="section alt">

<Reveal>

<div className="container">

<h2 className="center">Why Choose The Laurel Experience</h2>

<div className="why-grid">

<div className="why-card luxury-hover">

<div className="why-icon shimmer">
<FaHeart/>
</div>

<p>Personalized planning tailored to your vision and story</p>

</div>

<div className="why-card luxury-hover">

<div className="why-icon shimmer">
<FaStar/>
</div>

<p>Exceptional attention to detail</p>

</div>

<div className="why-card luxury-hover">

<div className="why-icon shimmer">
<FaUsers/>
</div>

<p>Seamless coordination and execution</p>

</div>

<div className="why-card luxury-hover">

<div className="why-icon shimmer">
<FaHeart/>
</div>

<p>A calm, loving, and professional approach</p>

</div>

</div>

</div>

</Reveal>

</section>

{/* ================= CTA ================= */}

<section className="section services-cta">

<Reveal>

<div className="container center">

<h2>Let’s create an unforgettable experience together</h2>

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