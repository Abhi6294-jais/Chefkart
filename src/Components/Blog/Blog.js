
import { motion } from 'framer-motion';
import Hero6 from './Hero6';
import Tab from './Tab';

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

const Blog = () => {
  const components = [
    <Hero6 />,
    <Tab />
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

export default Blog;
