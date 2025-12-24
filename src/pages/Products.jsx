import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(4);
  
  // Update visible products based on screen size
  useEffect(() => {
    const updateVisibleProducts = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleProducts(1);
      } else if (width < 1024) {
        setVisibleProducts(2);
      } else {
        setVisibleProducts(4);
      }
    };

    updateVisibleProducts();
    window.addEventListener('resize', updateVisibleProducts);
    return () => window.removeEventListener('resize', updateVisibleProducts);
  }, []);

  // Auto-slide every 1 second (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= Math.max(0, products.length - visibleProducts) ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, visibleProducts]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? Math.max(0, products.length - visibleProducts) : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= Math.max(0, products.length - visibleProducts) ? 0 : prev + 1));
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Precision Machining Tools & Components for PCB Manufacturing
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-12 h-12 md:w-12 md:h-12 bg-white rounded-full shadow-lg border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group min-w-[44px] min-h-[44px]"
            aria-label="Previous products"
          >
            <i className="fas fa-chevron-left text-emerald-600 group-hover:text-emerald-700 transition-colors text-lg"></i>
          </button>

          {/* Slider Viewport */}
          <div className="overflow-hidden mx-8 md:mx-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="px-3"
                  style={{ width: `${100 / visibleProducts}%`, flexShrink: 0 }}
                >
                  <div className="group bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-transparent hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full cursor-pointer" onClick={() => window.location.href = `/product/${product.id}`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-full h-40 md:h-44 mb-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-500"></div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 text-center group-hover:text-emerald-600 transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center px-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 text-center min-h-[2.5rem] px-2">{product.description}</p>
                    
                    <Link 
                      to={`/product/${product.id}`}
                      className="block relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg overflow-hidden group/btn min-h-[44px] flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        View Product
                        <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-12 h-12 md:w-12 md:h-12 bg-white rounded-full shadow-lg border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group min-w-[44px] min-h-[44px]"
            aria-label="Next products"
          >
            <i className="fas fa-chevron-right text-emerald-600 group-hover:text-emerald-700 transition-colors text-lg"></i>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap max-w-xl mx-auto">
          {Array.from({ length: Math.max(1, products.length - visibleProducts + 1) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-emerald-600 w-6' 
                  : 'bg-emerald-200 hover:bg-emerald-300'
              }`}
            />
          ))}
        </div>

        {/* Product Counter */}
        <div className="text-center mt-4 text-slate-500">
          Showing <span className="font-semibold text-emerald-600">{currentIndex + 1}-{Math.min(currentIndex + visibleProducts, products.length)}</span> of {products.length}
        </div>
      </div>
    </section>
  );
};

export default Products;
