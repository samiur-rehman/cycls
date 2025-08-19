import React from 'react';
import { cn } from '../../lib/utils';

const GradientText = React.forwardRef(({ 
  className, 
  gradient = "from-blue-400 to-purple-400",
  children,
  as = "span",
  ...props 
}, ref) => {
  const Component = as;
  
  return (
    <Component
      ref={ref}
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradient,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

GradientText.displayName = "GradientText";

export { GradientText };
