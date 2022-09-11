import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";
import "./Navbar.css";
import heart from "../../img/heart.svg";

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <nav ref={ref}>
      <NavLink to="/">
        <img
          src={heart}
          alt="heart"
          style={{
            transform: isInView ? "none" : "translateX(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        />
      </NavLink>
      <div className="nav-overhang">
        <h1
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Allie & Tom
        </h1>
        <div className="link-container">
          <NavLink to="/" activeClassName="active">
            <button
              style={{
                transform: isInView ? "none" : "translateX(-50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              SHOWER
            </button>
          </NavLink>
          <NavLink to="/registry" activeClassName="active">
            <button
              id="mid"
              style={{
                transform: isInView ? "none" : "translateX(-50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
              }}
            >
              REGISTRY
            </button>
          </NavLink>
          <NavLink to="/rsvp" activeClassName="active">
            <button
              style={{
                transform: isInView ? "none" : "translateX(-50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
            >
              RSVP
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
