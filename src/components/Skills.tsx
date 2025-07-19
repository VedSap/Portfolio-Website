
import { Badge } from '@/components/ui/badge';
import GlowCard from './GlowCard';
import { Code, Database, Palette, Zap, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'TypeScript', 'HTML', 'CSS', 'TailwindCSS', 'Styled Components'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Java', 'Python', 'SQL', 'MongoDB', 'Redis', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Design',
      icon: Palette,
      skills: ['Figma', 'Photoshop', 'Illustrator', 'Blender'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps',
      icon: Zap,
      skills: ['Docker', 'AWS', 'GitHub Actions'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['REST APIs', 'WebSockets'],
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            Skills & <span className="neon-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <GlowCard
              key={category.title}
              className="p-6 text-center animate-slide-up hover:rotate-1 transition-transform duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default transform hover:scale-105 glass-effect"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
