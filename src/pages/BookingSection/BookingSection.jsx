import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

import { FaCalendarCheck, FaQuestionCircle } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./BookingSection.css";

export default function BookingSection() {

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

const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
};

return (
<>
<Helmet>
<title>Booking | The Laurel Experience</title>
</Helmet>

<Navbar />

<main>

{/* HERO */}

<section className="booking-hero">

<div className="booking-overlay" />

<div className="bubble-bg">
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
</div>

<div className="booking-hero-content">

<h1>Booking</h1>

<div className="gold-line" />

<p>Your journey with The Laurel Experience begins here.</p>

</div>

</section>

{/* INTRO */}

<section className="section">

<Reveal>

<div className="container center booking-intro">

<h2>Book a Consultation</h2>

<p>
During your consultation, we take time to understand your vision, discuss your
event goals, and explore how our services can support you.
</p>

<div className="consult-grid">

<div className="consult-card">
<FaCalendarCheck />
<p>Understand your vision and expectations</p>
</div>

<div className="consult-card">
<FaCalendarCheck />
<p>Discuss event needs, goals, and budget</p>
</div>

<div className="consult-card">
<FaCalendarCheck />
<p>Explore how our services can support you</p>
</div>

</div>

</div>

</Reveal>

</section>

{/* FORM */}

<section className="section alt">

<Reveal>

<div className="container booking-form-container">

<h2 className="center">Initial Consultation Form</h2>

<p className="form-intro">
This form helps us gather important details about your event so we can prepare
for a meaningful consultation.
</p>

{submitted ? (

<div className="success-message">

<h3>Thank you for trusting The Laurel Experience.</h3>

<p>We'll be in touch shortly.</p>

</div>

) : (

<form className="booking-form" onSubmit={handleSubmit}>

<input type="text" placeholder="Client Name *" required />

<input type="email" placeholder="Email *" required />

<select required>

<option value="">Type of Event *</option>

<option>Wedding</option>

<option>Birthday</option>

<option>Corporate</option>

<option>Proposal</option>

<option>Other</option>

</select>

<input type="number" placeholder="Number of Event Days *" required />

<input type="number" placeholder="Guest Capacity *" required />

<input type="text" placeholder="Event Location *" required />

<input type="date" required />

<textarea placeholder="Additional Comments or Information"></textarea>

<button className="btn-primary shimmer large">
Submit Consultation Request
</button>

</form>

)}

</div>

</Reveal>

</section>

{/* FAQ */}

<section className="section">

<Reveal>

<div className="container faq-section">

<h2 className="center">Frequently Asked Questions</h2>

<div className="faq-grid">

<div className="faq-card">

<FaQuestionCircle />

<h3>How far in advance should I book?</h3>

<p>
We recommend booking as early as possible, especially for weddings
and large events.
</p>

</div>

<div className="faq-card">

<FaQuestionCircle />

<h3>Do you work with different budgets?</h3>

<p>
Yes. We meet you where you are and plan intentionally within your budget.
</p>

</div>

<div className="faq-card">

<FaQuestionCircle />

<h3>Can I book only consultation or coordination?</h3>

<p>
Absolutely. Our services are flexible and designed to support your needs.
</p>

</div>

<div className="faq-card">

<FaQuestionCircle />

<h3>Do you offer destination events?</h3>

<p>
Yes, destination and out-of-town events are available upon request.
</p>

</div>

</div>

</div>

</Reveal>

</section>

</main>

<Footer />

</>

);

}