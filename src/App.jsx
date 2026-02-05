import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetail from "./pages/property/PropertyDetail";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import Properties from "./pages/property/Properties";
import Footer from "./components/Footer";

export default function Router() {
  return (
    <BrowserRouter basename="/renthouse/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/propiedades" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}