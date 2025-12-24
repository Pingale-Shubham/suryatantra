import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const scrollToContact = () => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          
          <ul className={`hidden md:flex items-center gap-3`}>
            <li>
              <Link 
                to="/" 
                className={`px-5 py-2 rounded-full font-medium transition-all duration-500 ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                    : 'bg-emerald-50/50 border border-emerald-200 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`px-5 py-2 rounded-full font-medium transition-all duration-500 ${
                  isActive('/about') 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                    : 'bg-emerald-50/50 border border-emerald-200 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={`px-5 py-2 rounded-full font-medium transition-all duration-500 ${
                  isActive('/products') 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                    : 'bg-emerald-50/50 border border-emerald-200 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105'
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <button 
                onClick={scrollToContact}
                className="px-5 py-2 rounded-full font-medium bg-emerald-50/50 border border-emerald-200 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105 transition-all duration-500"
              >
                Contact
              </button>
            </li>
          </ul>

          <button 
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <ul className="flex flex-col gap-4 py-4 px-2">
            <li>
              <Link 
                to="/" 
                onClick={closeMenu} 
                className={`block px-6 py-4 rounded-full font-medium transition-all duration-500 min-h-[44px] flex items-center ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                    : 'bg-emerald-50/50 border border-emerald-200 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={closeMenu} 
                className={`block px-6 py-4 rounded-full font-medium transition-all duration-500 min-h-[44px] flex items-center ${
                  isActive('/about') 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                    : 'bg-emerald-50/50 border border-emerald-200 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                onClick={closeMenu} 
                className={`block px-6 py-4 rounded-full font-medium transition-all duration-500 min-h-[44px] flex items-center ${
                  isActive('/products') 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' 
                    : 'bg-emerald-50/50 border border-emerald-200 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent'
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <button 
                onClick={scrollToContact}
                className="block w-full text-left px-6 py-4 rounded-full font-medium bg-emerald-50/50 border border-emerald-200 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-500 min-h-[44px] flex items-center"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

