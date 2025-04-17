import React from 'react';

export const CloudIcon: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      className={className}
    >
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary-400)" />
          <stop offset="100%" stopColor="var(--secondary-500)" />
        </linearGradient>
      </defs>
      <g fill="url(#cloudGradient)">
        <path d="M50.5 30.12c-.52-9.26-8.35-16.62-17.82-16.62-8.25 0-15.24 5.49-17.28 13.01a11.93 11.93 0 00-6.9 10.74c0 6.62 5.38 12 12 12h29c6.07 0 11-4.93 11-11 0-5.28-3.73-9.72-8.78-10.77A14 14 0 0050.5 30.12zM49.5 45.25h-29c-4.41 0-8-3.59-8-8a7.95 7.95 0 015.75-7.65l1.53-.39.38-1.54c1.64-6.58 7.61-11.17 14.52-11.17 8.17 0 14.81 6.46 14.99 14.39l.04 1.78 1.72.45a7.01 7.01 0 015.57 6.83c0 3.86-3.14 7-7 7z"/>
      </g>
    </svg>
  );
};

export default CloudIcon;