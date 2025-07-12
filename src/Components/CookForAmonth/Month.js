import React from 'react';
import { motion } from 'framer-motion';
import Banner from './Banner';
import FaqSection from './FAQ3';
import Lower2 from './Lower2';
import Hearit1 from './Hearit1';
import Stat1 from './Stat1';
import Carouse1 from './Carouse1';
import Lower3 from './Lower3';
import Top2 from './Top2';
import Top3 from './Top3';
import Slider1 from './Slider1';
import FloatingBanner from './FloatingBanner';

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

const Month = () => {
  const components = [
    <Carouse1 />,
    <Top2 />,
    <Stat1 />,
    <Top3 />,
    <Hearit1 />,
    <Slider1 />,
    <Lower3 />,
    <Lower2 />,
    <FaqSection />,
    <Banner />,
    <FloatingBanner />
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

export default Month;

