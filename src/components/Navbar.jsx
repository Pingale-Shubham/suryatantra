import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-xl backdrop-blur-lg' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center group">
            <img 
              src="/Images/Logo/Surytantra Logo-01.png" 
              alt="Suryatantra Logo" 
              className="h-10 transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
          
          <ul className={`hidden md:flex items-center gap-8`}>
            <li>
              <Link 
                to="/" 
                className={`font-medium transition-all duration-300 relative group ${
                  isActive('/') ? 'text-emerald-600' : 'text-gray-800'
                } hover:text-emerald-600`}
              >
                Home
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${
                  isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`font-medium transition-all duration-300 relative group ${
                  isActive('/about') ? 'text-emerald-600' : 'text-gray-800'
                } hover:text-emerald-600`}
              >
                About
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${
                  isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={`font-medium transition-all duration-300 relative group ${
                  isActive('/products') ? 'text-emerald-600' : 'text-gray-800'
                } hover:text-emerald-600`}
              >
                Products
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${
                  isActive('/products') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
            <li>
              <a 
                href="#contact" 
                className="font-medium text-gray-800 hover:text-emerald-600 transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          <button 
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={toggleMenu}
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="flex flex-col gap-4 py-4">
            <li>
              <Link to="/" onClick={closeMenu} className="block py-2 font-medium text-gray-800 hover:text-emerald-600 transition-colors duration-300 hover:translate-x-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu} className="block py-2 font-medium text-gray-800 hover:text-emerald-600 transition-colors duration-300 hover:translate-x-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={closeMenu} className="block py-2 font-medium text-gray-800 hover:text-emerald-600 transition-colors duration-300 hover:translate-x-2">
                Products
              </Link>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu} className="block py-2 font-medium text-gray-800 hover:text-emerald-600 transition-colors duration-300 hover:translate-x-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

