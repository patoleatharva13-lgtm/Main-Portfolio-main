import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Background from './components/common/Background';
import CustomCursor from './components/common/CustomCursor';
import MusicPlayer from './components/common/MusicPlayer';
import LoadingScreen from './components/loading/LoadingScreen';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

// Handle hash scrolling for links like #contact, #about, #projects
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToHash />
      {/* Dynamic Background with Grid, Aurora & Mouse Spotlight */}
      <Background />

      {/* Interactive Custom Follower Cursor */}
      <CustomCursor />

      {/* Non-intrusive Generative Ambient Music Player */}
      <MusicPlayer />

      {/* Premium Initial Loading Transition */}
      {isLoading ? (
        <LoadingScreen onLoaded={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen flex flex-col justify-between text-zinc-100 font-sans selection:bg-purple-500/30 selection:text-purple-200">
          <Navbar />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetails />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>

          <Footer />
        </div>
      )}
    </Router>
  );
}
