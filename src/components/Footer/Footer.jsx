import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import laurellogo from "../../assets/laurel-logo.png";
import "./Footer.css";

const footerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Divider */}
      <motion.div
        className="footer-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="footer-container"
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* BRAND */}
        <motion.div className="footer-brand" variants={itemVariants}>
          <img
            src={laurellogo}
            alt="The Laurel Experience logo"
            className="footer-logo"
          />
          <p>
            We bring your vision to life—meeting you exactly where you are. With a seamless experience, we walk alongside you to create unforgettable memories, inspired by you and crafted by us.


          </p>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div className="footer-links" variants={itemVariants}>
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/works">Works</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/booking">Consultation & Booking</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div className="footer-contact" variants={itemVariants}>
          <h4>Contact</h4>

          <a
            href="https://wa.me/2348182706743"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span>+234 818 270 6743</span>
          </a>

          <a href="mailto:thelaurelexperience@gmail.com">
            <FiMail />
            <span>thelaurelexperience@gmail.com</span>
          </a>
        </motion.div>

        {/* SOCIAL */}
        <motion.div className="footer-social" variants={itemVariants}>
          <h4>Follow</h4>
          <a
            href="https://instagram.com/thelaurelexperience"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </motion.div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© {currentYear} The Laurel Experience. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
