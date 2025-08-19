import React from 'react';
import { cn } from '../../lib/utils';
import { Card, CardContent, CardTitle, CardDescription } from './card';

const FeatureCard = React.forwardRef(({ 
  className,
  title,
  description,
  icon,
  step,
  gradient = "from-blue-500 to-cyan-500",
  animationDelay = "0s",
  showProgress = false,
  ...props 
}, ref) => {
  return (
    <div 
      className={cn("relative group opacity-0 animate-fadeIn", className)}
      style={{ animationDelay, animationFillMode: 'forwards' }}
    >
      <Card
        ref={ref}
        className="relative bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all h-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
        {...props}
      >
        <CardContent className="p-8">
          {icon && (
            <div className={cn(
              "inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300",
              `bg-gradient-to-r ${gradient}`
            )}>
              {icon}
            </div>
          )}
          
          {step && (
            <div className="text-6xl font-bold text-white/10 absolute top-4 right-4 group-hover:text-white/20 transition-colors duration-300">
              {step}
            </div>
          )}
          
          <CardTitle className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </CardTitle>
          
          <CardDescription className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </CardDescription>
          
          {showProgress && step && (
            <div className="mt-6 flex items-center space-x-2">
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className={cn(
                  "h-full rounded-full transition-all duration-1000 group-hover:w-full w-0",
                  `bg-gradient-to-r ${gradient}`
                )}></div>
              </div>
              <span className="text-xs text-gray-500">Step {step}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
