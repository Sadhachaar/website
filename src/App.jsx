import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import LaunchStations from './pages/LaunchStations';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import OurVision from './pages/OurVision';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="journey" element={<Journey />} />
          <Route path="launch-stations" element={<LaunchStations />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="our-vision" element={<OurVision />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;