import { motion } from "framer-motion";
import Carouse2 from './Carousel2';
import Cuisine from './Cuisine';
import Factors from './Factors';
import Faq4 from './Faq4';
import FloatingBanner1 from './FloatingBanner1';
import Lower4 from './Lower4';
import Lower5 from './Lower5';
import Lower6 from './Lower6';
import Slider4 from './Slider4';
import Slider5 from './Slider5';
import Top5 from './Top5';
import Top6 from './Top6';
import VideoHero from './VideoHero';



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

const Party = () => {
  return (
    <div>
      {[
        <Carouse2 />,
        <Top5 />,
        <Top6 />,
        <Factors />,
        <VideoHero />,
        <Slider4 />,
        <Cuisine />,
        <Slider5 />,
        <Lower6 />,
        <Lower5 />,
        <Faq4 />,
        <Lower4 />,
        <FloatingBanner1 />
      ].map((Component, index) => (
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


export default Party;
