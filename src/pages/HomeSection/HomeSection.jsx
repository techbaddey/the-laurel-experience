import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaCalendarCheck, FaClipboardList, FaUserTie } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

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

import "./HomeSection.css";

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

export default function HomeSection() {

  /* HERO SLIDER */

  const heroImages = [
    afamwedding3,
    funmikebooklaunch,
    joshuabirthday,
    laurabirthday2,
    damiprewedding
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

/* ================= EVENTS DATA ================= */

const events = [
{
img: afamwedding,
title:"Weddings",
desc:"Elegant, emotionally rich celebrations tailored to your love story."
},
{
img: laurabirthday,
title:"Birthday Celebrations",
desc:"Memorable milestones styled with intention and flair."
},
{
img: funmikebooklaunch,
title:"Book Launches",
desc:"Refined literary events that captivate and impress."
},
{
img: damiprewedding,
title:"Bridal Showers",
desc:"Beautiful pre-wedding gatherings filled with elegance and joy."
},
{
img: proposal,
title:"Proposals",
desc:"Intimate, magical moments crafted to perfection."
},
{
img: joshuabirthday,
title:"Corporate & Creative Events",
desc:"Polished experiences designed for brands, teams and creators."
}
];

/* ================= RESPONSIVE ================= */

const [visibleCards,setVisibleCards]=useState(
window.innerWidth<768?2:4
);

useEffect(()=>{
const resize=()=>{
setVisibleCards(window.innerWidth<768?2:4);
};
window.addEventListener("resize",resize);
return()=>window.removeEventListener("resize",resize);
},[]);

/* ================= LOOP ARRAY ================= */

const loopEvents=[
...events.slice(-visibleCards),
...events,
...events.slice(0,visibleCards)
];

/* ================= STATE ================= */

const [current,setCurrent]=useState(visibleCards);
const [transition,setTransition]=useState(true);
const [isPaused,setIsPaused]=useState(false);

/* ================= AUTOPLAY ================= */

useEffect(()=>{

if(isPaused) return;

const interval=setInterval(()=>{
setCurrent(prev=>prev+1)
},7000)

return()=>clearInterval(interval)

},[isPaused]);

/* ================= LOOP RESET ================= */

useEffect(()=>{

if(current===events.length+visibleCards){

setTimeout(()=>{
setTransition(false);
setCurrent(visibleCards);
},800)

}

if(current===0){

setTimeout(()=>{
setTransition(false);
setCurrent(events.length);
},800)

}

},[current,events.length,visibleCards]);

useEffect(()=>{
setTimeout(()=>setTransition(true),50)
},[current]);

/* ================= DRAG + SWIPE ================= */

const startX=useRef(0);
const isDragging=useRef(false);

const handleStart=(x)=>{
startX.current=x;
isDragging.current=true;
setIsPaused(true);
};

const handleMove=(x)=>{
if(!isDragging.current) return;

const diff=x-startX.current;

if(Math.abs(diff)>60){

if(diff<0){
setCurrent(prev=>prev+1)
}else{
setCurrent(prev=>prev-1)
}

isDragging.current=false;

}
};

const handleEnd=()=>{
isDragging.current=false;
setIsPaused(false);
};

  return (
    <>
      <Helmet>
        <title>The Laurel Experience | Luxury Event Planning</title>
      </Helmet>

      <Navbar />

      <main>

        {/* HERO */}

        <section className="home-hero">

          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-bg ${index === heroIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          <div className="hero-overlay" />
          <div className="hero-gradient-overlay" />

          <div className="hero-bubbles left">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="hero-bubbles right">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >

            <h1 className="hero-title">The Laurel Experience</h1>

            <div className="gold-line" />

            <h2 className="hero-subtitle">
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

        </section>

        {/* WHAT WE DO */}

        <section className="section parallax-section">
          <Reveal>
            <div className="container center">
              <h2>Event Planning Made Seamless</h2>
              <p className="center">
                At The Laurel Experience, we believe every event should feel
                personal, intentional, and beautifully effortless.
                Whether you’re dreaming of a luxury celebration or something
                simple and intimate, we meet you exactly where you are.
                From the first conversation to the final moment,
                we create experiences that feel calm and unforgettable.
              </p>
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}

        <section className="section alt">
          <Reveal>
            <div className="container">

              <h2 className="center">Our Core Services</h2>

              <div className="services-grid">

                <div className="service-card luxury-hover">
                  <div className="service-icon shimmer">
                  <FaCalendarCheck/>
                  </div>
                  <h3>Event Consultation</h3>
                  <p>
                    A strategic and creative session designed to clarify your
                    vision and refine your ideas.
                  </p>
                </div>

                <div className="service-card luxury-hover">
                  <div className="service-icon shimmer">
                  <FaClipboardList/>
                  </div>
                  <h3>Event Planning</h3>
                  <p>
                    Full-service planning from concept development to vendor
                    management and flawless design execution.
                  </p>
                </div>

                <div className="service-card luxury-hover">
                  <div className="service-icon shimmer">
                  <FaUserTie/>
                  </div>
                  <h3>Event Coordination</h3>
                  <p>
                    Seamless oversight on your event day so every detail unfolds
                    exactly as planned.
                  </p>
                </div>

              </div>

            </div>
          </Reveal>
        </section>

        {/* EVENTS CAROUSEL */}

      <section className="section events-section">

<Reveal>

<div className="container">

<h2 className="center">Events We Specialize In</h2>

<div
className="events-carousel"

onMouseEnter={()=>setIsPaused(true)}
onMouseLeave={()=>setIsPaused(false)}

onMouseDown={(e)=>handleStart(e.clientX)}
onMouseMove={(e)=>handleMove(e.clientX)}
onMouseUp={handleEnd}
onMouseLeaveCapture={handleEnd}

onTouchStart={(e)=>handleStart(e.touches[0].clientX)}
onTouchMove={(e)=>handleMove(e.touches[0].clientX)}
onTouchEnd={handleEnd}
>

<div
className="events-track"

style={{

transform:`translateX(-${current*(100/visibleCards)}%)`,

transition:transition
? "transform .8s cubic-bezier(.22,.61,.36,1)"
: "none"

}}

>

{loopEvents.map((event,index)=>(

<div className="event-card" key={index}>

<img src={event.img} alt={event.title}/>

<div className="event-text">

<h3>{event.title}</h3>

<p>{event.desc}</p>

</div>

</div>

))}

</div>

</div>

<div className="carousel-controls">

        <button
          onClick={() =>
            setCurrent(prev => prev === 0 ? events.length - 1 : prev - 1)
          }
        >
          <IoChevronBack />
        </button>

        <button
          onClick={() =>
            setCurrent(prev => prev + 1)
          }
        >
          <IoChevronForward />
        </button>

      </div>

</div>

</Reveal>

</section>
        {/* FINAL CTA */}

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