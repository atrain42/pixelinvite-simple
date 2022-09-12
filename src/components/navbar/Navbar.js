import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import logo from "../../img/heart.svg";

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <nav
      className={classes.nav}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.75s linear",
      }}
    >
      <div className={classes.navOverhang}>
        <div className={classes.homeButton}>
          <img src={logo} alt="logo" id="logo"></img>
          <Link to="/">Allie and Tom</Link>
        </div>
        <Navigation />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
