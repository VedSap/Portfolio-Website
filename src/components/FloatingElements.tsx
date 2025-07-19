
import { Code2, Sparkles, Zap, Globe, Database, Palette } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { icon: Code2, position: 'top-20 left-10', delay: '0s' },
    { icon: Sparkles, position: 'top-40 right-20', delay: '1s' },
    { icon: Zap, position: 'bottom-40 left-20', delay: '2s' },
    { icon: Globe, position: 'top-60 right-10', delay: '0.5s' },
    { icon: Database, position: 'bottom-20 right-40', delay: '1.5s' },
    { icon: Palette, position: 'bottom-60 left-40', delay: '2.5s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((Element, index) => (
        <div
          key={index}
          className={`absolute ${Element.position} floating-animation opacity-20`}
          style={{ animationDelay: Element.delay }}
        >
          <Element.icon className="h-8 w-8 text-primary" />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
