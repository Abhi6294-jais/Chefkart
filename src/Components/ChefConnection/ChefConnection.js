import { motion } from 'framer-motion';
import Carouse from './Carouse';
import Cater from './Cater';
import Faq2 from './Faq2';
import Hearit from './Hearit';
import Lower from './Lower';
import Lower1 from './Lower1';
import SimpleSlider from './Slider';
import Stat from './Stat';
import Testimonial from './Testimonial';

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

const ChefConnection = () => {
  const components = [
    <Carouse />,
    <Stat />,
    <SimpleSlider />,
    <Cater />,
    <Hearit />,
    <Testimonial />,
    <Lower1 />,
    <Lower />,
    <Faq2 />
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

export default ChefConnection;

