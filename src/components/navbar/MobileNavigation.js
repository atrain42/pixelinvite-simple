import { useState, useRef } from "react";
import NavLinks from "./NavLinks";
import classes from "./Navbar.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import { useInView } from "framer-motion";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const hamburgerIcon = (
    <BiMenuAltRight
      className={classes.Hamburger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s linear 1s",
      }}
    />
  );

  const closeIcon = (
    <IoMdClose
      className={classes.Hamburger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);
  return (
    <div className={classes.mobileNavigation} ref={ref}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
};

export default MobileNavigation;
