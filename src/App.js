import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import CookBanner from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ChefConnection from "./Components/ChefConnection/ChefConnection";
import Month from "./Components/CookForAmonth/Month";
import Party from "./Components/Party/Party";
import Book from "./Components/Book/Book";
import Testimonial from "./Components/Testimonial/Testimonials";
import Career from "./Components/Career/Career";
import Investor from "./Components/Investor/Investor";
import Blog from "./Components/Blog/Blog";
import ChefDirectory from "./Components/ChefSearch";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" && <CookBanner />}
      <Navbar />
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
        <Route path="/chef-search" element={<ChefDirectory/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;



