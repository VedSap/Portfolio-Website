
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
  style?: React.CSSProperties;
}

const GlowCard = ({ children, className = '', glowIntensity = 'medium', style }: GlowCardProps) => {
  const glowClasses = {
    low: 'hover:shadow-card',
    medium: 'hover:shadow-elegant',
    high: 'hover:shadow-glow'
  };

  return (
    <Card className={`glass-effect transition-all duration-500 hover:-translate-y-2 ${glowClasses[glowIntensity]} ${className}`} style={style}>
      <CardContent className="relative overflow-hidden">
        {children}
      </CardContent>
    </Card>
  );
};

export default GlowCard;
