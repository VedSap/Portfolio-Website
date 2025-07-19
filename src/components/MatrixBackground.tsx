import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = '01';
    const createChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(char);

      char.addEventListener('animationend', () => {
        if (container.contains(char)) {
          container.removeChild(char);
        }
      });
    };

    const interval = setInterval(() => {
      if (container.children.length < 20) {
        createChar();
      }
    }, 500);
    return () => {
      clearInterval(interval);
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};

export default MatrixBackground;
