import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-3 md:space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">About Us</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Products</Link></li>
              <li><a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-emerald-400">Products</h3>
            <ul className="space-y-3 md:space-y-2">
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Drills</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Routers</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">V Cut Blades</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Routing Brushes</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Locating Pins</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-emerald-400">More Products</h3>
            <ul className="space-y-3 md:space-y-2">
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Carlson Pins</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Spindle and Spares</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Rings Setting Machine</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">DLR</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Drill Rings</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block py-2 px-1 min-h-[44px] flex items-center">Bearing</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            &copy; <span className="text-emerald-400 font-semibold">SURYATANTRA</span>, All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

