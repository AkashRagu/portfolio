import React from 'react';

interface BackgroundGradientProps {
  className?: string;
  variant?: 'default' | 'subtle' | 'primary';
  position?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  className = '',
  variant = 'default',
  position = 'bottom',
  size = 'md',
}) => {
  // Gradient styles based on variant
  const variantStyles = {
    default: "from-primary-300/20 via-secondary-300/20 to-accent-300/20",
    subtle: "from-neutral-200/40 via-neutral-100/30 to-neutral-50/20 dark:from-neutral-800/30 dark:via-neutral-700/20 dark:to-neutral-900/10",
    primary: "from-primary/40 via-primary/20 to-primary/5",
  };

  // Position styles
  const positionStyles = {
    top: "bg-gradient-to-b",
    bottom: "bg-gradient-to-t",
    left: "bg-gradient-to-r",
    right: "bg-gradient-to-l",
  };

  // Size styles
  const sizeStyles = {
    sm: "h-32 w-32",
    md: "h-64 w-64",
    lg: "h-96 w-96",
  };

  const gradientClasses = `absolute blur-3xl opacity-50 rounded-full ${variantStyles[variant]} ${positionStyles[position]} ${sizeStyles[size]} ${className}`;

  return <div className={gradientClasses} />;
};

interface BackgroundGradientsProps {
  className?: string;
}

export const BackgroundGradients: React.FC<BackgroundGradientsProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      <BackgroundGradient position="top" className="-top-24 -left-20" variant="primary" />
      <BackgroundGradient position="bottom" className="bottom-0 right-0" variant="default" />
      <BackgroundGradient position="left" className="top-1/3 -left-20" variant="subtle" size="sm" />
      <BackgroundGradient position="right" className="top-2/3 right-10" variant="subtle" size="sm" />
    </div>
  );
};