import "./Registry.css";

import baby from "../../img/baby.png";
import { motion } from "framer-motion";

const Registry = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="registry">
        <div className="registry-text">
          <img src={baby} alt="baby" />
          <h1>Our Registry</h1>
          <p>We are registered at amazon.com</p>
        </div>
        <div className="registry-content">
          <p className="registry-quote">
            “If I had my life to live over, instead of wishing away nine months
            of pregnancy, I’d have cherished every moment and realized that the
            wonderment growing inside me was the only chance in life to assist
            God in a miracle.”
          </p>
          <a href="https://www.amazon.com/baby-reg/homepage">VIEW REGISTRY</a>
        </div>
      </section>
    </motion.div>
  );
};

export default Registry;
