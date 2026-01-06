import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const location = useLocation();

  // Update theme when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Sync with system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Enquiry', path: '/enquiry' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md py-3 shadow-lg' 
        : 'bg-white dark:bg-slate-950 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="text-3xl font-black text-[#e32926] tracking-tighter">edvoy</span>
          <div className="w-1.5 h-1.5 bg-[#ff7a1a] rounded-full mt-2"></div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`group relative py-2 text-sm font-bold tracking-wide transition-colors ${
                location.pathname === link.path 
                ? 'text-[#e32926]' 
                : 'text-gray-700 dark:text-slate-300 hover:text-[#e32926] dark:hover:text-[#e32926]'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#e32926] transform transition-transform ${
                location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button 
            onClick={() => {
              const newMode = !darkMode;
              setDarkMode(newMode);
              console.log('Theme toggled to:', newMode ? 'dark' : 'light');
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 transition-all hover:scale-110 hover:bg-gray-200 dark:hover:bg-slate-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700 dark:text-slate-300" />}
          </button>

          <Link to="/enquiry">
            <button className="bg-[#e32926] text-white px-8 py-3 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(227,41,38,0.4)] transition-all hover:bg-red-700">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle Button - Mobile */}
          <button 
            onClick={() => {
              const newMode = !darkMode;
              setDarkMode(newMode);
              console.log('Theme toggled to:', newMode ? 'dark' : 'light');
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 transition-all"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700 dark:text-slate-300" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-base font-bold transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#e32926]'
                    : 'text-gray-700 dark:text-slate-300 hover:text-[#e32926]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/enquiry" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#e32926] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-all mt-4">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;