import { motion } from 'framer-motion';
import Banner1 from "./Banner1";
import Blog from "./Blog";
import Carousel4 from "./Carousel4";
import Hearit5 from "./Hearit5";
import HitW from "./HitW";
import Stats5 from "./Stats5";
import VideoHero1 from "./VideoHero1";
import Gallery3 from "./Gallery3";
import Foodies from "./Foodies";
import Cuisine2 from "./Cuisine2";
import AboveGall from "./AboveGall";
import Slider7 from "./Slider7";
import Lower7 from "./Lower7";
import Belowprice from "./Belowprice";
import Pricing from "./Pricing";
import TiF from "./TiF";
import TabSwitch from "./TabSwitch";
import Topratedcoks from "./Topratedcoks";

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

const Home = () => {
  const components = [
    <Carousel4 />,
    <Pricing />,
    <Belowprice />,
    <HitW />,
    <Stats5 />,
    <VideoHero1 />,
    <Hearit5 />,
    <AboveGall />,
    <Slider7 />,
    <TabSwitch />,
    <Gallery3 />,
    <Cuisine2 />,
    <Foodies />,
    <TiF />,
    <Topratedcoks />,
    <Lower7 />,
    <Blog />,
    <Banner1 />
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

export default Home;

