import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header'
import Para from './components/Para'
import StatisticsBox from './components/StatisticsBox'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Para />
      <StatisticsBox />
      <Testimonials />
      <Footer />
      
    </div>
  );
}

export default App;