import Box from '@mui/material/Box';
import "./styles.css";

import Navbar from './components/Navbar/Navbar'; // Ensure this path is correct
// import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import Footer from './components/Footer/Footer';
function App() {
  // Assuming you're not using any state right now, we can remove useState import.
  return (
    <div className='App' >
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/service" element={<Service />}/>
      </Routes> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
