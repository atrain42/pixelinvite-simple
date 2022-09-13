import classes from "./FormLoader.module.css";

const FormLoader = () => {
  return (
    <div className={classes.formLoaderOuter}>
      <div className={classes.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default FormLoader;
