import { motion } from 'framer-motion';
import BehindChefkart from "./BehindChefkart";
import Detail from "./Detail";
import Gallery from "./Gallery";
import Mission from "./Mission";
import Socialmedia from "./Socialmedia";
import Stat2 from "./Stat2";
import Top6 from "./Top6";
import Vision from "./Vision";

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

const About = () => {
  const components = [
    <Top6 />,
    <Mission />,
    <Vision />,
    <Stat2 />,
    <BehindChefkart />,
    <Gallery />,
    <Detail />,
    <Socialmedia />
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

export default About;

