import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './components-home/Home';
import Services from './pages/Services'; // Importing the new Services page

// Placeholder for the Enquiry Page (We can build this next!)
const Enquiry = () => (
  <div className="pt-40 pb-20 text-center min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 transition-colors duration-500">
    <div className="max-w-2xl mx-auto px-6">
      <span className="text-[#e32926] font-bold tracking-widest text-xs uppercase">Get Started</span>
      <h1 className="text-5xl font-black mt-4 mb-6">Ready to Start Your Journey?</h1>
      <p className="text-gray-500 dark:text-slate-400 text-lg leading-relaxed">
        Our specialized enrollment form is currently under construction. 
        Soon you'll be able to register for global counseling right here!
      </p>
      <div className="mt-12 p-8 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-[2rem]">
         <p className="text-sm font-medium italic text-gray-400">Registration Form Interface Coming Soon...</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      {/* Main Wrapper:
        1. flex-col + min-h-screen allows the Footer to stay at the bottom.
        2. selection:bg-[#e32926] provides a branded text-highlight color.
        3. dark:bg-slate-950 ensures the background remains dark on theme toggle.
      */}
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors duration-500 selection:bg-[#e32926] selection:text-white">
        
        {/* Navigation Bar - Stays fixed at the top */}
        <Navbar />
        
        {/* Main Content Area: 
           'flex-grow' pushes the footer down if content is short.
        */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>

        {/* Premium Footer - Shared across all pages */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;