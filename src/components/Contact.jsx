import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      showNotification('Thank you for your enquiry! We will get back to you soon.', 'success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 md:mb-8">Get In Touch</h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-4 group cursor-pointer p-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 min-h-[80px]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">Address</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Suryatantra Enterprises LLP<br />
                    S.no.: 143, Milkat No. 1094/3<br />
                    Opp. Green-Field Hotel, Sinhagad Road<br />
                    Dhayari, Pune - 411041 (India)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group cursor-pointer p-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 min-h-[60px]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">Phone</h4>
                  <p className="text-slate-600 text-sm md:text-base">(+91) 9730429324</p>
                </div>
              </div>

              <div className="flex gap-4 group cursor-pointer p-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 min-h-[60px]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">Email</h4>
                  <p className="text-slate-600 text-sm md:text-base">suryatantraa@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Follow Us</h4>
              <div className="flex gap-4 flex-wrap">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="group w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <i className="fab fa-facebook-f group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="group w-14 h-14 rounded-full bg-gradient-to-br from-blue-700 to-blue-800 text-white flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <i className="fab fa-linkedin-in group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                   className="group w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 text-white flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <i className="fab fa-instagram group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="https://wa.me/919730429324" target="_blank" rel="noopener noreferrer"
                   className="group w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <i className="fab fa-whatsapp group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-emerald-50/50 p-6 md:p-8 rounded-2xl shadow-xl border-2 border-emerald-100">
            <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 md:py-3 rounded-lg border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white hover:border-emerald-300 text-base min-h-[44px]"
                />
                <i className="fas fa-user absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 md:py-3 rounded-lg border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white hover:border-emerald-300 text-base min-h-[44px]"
                />
                <i className="fas fa-phone absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 md:py-3 rounded-lg border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white hover:border-emerald-300 text-base min-h-[44px]"
                />
                <i className="fas fa-envelope absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 md:py-3 rounded-lg border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-y bg-white hover:border-emerald-300 text-base min-h-[100px]"
                ></textarea>
                <i className="fas fa-comment absolute right-4 top-5 md:top-4 text-slate-400"></i>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 md:py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 shadow-lg hover:shadow-xl overflow-hidden min-h-[48px] text-base"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {notification && (
        <div className={`fixed top-20 left-4 right-4 md:top-24 md:left-auto md:right-5 z-50 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-2xl text-white animate-slide-in flex items-center gap-3 text-sm md:text-base max-w-md mx-auto md:mx-0 ${
          notification.type === 'success' 
            ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
            : 'bg-gradient-to-r from-red-500 to-rose-500'
        }`}>
          <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} text-lg md:text-xl`}></i>
          <span>{notification.message}</span>
        </div>
      )}
    </section>
  );
};

export default Contact;

