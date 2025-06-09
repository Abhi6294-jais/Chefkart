import { Route, Routes } from "react-router-dom"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import CookBanner from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"


const App = () => {
  return (
    <div>
      <CookBanner/>
      <Navbar/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App


