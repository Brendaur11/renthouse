import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PropertyDetail from "./pages/PropertyDetail";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";

export default function Router() {
  return (
    <BrowserRouter basename="/renthouse/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}