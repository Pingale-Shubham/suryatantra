import { useParams, Link, useNavigate } from 'react-router-dom';
import { productDetails } from '../data/productDetails';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productDetails[id];
  const productInfo = products.find(p => p.id === id);

  const openWhatsApp = (productName) => {
    const whatsappNumber = '919730429324';
    const message = encodeURIComponent(`Hello! I'm interested in ordering: ${productName}. Please provide more details.`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!product && !productInfo) {
    return (
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 min-h-screen">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">Product Not Found</h2>
          <p className="text-slate-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            <i className="fas fa-arrow-left"></i> Back to Products
          </Link>
        </div>
      </section>
    );
  }

  if (!product) {
    // Product not in database, show basic page
    const productName = productInfo?.name || id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    return (
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 min-h-screen">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-emerald-100">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">{productName}</h1>
            <p className="text-xl text-slate-600 mb-6">Contact us for detailed information and pricing</p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We offer high-quality {productName.toLowerCase()} solutions for your PCB manufacturing needs. 
              Our products are designed to meet the highest industry standards for precision, 
              durability, and performance. Contact our team to learn more about specifications, 
              pricing, and availability.
            </p>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl mb-8 border border-emerald-100">
              <h4 className="text-xl font-semibold text-emerald-700 mb-4">Get More Information</h4>
              <p className="text-slate-600">
                Our sales team is ready to provide you with detailed product information, 
                technical specifications, pricing, and delivery options. Get in touch with us today!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => openWhatsApp(productName)}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm md:text-base"
              >
                <i className="fab fa-whatsapp"></i> Order Now / Get Quote
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm md:text-base"
              >
                <i className="fas fa-envelope"></i> Contact Us
              </button>
              <Link 
                to="/products"
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm md:text-base"
              >
                <i className="fas fa-arrow-left"></i> Back to Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="w-full h-96 md:h-[500px] rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">{product.name}</h1>
                <p className="text-xl text-slate-600 mb-4">{product.subtitle}</p>
                <p className="text-lg text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-emerald-700 mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <i className="fas fa-check text-emerald-600 mt-1"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                <h4 className="text-xl font-semibold text-emerald-700 mb-4">Specifications</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-sm text-slate-500 mb-1">{key}</span>
                      <span className="text-base font-semibold text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => openWhatsApp(product.name)}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm md:text-base"
                >
                  <i className="fab fa-whatsapp"></i> Order Now
                </button>
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm md:text-base"
                >
                  <i className="fas fa-envelope"></i> Contact Us
                </button>
                <Link 
                  to="/products"
                  className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm md:text-base"
                >
                  <i className="fas fa-arrow-left"></i> Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

