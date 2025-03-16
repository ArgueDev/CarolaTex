import { Route, Routes, BrowserRouter, useLocation } from "react-router";

import { AnimatePresence } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';

import Home from "./Home";
import Nosotros from "./Nosotros";
import NotFound from "./NotFound";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../helpers/ScrollTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contactanos" element={<Contacto />} />
      </Routes>
    </AnimatePresence>
  )
}


export default function App() {
  return (
    <BrowserRouter>
        <ScrollTop />
        <Header />
        <AnimatedRoutes />
        <Footer />
        <Analytics />
    </BrowserRouter>
  )
}
