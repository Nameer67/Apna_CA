
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="logo flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent cursor-pointer">
              Apna CA
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#why-choose" className="text-gray-700 hover:text-blue-600 transition-colors">Why Choose</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Professional CA Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            ITR Filing, GST Registration & More Starting at Just ₹499
          </p>
          <div className="bg-white inline-block px-6 py-2 rounded-full shadow-lg">
            <span className="text-green-600 font-bold text-lg">✓ Clients Helped: 512+</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Services – Just ₹499
          </h2>
          <p className="text-center text-xl font-bold text-blue-600 mb-12">
            Expert CA Services Starting at ₹499 Only
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "ITR Filing",
              "GST Registration", 
              "GST Return Filing",
              "GST Notice Reply",
              "VAT Notice Assistance",
              "MSME Registration",
              "Trademark Registration",
              "Balance Sheet",
              "TDS Return Filing"
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-green-600 text-2xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "💰", title: "Affordable & Transparent Pricing", desc: "No hidden charges, clear pricing" },
              { icon: "⚡", title: "Fast Online Process", desc: "Quick turnaround time" },
              { icon: "👨‍💼", title: "Experienced CA & Support Team", desc: "Professional expertise" },
              { icon: "😊", title: "500+ Happy Clients", desc: "Trusted by many" }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Clients Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">"Quick and Affordable CA Help! Very satisfied with their service."</p>
              <div className="font-semibold text-blue-600">- Rajesh Kumar</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">"Professional team, got my ITR filed in just 2 days!"</p>
              <div className="font-semibold text-green-600">- Priya Sharma</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Contact Us
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 text-xl">📞</span>
                    <div>
                      <p className="font-semibold">Mobile</p>
                      <a href="tel:7088075694" className="text-blue-600 hover:underline">7088075694</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 text-xl">📧</span>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:citiannameer@gmail.com" className="text-blue-600 hover:underline">citiannameer@gmail.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://wa.me/917088075694?text=Hello%20I%20want%20to%20inquire%20about%20your%20CA%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    🟢 Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Inquiry Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Inquiry</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your mobile number"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Select Service</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Choose a service</option>
                    <option value="itr">ITR Filing</option>
                    <option value="gst-reg">GST Registration</option>
                    <option value="gst-return">GST Return Filing</option>
                    <option value="gst-notice">GST Notice Reply</option>
                    <option value="vat-notice">VAT Notice Assistance</option>
                    <option value="msme">MSME Registration</option>
                    <option value="trademark">Trademark Registration</option>
                    <option value="balance-sheet">Balance Sheet</option>
                    <option value="tds-return">TDS Return Filing</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
                Apna CA
              </h3>
              <p className="text-gray-300">
                Professional CA services at affordable prices. Your trusted partner for all tax and compliance needs.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Our Services</a>
                <a href="#why-choose" className="block text-gray-300 hover:text-white transition-colors">Why Choose Us</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </div>
              
              <div className="mt-4 flex space-x-4">
                <a href="mailto:citiannameer@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  📧
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  💼
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Apna CA. All rights reserved. | Expert CA Services Starting at ₹499</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
