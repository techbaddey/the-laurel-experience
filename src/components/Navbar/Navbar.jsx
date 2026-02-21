import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import laurellogo from "../../assets/laurel-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Works", path: "/works" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* LOGO LEFT */}
        <Link to="/" className="nav-logo">
          <img src={laurellogo} alt="The Laurel Experience" />
        </Link>

        {/* MENU RIGHT */}
        <button className="nav-menu-btn" onClick={() => setOpen(!open)}>
          <span>{open ? "CLOSE" : "MENU"}</span>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* MENU OVERLAY (NAVBAR STAYS VISIBLE) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
  className="menu-links"
  variants={menuVariants}
  initial="hidden"
  animate="show"
>
  {["Home", "About", "Services", "Works", "Booking", "Contact"].map((item) => (
    <motion.div key={item} variants={linkVariants}>
      <NavLink
        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
        onClick={() => setOpen(false)}
      >
        {item}
      </NavLink>
    </motion.div>
  ))}
</motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
