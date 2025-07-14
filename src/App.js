import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import CookBanner from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";

// Lazy loaded components
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const ChefConnection = lazy(() => import("./Components/ChefConnection/ChefConnection"));
const Month = lazy(() => import("./Components/CookForAmonth/Month"));
const Party = lazy(() => import("./Components/Party/Party"));
const Book = lazy(() => import("./Components/Book/Book"));
const Testimonial = lazy(() => import("./Components/Testimonial/Testimonials"));
const Career = lazy(() => import("./Components/Career/Career"));
const Investor = lazy(() => import("./Components/Investor/Investor"));
const Blog = lazy(() => import("./Components/Blog/Blog"));
const ChefDirectory = lazy(() => import("./Components/ChefSearch"));

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" && <CookBanner />}
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-chefkart" element={<ChefConnection />} />
          <Route path="/cook-for-month" element={<Month />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/chef-for-party" element={<Party />} />
          <Route path="/book-now" element={<Book />} />
          <Route path="/career" element={<Career />} />
          <Route path="/investor-relation" element={<Investor />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chef-search" element={<ChefDirectory />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;




