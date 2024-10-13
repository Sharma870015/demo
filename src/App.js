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
const AndroidAppDevelopment = lazy(() => import('./components/AndroidAppDevelopment'));
const IPadAppDevelopment = lazy(() => import('./components/IPadAppDevelopment')); // Import the iPad App Development component
const IOSAppDevelopment = lazy(() => import('./components/IOSAppDevelopment')); 
const AppleWatchAppDev = lazy(() => import('./components/AppleWatchAppDev')); 
const WordPressDevelopment = lazy(() => import('./components/WordPressDevelopment'))
const DynamicWebsiteDev = lazy(() => import('./components/DynamicWebsiteDev'))
const CustomWebAppDev = lazy(() => import('./components/CustomWebAppDev'))
const ECommerceWebAppDev = lazy(() => import('./components/ECommerceWebAppDev'))
const SEOService = lazy(() => import('./components/SEOService'))
const EmailMarketingService = lazy(() => import('./components/EmailMarketingService'))
const PPCServices = lazy(() => import('./components/PPCServices'))
const SocialMediaMarketing = lazy(() => import('./components/SocialMediaMarketing'))
const AffiliateMarketing = lazy(() => import('./components/AffiliateMarketing'))
const EcommerceMarketing = lazy(() => import('./components/EcommerceMarketing'))
const Services = lazy(() => import('./components/Services'));
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
            <Route path="/android" element={<AndroidAppDevelopment />} />
            <Route path="/ios-development" element={<IOSAppDevelopment />} /> {/* iOS Development */}
            <Route path='/iPad-development' element={<IPadAppDevelopment />} />
            <Route path='/AppleWatch-App' element={<AppleWatchAppDev />} />
            <Route path='/Dynamic_WebDev' element={<DynamicWebsiteDev />} />
            <Route path="/about" element={<About />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/wordpress-development" element={<WordPressDevelopment />} />
            <Route path="/mobileApp-development" element={<MobileAppDevelopment />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path='/custom-webdev' element={<CustomWebAppDev />} />
            <Route path='/E-commerce_WebApp' element={<ECommerceWebAppDev />} />
            <Route path='/SEO-Services' element={<SEOService />} />
            <Route path='/EmailMarketingService' element={<EmailMarketingService />} />
            <Route path='/PPC-Services' element={<PPCServices />} />
            <Route path='/socialMedia-Marketing' element={<SocialMediaMarketing />} />
            <Route path='/Affiliate-marketing' element={<AffiliateMarketing />} />
            <Route path='/Ecommerce-marketing' element={<EcommerceMarketing />} />
            <Route path='/Services' element={<Services />} />
            

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
