import React from 'react';
import { cn } from '../../lib/utils';
import { Card, CardContent } from './card';

const StatsCard = React.forwardRef(({ 
  className,
  value,
  label,
  valueClassName,
  labelClassName,
  gradient = "text-blue-400",
  ...props 
}, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        "text-center bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105",
        className
      )}
      {...props}
    >
      <CardContent className="p-4">
        <div className={cn(
          "text-2xl font-bold",
          gradient.startsWith('text-') ? gradient : `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`,
          valueClassName
        )}>
          {value}
        </div>
        <div className={cn("text-sm text-gray-400 mt-1", labelClassName)}>
          {label}
        </div>
      </CardContent>
    </Card>
  );
});

StatsCard.displayName = "StatsCard";

export { StatsCard };
