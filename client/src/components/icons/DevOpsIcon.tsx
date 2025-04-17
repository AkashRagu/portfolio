import React from 'react';

export const DevOpsIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      className={className}
    >
      <defs>
        <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary-500)" />
          <stop offset="100%" stopColor="var(--accent-500)" />
        </linearGradient>
      </defs>
      <g fill="url(#devopsGradient)">
        <path d="M58 32c0-3.54-2.87-6.41-6.41-6.41-1 0-1.95.24-2.79.66A23.96 23.96 0 0032 16c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24c0-1.35-.12-2.67-.33-3.96.21-.51.33-1.07.33-1.63v-2.41zm-6.41-2.41c1.33 0 2.41 1.08 2.41 2.41v2.41c0 1.33-1.08 2.41-2.41 2.41-1.33 0-2.41-1.08-2.41-2.41v-2.41c0-1.33 1.08-2.41 2.41-2.41zM32 16c11.05 0 20 8.95 20 20s-8.95 20-20 20-20-8.95-20-20 8.95-20 20-20z"/>
        <path d="M32 44c6.63 0 12-5.37 12-12s-5.37-12-12-12-12 5.37-12 12 5.37 12 12 12zm-6-12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z"/>
        <path d="M44 32c0 6.63-5.37 12-12 12s-12-5.37-12-12 5.37-12 12-12 12 5.37 12 12zm-18 0c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6-6 2.69-6 6z"/>
      </g>
    </svg>
  );
};

export default DevOpsIcon;