import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/VedSap', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vedant-sapkale-45b275257/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vedant.sapkale1404@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-secondary border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent mb-2">
              Vedant Sapkale
            </div>
            <p className="text-muted-foreground">
              Full-Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end">
              © {currentYear} Made by Vedant Sapkale with lots of ☕
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;