import React from 'react';

export const CodeIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      className={className}
    >
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent-400)" />
          <stop offset="100%" stopColor="var(--primary-500)" />
        </linearGradient>
      </defs>
      <g fill="url(#codeGradient)">
        <path d="M43.71 18.87l-14 28a2 2 0 103.58 1.79l14-28a2 2 0 10-3.58-1.79zM19.64 22.24a2 2 0 000 2.83L28.17 32l-8.53 6.93a2 2 0 002.54 3.12l10-8.12a2 2 0 000-3.12l-10-8.12a2 2 0 00-2.54.24zM44.36 22.24a2 2 0 00-2.54.24l-10 8.12a2 2 0 000 3.12l10 8.12a2 2 0 002.54-3.12L35.83 32l8.53-6.93a2 2 0 000-2.83z"/>
      </g>
    </svg>
  );
};

export default CodeIcon;