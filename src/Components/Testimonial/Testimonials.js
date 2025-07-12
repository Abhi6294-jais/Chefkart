import { motion } from 'framer-motion';
import Carousel3 from "./Carousel3";
import Hearit1 from "./Hearit1";
import Hearit2 from "./Hearit2";
import Hearit3 from "./Hearit3";
import Test from "./Test";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Testimonial = () => {
  const components = [
    <Carousel3 />,
    <Test />,
    <Hearit1 />,
    <Hearit2 />,
    <Hearit3 />
  ];

  return (
    <div>
      {components.map((Component, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {Component}
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonial;
