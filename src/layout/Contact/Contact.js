import React from "react";
// import FormLoader from "../../components/FormLoader/FormLoader";
import { motion } from "framer-motion";
import rsvp from "../../img/rsvp.png";
import "./Contact.css";

const Contact = ({ setFormLoader }) => {
  // const [formLoading, setFormLoading] = useState(false);

  const handleSubmission = () => {
    setFormLoader(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="contact">
        <div className="contact-text">
          <img src={rsvp} alt="baby" />
          <h1>RSVP</h1>
          <p>Please fill out the form below</p>
        </div>
        <form
          action="https://formsubmit.co/pixel.invite.info@gmail.com"
          method="POST"
          onSubmit={handleSubmission}
        >
          <input type="text" name="_honey" className="honeypot" placeholder />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://pixelinvite-orbital.netlify.app/"
          />
          <input
            type="text"
            name="First&nbsp;Name"
            placeholder="First Name *"
            required
          />
          <input
            type="text"
            name="Last&nbsp;Name"
            placeholder="Last Name *"
            required
          />
          <h1 id="rea">Are you attending? *</h1>
          <span>
            <input
              type="radio"
              name="Are&nbsp;you&nbsp;attending"
              value="Yes"
              id="yes"
              className="radio-btn"
            />
            <label htmlFor="I'm coming" for="yes">
              Accept with pleasure
            </label>
          </span>
          <span>
            <input
              type="radio"
              name="Are&nbsp;you&nbsp;attending"
              value="No"
              id="no"
              className="radio-btn"
            />
            <label htmlFor="I cant't make it" for="no">
              Decline with regret
            </label>
          </span>
          <textarea
            name=""
            cols="20"
            rows="15"
            placeholder="Message"
          ></textarea>
          <button>submit</button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
