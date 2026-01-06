import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the new Footer component
import Home from './components-home/Home';

// Placeholder components for other pages (We can build these next!)
const Services = () => (
  <div className="pt-32 pb-20 text-center min-h-[60vh] bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 transition-colors duration-500">
    <h1 className="text-4xl font-black">Our Services</h1>
    <p className="mt-4 text-gray-500">Deep dive into our global education solutions.</p>
  </div>
);

const Enquiry = () => (
  <div className="pt-32 pb-20 text-center min-h-[60vh] bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 transition-colors duration-500">
    <h1 className="text-4xl font-black">Ready to Start?</h1>
    <p className="mt-4 text-gray-500">Fill out the form below to get expert guidance.</p>
  </div>
);

function App() {
  return (
    <Router>
      {/* The wrapper div ensures the dark theme background covers the whole screen 
        and the flex layout pushes the footer to the bottom on short pages.
      */}
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors duration-500 selection:bg-[#e32926] selection:text-white">
        
        {/* Fixed Navbar */}
        <Navbar />
        
        {/* Main content area: 
           'flex-grow' ensures this takes up all available space, 
           pushing the footer down even if the page content is short.
        */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>

        {/* Premium Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;