import { Code, Smartphone, Server, Database, Bot, Sparkles, Cpu, GitBranch, Zap, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 100, icon: Code },
      { name: 'CSS', level: 100, icon: Layers },
      { name: 'JavaScript', level: 100, icon: Code },
      { name: 'React', level: 100, icon: Zap },
      { name: 'Python', level: 100, icon: Code }
    ]
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 100, icon: Smartphone },
      { name: 'Flutter', level: 100, icon: Smartphone },
      { name: 'Dart', level: 100, icon: Code },
      { name: 'Kotlin', level: 100, icon: Smartphone },
      { name: 'Swift', level: 100, icon: Smartphone }
    ]
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 100, icon: Server },
      { name: 'Git/GitHub', level: 100, icon: GitBranch },
      { name: 'Firebase', level: 100, icon: Database },
      { name: 'Supabase', level: 100, icon: Database },
      { name: 'Postman', level: 100, icon: Zap }
    ]
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'Cursor AI', level: 100, icon: Cpu },
      { name: 'Claude AI', level: 100, icon: Bot },
      { name: 'ChatGPT', level: 100, icon: Sparkles }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <IconComponent size={20} className="text-blue-600" />
                          <span className="text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}