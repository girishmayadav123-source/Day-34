import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/community" />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;