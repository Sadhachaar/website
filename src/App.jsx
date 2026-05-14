import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import OurVision from './pages/OurVision';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Ethics from './pages/Ethics';
import PlanPreview from './pages/PlanPreview';

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
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="our-vision" element={<OurVision />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="ethics" element={<Ethics />} />
          <Route path="plan-preview" element={<PlanPreview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;