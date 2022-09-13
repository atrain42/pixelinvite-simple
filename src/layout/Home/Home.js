import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Home.css";
import bear from "../../img/teddy-bear.png";
import couple from "../../img/couple.jpg";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const qref = useRef(null);
  const qInView = useInView(qref, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="home">
        <header className="header">
          <span>
            <img src={bear} alt="teddy bear" />
            <h1>Join us for a baby shower</h1>
          </span>
        </header>
        <div className="linebreak"></div>
        <section className="about" ref={ref}>
          <div className="img-container">
            <img src={couple} alt="couple" />
          </div>
          <div
            className="about-text"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease-in",
            }}
          >
            <h1>Our story</h1>
            <p>
              Hi everyone! We ask you to please join us, as we begin to prepare
              for the birth of our baby boy. Our beautfiul boy is healthy, and
              everything is going great. At our last doctors appointment he had
              a heartbeat of 110 BPM and is now the size of an avocado! We are
              looking forward to seeing family and friends as we prepare for the
              birth of our boy. Please RSVP on the site and visit the registry;
              thank you from the bottom of our hearts.
            </p>
            <h3 id="note">
              Love,<br></br>Allie and Tom
            </h3>
          </div>
        </section>
        <div className="linebreak"></div>
        <section className="message" ref={qref}>
          <p
            style={{
              opacity: qInView ? 1 : 0,
              transition: "all 1s ease-in",
            }}
          >
            Allie and Tom would love for you to join them, as they anticipate
            the arrival of their beautiful baby boy.
          </p>

          <Link to="/registry">
            <button
              style={{
                transform: qInView ? "none" : "translateY(50px)",
                opacity: qInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
            >
              SEE REGISTRY
            </button>
          </Link>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
