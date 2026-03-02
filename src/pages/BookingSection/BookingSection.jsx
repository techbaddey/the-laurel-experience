import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../ContactSection/ContactSection.css"; // shared styles for both pages

const initialForm = {
  email: "",
  name: "",
  eventType: "",
  days: "",
  guests: "",
  location: "",
  date: "",
  notes: "",
};

export default function BookingSection() {
  const [form, setForm] = useState(initialForm);
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "booking", payload: form }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to send");

      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Consultation & Booking | The Laurel Experience</title>
        <meta
          name="description"
          content="Book a consultation with The Laurel Experience. Let us understand your vision and curate something extraordinary."
        />
      </Helmet>

      <Navbar />

      <main className="booking-page">
        {/* HERO */}
        <section className="booking-hero">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1>Book a Consultation</h1>
            <p>
              Your journey with <strong>The Laurel Experience</strong> begins here.
              This is where we listen, align, and intentionally create.
            </p>
          </motion.div>
        </section>

        {/* PROCESS */}
        <section className="booking-process">
          <ul>
            <li>We take time to understand your vision & expectations</li>
            <li>We discuss your event needs, goals, and budget</li>
            <li>We explore how our services best support your experience</li>
          </ul>
        </section>

        {/* FORM */}
        <section className="booking-form-wrap">
          <motion.form
            className="laurel-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Initial Consultation Form</h2>
            <p className="form-intro">
              This form helps us prepare thoughtfully for your consultation.
            </p>

            <div className="grid-two">
              {[
                { name: "email", label: "Email *", type: "email" },
                { name: "name", label: "Client’s Name *", type: "text" },
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
                    required
                  />
                </div>
              ))}
            </div>

            <div className="grid-two">
              {[
                { name: "eventType", label: "Type of Event *" },
                { name: "days", label: "Number of Event Days *" },
                { name: "guests", label: "Guest Capacity *" },
                { name: "location", label: "Event Location *" },
              ].map((field) => (
                <div
                  key={field.name}
                  className={`form-group ${
                    focused === field.name || form[field.name] ? "active" : ""
                  }`}
                >
                  <label>{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
              ))}
            </div>

            <div className="form-group active">
              <label>Event Date *</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group textarea">
              <label>Additional Comments or Information</label>
              <textarea
                rows="4"
                name="notes"
                value={form.notes}
                onChange={handleChange}
              />
            </div>

            <button className="btn-gold" type="submit" disabled={isSending}>
              {isSending ? "Sending…" : "Submit Consultation Request"}
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Thank you for trusting The Laurel Experience. We’ll be in touch shortly ✨
                </motion.div>
              )}
            </AnimatePresence>

            {error && <div className="error-message">{error}</div>}
          </motion.form>
        </section>
      </main>

      <Footer />
    </>
  );
}