import { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMail, FiMessageCircle, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactReveal.css";

const ContactReveal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-reveal">
      <AnimatePresence>
        {open && (
          <motion.div
            className="contact-options"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <a href="https://wa.me/2348182706743" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="mailto:thelaurelexperience@gmail.com">
              <FiMail />
            </a>
            <a
              href="https://instagram.com/thelaurelexperience"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button className="contact-toggle" onClick={() => setOpen(!open)}>
        {open ? <FiX size={26} /> : <FiMessageCircle size={26} />}
      </button>
    </div>
  );
};

export default ContactReveal;
