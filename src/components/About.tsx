import { Code, Palette, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 mb-6">
            I am a versatile software developer specializing in both web and mobile app development. 
            I build modern, responsive applications and have hands-on experience across the full stack.
          </p>
          <p className="text-lg text-gray-600">
            I'm passionate about technology, innovation, and creating clean, user-focused solutions. 
            I'm highly motivated, collaborative, and always excited to learn and take on new challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl mb-3">Full Stack Development</h3>
            <p className="text-gray-600">
              Experience building complete applications from front-end to back-end with modern technologies
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl mb-3">Mobile Development</h3>
            <p className="text-gray-600">
              Creating cross-platform mobile applications with Flutter and React Native
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl mb-3">Payment Solutions</h3>
            <p className="text-gray-600">
              Delivering secure, high-performance mobile experiences for digital payment systems
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl text-center mb-8">Experience</h3>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6 pb-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl">Mobile App Developer</h4>
                  <p className="text-gray-600">Flutterwave</p>
                </div>
                <div className="text-right text-gray-500">
                  <p>March 2023 - November 2025</p>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                I design, build, and maintain mobile applications that power Flutterwave's payment solutions. 
                I collaborate closely with product managers, designers, and backend engineers to deliver secure, 
                high-performance mobile experiences.
              </p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Collaborated with teams to deliver secure, high-performance experiences</li>
                <li>Integrated APIs and improved app reliability and performance</li>
                <li>Implemented new features enabling seamless digital payments across multiple markets</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 pb-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl">Mobile App Development Intern</h4>
                  <p className="text-gray-600">SkySkillHub</p>
                </div>
                <div className="text-right text-gray-500">
                  <p>September 2021 - November 2022</p>
                  <p>Enugu, Nigeria</p>
                </div>
              </div>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Developed cross-platform mobile applications using Flutter and React Native</li>
                <li>Integrated REST APIs to enable real-time data handling within the app</li>
                <li>Participated in testing, identifying bugs, and preparing builds for deployment</li>
                <li>Implemented navigation, state management, and reusable widgets/components</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 pb-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl">Web Development Intern</h4>
                  <p className="text-gray-600">SkySkillHub</p>
                </div>
                <div className="text-right text-gray-500">
                  <p>January 2019 - August 2021</p>
                  <p>Enugu, Nigeria</p>
                </div>
              </div>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Designed and developed responsive websites using HTML, CSS, and JavaScript</li>
                <li>Built mobile-friendly layouts using Flexbox, Grid, and modern front-end practices</li>
                <li>Collaborated with designers to translate UI/UX wireframes into functional webpages</li>
                <li>Used Git/GitHub for version control and team collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-3xl text-center mb-8">Education</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h4 className="text-xl mb-2">Higher National Diploma (HND)</h4>
                <p className="text-gray-600">Computer Science</p>
                <p className="text-gray-600">Institute of Management & Technology</p>
              </div>
              <div className="text-right text-gray-500">
                <p>February 2019 - January 2022</p>
                <p>Enugu, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}