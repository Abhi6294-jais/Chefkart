import { motion } from 'framer-motion';
import Blog1 from './Blog1';
import Bottom from './Bottom';
import Details1 from './Details1';
import Header7 from './Header7';
import Press from './Preess';
import Slider10 from './Slider10';
import Top7 from './Top7';

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

const Investor = () => {
  const components = [
    <Top7 />,
    <Press />,
    <Blog1 />,
    <Header7 />,
    <Slider10 />,
    <Details1 />,
    <Bottom />
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

export default Investor;

