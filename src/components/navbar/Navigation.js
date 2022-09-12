import classes from "./Navbar.module.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <NavLinks />
    </div>
  );
};

export default Navigation;
