import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import LaunchStations from './pages/LaunchStations';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import LGCI from './pages/LGCI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="journey" element={<Journey />} />
          <Route path="launch-stations" element={<LaunchStations />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="lgci" element={<LGCI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;