import React from "react";
import { motion } from "framer-motion";
import "./assets/marquee.css";
import icon from './assets/marqueeIcon.png'

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 13,
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <span>
            <img src={icon} alt='' /> <p>Let's Work Together.</p><img src={icon} alt='' /><p>Let's Work Together. </p> <img src={icon} alt='' /> <p>Let's Work Together.</p><img src={icon} alt='' /><p>Let's Work Together. </p> <img src={icon} alt='' /> <p>Let's Work Together.</p><img src={icon} alt='' /><p>Let's Work Together. </p> <img src={icon} alt='' /><p>Let's Work Together. </p> <img src={icon} alt='' /><p>Let's Work Together.</p>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;