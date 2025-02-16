import { Route, Routes, BrowserRouter, useLocation } from "react-router";

import Home from "./Home";
import Nosotros from "./Nosotros";
import NotFound from "./NotFound";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </AnimatePresence>
  )
}


export default function App() {
  return (
    <BrowserRouter>
        <AnimatedRoutes />
    </BrowserRouter>
  )
}
