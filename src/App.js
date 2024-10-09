// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DropdownMenu from './components/DropdownMenu';
import Footer from './components/Footer';
import CallIcon from './components/CallIcon'; // Import the CallIcon component
import About from './components/About';

// Lazy load the components
const Hero = lazy(() => import('./components/Hero'));
const Para = lazy(() => import('./components/Para'));
const StatisticsBox = lazy(() => import('./components/StatisticsBox'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const WebDevelopment = lazy(() => import('./components/WebDevelopment'));
const MobileAppDevelopment = lazy(() => import('./components/MobileAppDevelopment'));
const DigitalMarketing = lazy(() => import('./components/DigitalMarketing'));
const ContactUs = lazy(() => import('./components/ContactUs'));

function App() {
  return (
    <Router>
      <div className="app">
        <DropdownMenu /> {/* Navbar will always be visible */}

        <Suspense fallback={<div className='Loading'>Please wait content is Loading...</div>}>
          <Routes>
            <Route path="/" element={<>
              {/* Home Page Components */}
              <Hero />
              <Para />
              <StatisticsBox />
              <Testimonials />
            </>} />

            {/* Define individual routes for each page */}
            <Route path="/about" element={<About />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobileApp-development" element={<MobileAppDevelopment />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            
            {/* Add the ContactUs route */}
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Suspense>

        <Footer /> {/* Footer remains visible on all pages */}
        <CallIcon /> {/* Add the CallIcon component here */}
      </div>
    </Router>
  );
}

export default App;
