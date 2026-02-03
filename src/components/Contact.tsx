import { Mail, MapPin, Phone, Linkedin as LinkedinIcon, Github as GithubIcon } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl mb-6 text-white">Let's work together</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-[#334155] rounded-2xl p-4 border border-[#475569]">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Email</div>
                  <a href="mailto:Onyeisiuchenna@gmail.com" className="text-gray-300 hover:text-blue-400 break-all">
                    Onyeisiuchenna@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-[#334155] rounded-2xl p-4 border border-[#475569]">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Phone</div>
                  <a href="tel:+4915123548072" className="text-gray-300 hover:text-blue-400">
                    +49 15123548072
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-[#334155] rounded-2xl p-4 border border-[#475569]">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Location</div>
                  <div className="text-gray-300">Berlin, Germany</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-[#334155] rounded-2xl p-4 border border-[#475569]">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <LinkedinIcon className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/uchenna-onyeisi-4772b060/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 text-sm break-all">
                    www.linkedin.com/in/uchenna-onyeisi-4772b060/
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-[#334155] rounded-2xl p-4 border border-[#475569]">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GithubIcon className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">GitHub</div>
                  <a href="https://github.com/Alexweb1997" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                    github.com/Alexweb1997
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-white placeholder-gray-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#475569] text-center text-gray-300">
          <p>© 2026 Uchenna Emmanuel Onyeisi. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}