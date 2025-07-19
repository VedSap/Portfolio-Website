
import { Code, Palette, Zap, Trophy, Users, Coffee } from 'lucide-react';
import GlowCard from './GlowCard';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and modern patterns.'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating intuitive user interfaces that are both functional and aesthetically pleasing.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and exceptional user experience.'
    }
  ];

  const achievements = [
    { icon: Trophy, number: 3, label: 'Years of CR',suffix: ' ' },
    { icon: Trophy, number: 1, label: 'Year of Tech Lead at CSI',suffix: ' ' },
    /*{ icon: Users, number: 0, label: 'Happy Clients', suffix: '+' },*/
    { icon: Coffee, number: 1000, label: 'Cups of Coffee', suffix: '+' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            About <span className="neon-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer building web applications. 
            I love turning complex problems into simple, beautiful solutions through code and design.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <GlowCard key={achievement.label} className="p-8 text-center group">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary mb-4 group-hover:animate-bounce-slow">
                <achievement.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="mb-2">
                <AnimatedCounter 
                  end={achievement.number} 
                  suffix={achievement.suffix}
                />
              </div>
              <p className="text-muted-foreground font-medium">{achievement.label}</p>
            </GlowCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up space-y-6">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">My Journey</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a fresher in Computer Engineering with a passion for web development and design.
                I specialize in creating responsive, user-friendly web applications using modern technologies.
                I have a keen eye for detail and a love for crafting beautiful user interfaces.
                I am interested in exploring new technologies and continuously improving my skills.
                I love collaborating with others and sharing knowledge within the developer community.
                Interested in AIML and Quantum Computing, I am always eager to learn and grow in these fields.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new design trends or mentoring other developers in the community.
              </p>
            </div>
            
            {/* Skills Progress Bars */}
            <div className="space-y-4 pt-6">
              {[
                { skill: 'Frontend Development', percentage: 95 },
                { skill: 'AIML', percentage: 88 },
                { skill: 'Backend Development', percentage: 85 }
              ].map((item, index) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.skill}</span>
                    <span className="text-primary">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${item.percentage}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <GlowCard 
                key={index} 
                className="p-6 group hover:scale-105 transition-all duration-300" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-primary p-3 rounded-xl group-hover:animate-spin-slow transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-primary">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
