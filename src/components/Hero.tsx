
import { ArrowDown, Github, Linkedin, Mail, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCounter from './AnimatedCounter';
import GlowCard from './GlowCard';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold mb-6">
            <span className="block text-foreground mb-2 animate-slide-up">Hello, I'm</span>
            <span className="block neon-text animate-glow-pulse">
              Alex Johnson
            </span>
          </h1>
          
          {/* Subtitle with Typewriter Effect */}
          <div className="text-xl sm:text-2xl lg:text-4xl text-primary mb-8 font-semibold">
            <span className="animate-pulse">Full-Stack Developer</span>
            <span className="mx-4 text-accent animate-bounce">•</span>
            <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>UI/UX Designer</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I create <span className="text-primary font-semibold">beautiful</span>, 
            <span className="text-accent font-semibold"> functional</span> web applications that solve real-world problems. 
            Passionate about clean code, great design, and cutting-edge technologies.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <GlowCard className="p-4 text-center">
              <AnimatedCounter end={50} suffix="+" />
              <p className="text-sm text-muted-foreground mt-1">Projects</p>
            </GlowCard>
            <GlowCard className="p-4 text-center">
              <AnimatedCounter end={5} suffix="+" />
              <p className="text-sm text-muted-foreground mt-1">Years</p>
            </GlowCard>
            <GlowCard className="p-4 text-center">
              <AnimatedCounter end={100} suffix="%" />
              <p className="text-sm text-muted-foreground mt-1">Satisfied</p>
            </GlowCard>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-500 transform hover:scale-105 text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:scale-105 text-lg px-8 py-4 glass-effect"
            >
              Get In Touch
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-12">
            {[
              { icon: Github, label: 'GitHub', href: '#' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Mail, label: 'Email', href: '#' }
            ].map((social, index) => (
              <a 
                key={social.label}
                href={social.href} 
                className="relative group"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-card/30 backdrop-blur-sm p-4 rounded-full border border-border/30 hover:border-primary/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </a>
            ))}
          </div>

          {/* Animated Scroll Indicator */}
          <div className="relative">
            <div className="absolute inset-0 pulse-ring w-12 h-12 rounded-full mx-auto"></div>
            <div className="relative animate-bounce-slow">
              <ArrowDown className="h-8 w-8 text-primary mx-auto cursor-pointer hover:text-accent transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
