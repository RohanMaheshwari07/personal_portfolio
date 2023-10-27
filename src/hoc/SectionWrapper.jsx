import { motion } from "framer-motion";
import { useEffect } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    useEffect(() => {
      // Get the ID from the URL
      const url = new URL(window.location.href);
      const idFromUrl = url.hash.slice(1); // Remove the '#' symbol

      // Find the element with the matching ID and scroll to it
      if (idFromUrl && document.getElementById(idFromUrl)) {
        const element = document.getElementById(idFromUrl);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, []); // This effect runs only once when the component mounts

    return (
      <motion.section
        variants={staggerContainer()}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <div className="hash-span" id={idName}>
          &nbsp;
        </div>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
