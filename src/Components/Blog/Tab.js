
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tab = () => {
  const blogData = {
       Partner: [
    {
      title: '“जहाँ आपको इज़्ज़त नहीं मिले, ChefKart उस घर में आपको कभी नहीं भेजेगी” : अजनहर बीबी शेख़',
      tag: 'Pillars of ChefKart',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_06_10_at_4_17_36_PM_3a8dfffd4e.png&w=1920&q=75',
      date: 'June 8, 2023',
      time: '3 min',
    },
    {
      title: 'Empowering the domestic working community',
      tag: 'Subi Kumari',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_03_0008b023df.webp&w=1920&q=75',
      date: 'February 10, 2023',
      time: '2.5 min',
    },
  ],
  'Must Read': [
    {
      title: 'How to use a Home Chef Subscription to make cooking easier',
      tag: 'Streamlining your kitchen routine',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_image_82ea3de818.png&w=1920&q=75',
      date: 'July 4, 2024',
      time: '4 min',
    },
    {
      title: 'What to do when your cook is on leave?',
      tag: 'Interesting Alternatives',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_06_24_at_3_54_55_PM_1d2b58b7d7.png&w=1920&q=75',
      date: 'June 22, 2023',
      time: '3 min',
    },
    {
      title: 'The Importance of Hiring the Best Cook for Home in...',
      tag: 'Get the perfect cook',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FFood_d7b9aaa238.jpg&w=1920&q=75',
      date: 'June 20, 2023',
      time: '2.5 min',
    },
    {
      title: 'Spice Up Your Next Party with Fun Party Games',
      tag: 'Party Games to Elevate Your Next Event',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2F1256_x_568_98d8d86af3.jpg&w=1920&q=75',
      date: 'May 15, 2023',
      time: '4 min',
    },
    {
      title: `ChefKart's Monthly Subscription vs Online Food Delivery: Making Healthier and More Cost-Effective Choices`,
      tag: `Healthier and More Convenient Meals with ChefKart's Monthly Subscription`,
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fonline_offline_final_6f0f608a66.webp&w=1920&q=75',
      date: 'April 10, 2023',
      time: '3 min',
    },
    {
      title: `How to Party When You're an Introvert`,
      tag: 'Tips for Enjoying Social Events in Your Own Comfort Zone',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fintrovert_final_a2f0c4690e.webp&w=1920&q=75',
      date: 'April 8, 2023',
      time: '2.5 min',
    },
  ],
  'Trending': [
     {
      title: `Impact of ChefKart's Cooking Services on Customers`,
      tag: 'Enhancing Home Dining',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fblog_banner_02_c53b8b734b.webp&w=1920&q=75',
      date: 'November 30, 2023',
      time: '4 min',
    },
    {
      title: 'ChefKart’s most-loved one-time cooking service, Chefit.',
      tag: 'Now in South Delhi',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_Banner_1_V6_287615be2c.png&w=1920&q=75',
      date: 'July 10, 2023',
      time: '3 min',
    },
    {
      title: 'Accio Potterheads! Here are Magical Delights from the Harry Potter Series to Send You to the Wizarding World',
      tag: 'Delicious Harry Potter Dishes',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FHP_F1_philosophers_stone_great_hall_halloween_floating_pumpkins_feast_web_landscape_25931ea743.jpeg&w=1920&q=75',
      date: 'June 5, 2023',
      time: '2.5 min',
    },
    {
      title: 'What To Expect From A ChefKart Cook?',
      tag: `Here's everything you wished for in a cook`,
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FWhat_to_expect_from_a_Chef_Kart_cook_e9f35e2867.png&w=1920&q=75',
      date: 'June 3, 2023',
      time: '4 min',
    },
    {
      title: `The Ultimate Guide To Partying with ChefKart`,
      tag: `Make your next party a huge success`,
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_1_42060b9312.webp&w=1920&q=75',
      date: 'May 5, 2023',
      time: '3 min',
    },
    {
      title: `ChefKart's Monthly Subscription vs Online Food Delivery: Making Healthier and More Cost-Effective Choices`,
      tag:`Healthier and More Convenient Meals with ChefKart's Monthly Subscription`,
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fonline_offline_final_6f0f608a66.webp&w=1920&q=75',
      date: 'April 10, 2023',
      time: '3 min',
    },
  ],
  'Food Recipe': [
     {
      title: 'जानिये सुपरफूड्स क्या हैं और उनके लाभ',
      tag: 'एक नजर डालें सुपरफूड्स पर',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_image_82ea3de818.png&w=1920&q=75',
      date: 'May 27, 2023',
      time: '4 min',
    },
    {
      title: 'What to do when your cook is on leave?',
      tag: 'Interesting Alternatives',
      image: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_06_24_at_3_54_55_PM_1d2b58b7d7.png&w=1920&q=75',
      date: 'June 22, 2023',
      time: '3 min',
    },
   
    
  ],
  };

  const [activeTab, setActiveTab] = useState('Partner');
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  const tabs = Object.keys(blogData);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(3);
  };

  const posts = blogData[activeTab];
  const postsToShow = isMobile ? posts.slice(0, visibleCount) : posts;

  return (
    <section className="w-full px-4 md:px-12 py-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-2 md:px-4 py-1 md:py-2 rounded-lg text-1xl md:text-2xl font-semibold ${
              activeTab === tab
                ? 'bg-purple-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + visibleCount}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {postsToShow.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover"
              />
              <div className="p-4 sm:p-5 flex flex-col gap-2">
                <p className="text-sm sm:text-base text-gray-500">{post.tag}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                  {post.title.length > 60 ? `${post.title.slice(0, 60)}...` : post.title}
                </h3>
                <div className="flex justify-between items-center text-sm sm:text-base text-gray-500 mt-1">
                  <span>{post.date}</span>
                  <span>{post.time}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Load More for mobile */}
      {isMobile && visibleCount < posts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="px-6 py-2 text-white bg-purple-700 hover:bg-purple-800 rounded-lg text-sm font-semibold transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Tab;
