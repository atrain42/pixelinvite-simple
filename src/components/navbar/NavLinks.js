import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const NavLinks = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ul className={classes.navLinks} ref={ref}>
      <NavLink
        to="/"
        activeClassName="active"
        onClick={() => props.isMobile && props.closeMobileMenu()}
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <li>Shower</li>
      </NavLink>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <NavLink
        to="/registry"
        activeClassName="active"
        className="mid"
        onClick={() => props.isMobile && props.closeMobileMenu()}
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <li>Registry</li>
      </NavLink>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <NavLink
        to="/rsvp"
        activeClassName="active"
        onClick={() => props.isMobile && props.closeMobileMenu()}
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
      >
        <li>RSVP</li>
      </NavLink>
      {props.isMobile && (
        <h1
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s linear 1s",
          }}
        >
          Made at&nbsp;
          <span>
            <a href="https://www.pixelinvite.com/" className={classes.site}>
              PixelInvite.com
            </a>
          </span>
        </h1>
      )}
    </ul>
  );
};

export default NavLinks;
