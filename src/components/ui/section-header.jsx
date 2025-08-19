import React from 'react';
import { cn } from '../../lib/utils';
import { GradientText } from './gradient-text';

const SectionHeader = React.forwardRef(({ 
  className,
  title,
  subtitle,
  description,
  titleGradient = "from-blue-400 to-purple-400",
  centered = true,
  animationDelay = "0.5s",
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mb-16",
        centered && "text-center",
        className
      )}
      {...props}
    >
      <h2 
        className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fadeIn"
        style={{ animationDelay, animationFillMode: 'forwards' }}
      >
        {typeof title === 'string' ? (
          <GradientText gradient={titleGradient}>
            {title}
          </GradientText>
        ) : (
          title
        )}
        {subtitle && (
          <>
            <br />
            <span className="text-white">{subtitle}</span>
          </>
        )}
      </h2>
      {description && (
        <p 
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeIn"
          style={{ animationDelay: `calc(${animationDelay} + 0.3s)`, animationFillMode: 'forwards' }}
        >
          {description}
        </p>
      )}
    </div>
  );
});

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
