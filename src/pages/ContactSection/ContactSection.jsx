import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";
import "./ContactSection.css";

/* Laurel Contact Info */
const PHONE_DISPLAY = "+234 818 270 6743";
const WA_NUMBER = "2348182706743";
const INSTAGRAM = "https://instagram.com/thelaurelexperience";
const EMAIL = "thelaurelexperience@gmail.com";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [focused, setFocused] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSuccess(true);
      setForm(initialForm);
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <>
      <Helmet>
        <title>Contact | The Laurel Experience</title>
        <meta
          name="description"
          content="Get in touch with The Laurel Experience. We’d love to hear about your event and help bring your vision to life."
        />
      </Helmet>

      <Navbar />

      <main className="contact-page">
        {/* ================= HERO ================= */}
        <section className="contact-hero">
          <motion.div
            className="hero-inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <h1>Get in Touch</h1>
            <p>
              We’d love to hear from you. Whether you have a question, an idea, or
              you’re ready to begin your event journey, reach out and let’s talk.
            </p>
          </motion.div>
        </section>

        {/* ================= CONTACT INFO ================= */}
        <section className="contact-info">
          <div className="info-grid">
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              <span>{PHONE_DISPLAY}</span>
            </a>

            <a href={`mailto:${EMAIL}`}>
              <FaEnvelope />
              <span>{EMAIL}</span>
            </a>

            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              <FaInstagram />
              <span>@thelaurelexperience</span>
            </a>
          </div>
        </section>

        {/* ================= FORM ================= */}
        <section className="contact-form-section">
          <motion.form
            className="laurel-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="form-intro">
              Send us a message and we’ll get back to you as soon as possible.
            </p>

            {[
              { label: "Full Name *", name: "name", type: "text" },
              { label: "Email Address *", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "tel" },
              { label: "Type of Event", name: "eventType", type: "text" },
              { label: "Event Date", name: "date", type: "date" },
            ].map((field) => (
              <div
                key={field.name}
                className={`form-group ${
                  focused === field.name || form[field.name] ? "active" : ""
                }`}
              >
                <label>{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  required={field.label.includes("*")}
                />
              </div>
            ))}

            <div
              className={`form-group textarea ${
                focused === "message" || form.message ? "active" : ""
              }`}
            >
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button className="submit-btn" disabled={isSending}>
              {isSending ? "Sending…" : "Send Message"}
            </button>

            <AnimatePresence>
              {success && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <FaCheckCircle />
                  <span>
                    Thank you for reaching out to The Laurel Experience. We’ll be
                    in touch shortly ✨
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </section>
      </main>

      <Footer />
    </>
  );
}
