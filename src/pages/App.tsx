import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./Home";
import Nosotros from "./Nosotros";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  )
}
