import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Tab = () => {
  const [blogData, setBlogData] = useState({});
  const [activeTab, setActiveTab] = useState('');
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/blogs/getall");
        const blogs = res.data.data;

        const categorizedData = {};

        blogs.forEach((blog) => {
          const category = blog.category?.trim() || "Others";

          const formattedDate = new Date(blog.updatedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          const post = {
            id: blog._id,
            title: blog.content.slice(0, 60) + (blog.content.length > 60 ? "..." : ""),
            tag: blog.title,
            image: blog.image,
            date: formattedDate,
            time: "3 min",
          };

          if (!categorizedData[category]) {
            categorizedData[category] = [];
          }
          categorizedData[category].push(post);
        });

        setBlogData(categorizedData);

        const defaultTab = Object.keys(categorizedData)[0];
        if (defaultTab) {
          setActiveTab(defaultTab);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  // Detect mobile
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

  const handleCardClick = async (id) => {
    setSelectedBlogId(id);
    setLoadingDetails(true);
    try {
      const res = await axios.get(`http://localhost:8000/blogs/get/${id}`);
      setModalData(res.data.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    } finally {
      setLoadingDetails(false);
    }
  };

  const closeModal = () => {
    setSelectedBlogId(null);
    setModalData(null);
  };

  const tabs = Object.keys(blogData);
  const posts = blogData[activeTab] || [];
  const postsToShow = isMobile ? posts.slice(0, visibleCount) : posts;

  if (!activeTab || !posts.length) {
    return (
      <div className="w-full flex justify-center items-center h-[300px] text-xl font-semibold text-gray-600">
        Loading blogs...
      </div>
    );
  }

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

      {/* Cards */}
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
              onClick={() => handleCardClick(post.id)}
              className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
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

      {/* Load More */}
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

      {/* Modal */}
      {selectedBlogId && modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-2xl rounded-lg p-6 relative">
            <button onClick={closeModal} className="absolute top-2 right-4 text-2xl font-bold text-gray-500">&times;</button>
            <img src={modalData.image} alt={modalData.title} className="w-full h-[300px] object-cover rounded-lg" />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{modalData.title}</h2>
            <p className="text-gray-600 mt-2 whitespace-pre-line">{modalData.content}</p>
            <p className="text-sm text-gray-400 mt-4">Last updated: {new Date(modalData.updatedAt).toLocaleString()}</p>
          </div>
        </div>
      )}

      {selectedBlogId && loadingDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-white text-xl">
          Loading blog details...
        </div>
      )}
    </section>
  );
};

export default Tab;




