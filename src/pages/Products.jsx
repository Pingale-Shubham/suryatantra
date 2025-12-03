import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white to-emerald-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Precision Machining Tools & Components for PCB Manufacturing
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-emerald-300 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col relative overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-full h-32 mb-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-500"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="relative w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 min-h-[3rem] group-hover:text-emerald-600 transition-colors duration-300">{product.name}</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">{product.description}</p>
              <Link 
                to={`/product/${product.id}`}
                className="relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg overflow-hidden group/btn"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Product
                  <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

