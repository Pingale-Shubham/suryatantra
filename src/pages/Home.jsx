import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { products } from '../data/products';

const Home = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white pt-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-5 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Suryatantra Enterprises LLP
              </h1>
              <p className="text-xl md:text-2xl font-medium text-emerald-50">
                Empowering PCB Manufacturers with Top-Quality Supplies
              </p>
              <p className="text-lg text-emerald-100 leading-relaxed">
                Explore our comprehensive range of precision machining tools and components for PCB manufacturing. 
                From drilling solutions to routing equipment, we provide exceptional quality and cost-effective products.
              </p>
              <button 
                onClick={scrollToProducts}
                className="group relative bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore More
                  <i className="fas fa-arrow-down group-hover:translate-y-1 transition-transform duration-300"></i>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img 
                  src="/Images/SELECTED/0Y6A82989.png" 
                  alt="Suryatantra Hero Image" 
                  className="relative w-full max-w-md rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
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

      {/* Components Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Precision Machining Tools & Components for PCB Manufacturing
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                At Suryatantra, we utilize a wide range of advanced machining tools to ensure precision and 
                efficiency in our PCB manufacturing process. This collection of high-quality tools includes 
                specialized drilling bits, routing blades, and cutting components designed to handle the 
                intricacies of PCB fabrication.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                These tools enable accurate drilling, cutting, and shaping of circuit boards, ensuring 
                top-notch quality and performance for our clients. Our state-of-the-art equipment is sourced 
                from trusted partners and optimized for both small-scale and large-scale production needs, 
                maintaining consistency and precision across all projects.
              </p>
            </div>
            <div className="flex justify-center group">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src="/Images/SELECTED/pmt.jpg" 
                  alt="Precision Machining Tools" 
                  className="relative w-full max-w-lg rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default Home;

