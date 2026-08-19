import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer" ;
import Home from "./pages/Home";
import Services from "./pages/Services";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />}/>
        
        <Route path="/community" element={<Community />} />
     
         <Route path="/Events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;