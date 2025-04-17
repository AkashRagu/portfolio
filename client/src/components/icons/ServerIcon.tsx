import React from 'react';

export const ServerIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      className={className}
    >
      <defs>
        <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--secondary-400)" />
          <stop offset="100%" stopColor="var(--accent-500)" />
        </linearGradient>
      </defs>
      <g fill="url(#serverGradient)">
        <path d="M52 12H12c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h40c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4zm0 12H12v-8h40v8zm0 8H12c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h40c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4zm0 12H12v-8h40v8z"/>
        <circle cx="18" cy="18" r="2"/>
        <circle cx="18" cy="42" r="2"/>
        <circle cx="26" cy="18" r="2"/>
        <circle cx="26" cy="42" r="2"/>
      </g>
    </svg>
  );
};

export default ServerIcon;