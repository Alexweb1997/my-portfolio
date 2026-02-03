import { Github, Linkedin, Mail, Download } from 'lucide-react';
import avatarImage from 'figma:asset/7ed74a53b40349c49240013933ebbe2f0800efb5.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background with blue fade bubbles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-25 blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-200 rounded-full opacity-25 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        {/* Welcome badge */}
        <div className="mb-6">
          <span className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-md text-gray-700">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Welcome
          </span>
        </div>

        <div className="mb-8">
          <img 
            src={avatarImage} 
            alt="Uchenna Emmanuel Onyeisi" 
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover object-top border-8 border-blue-600 shadow-lg"
          />
        </div>
        
        <div className="text-sm text-blue-600 mb-2">
          Hello, I'm
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
          <span className="font-bold text-black">Uchenna Emmanuel</span>
          <br/>
          <span className="font-bold text-blue-600">Onyeisi</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Full Stack Developer
        </p>
        
        <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed md:leading-normal text-center px-2">
          I am a versatile software developer specializing in both web and mobile app development. I build modern, responsive applications and have hands-on experience across the full stack. I'm passionate about technology, innovation, and creating clean, user-focused solutions. I'm highly motivated, collaborative, and always excited to learn and take on new challenges.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-3 md:space-y-0 mb-10 md:mb-12 items-center w-full max-w-xs sm:max-w-none mx-auto">
          <a href="#contact" className="w-full md:w-auto bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-center">
            Get In Touch
          </a>
          <a href="#projects" className="w-full md:w-auto border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors text-center">
            View Work
          </a>
          <a href="/CV.pdf" download className="w-full md:w-auto border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors inline-flex items-center gap-2 justify-center text-center">
            <Download size={20} />
            Download CV
          </a>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Alexweb1997" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/uchenna-onyeisi-4772b06/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:Onyeisiuchenna@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Mail size={28} />
          </a>
          <a href="/resume.pdf" download className="text-gray-600 hover:text-gray-900 transition-colors">
            <Download size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}