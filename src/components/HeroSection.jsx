import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import TypeWriter from './TypeWriter';
import CodePreview from './CodePreview';

const HeroSection = ({ heroRef }) => {
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20">
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center px-3 sm:px-4 py-2 my-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-white/10 backdrop-blur-sm animate-fadeIn mx-2" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <Sparkles className="w-4 h-4 mr-2 text-purple-400 animate-spin flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-300 text-center">Cycls is a delightful tool for creating and monetizing AI agents.</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <div className="flex flex-col items-center">
            <div className="mb-2 text-white animate-fadeIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <TypeWriter
                text="Go from AI Agent to"
                delay={70}
                showCursor={false}
                onComplete={() => { }}
              />
            </div>
            <div className="text-blue-400 min-h-[1em] animate-fadeIn" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              <TypeWriter
                phrases={[
                  "Business. Instantly... ",
                  "Revenue. Instantly... ",
                  "Scale. Instantly... ",
                  "Success. Instantly... ",
                  "Growth. Instantly... "
                ]}
                delay={70}
                loop={true}
              />
            </div>
          </div>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeIn px-4" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
          Cycls is the definitive platform for commercial AI agents. Our open-source framework and managed cloud transform your Python code into a scalable, monetizable business with a single decorator.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fadeIn px-4" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
          <Button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 relative overflow-hidden transition-all duration-200" size="lg">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center">
              <span className="hidden sm:inline">Start Building for Free</span>
              <span className="sm:hidden">Start Building</span>
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </Button>
          <Button 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-base sm:text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200" 
            variant="outline" 
            size="lg"
          >
            <span className="hidden sm:inline">View Documentation</span>
            <span className="sm:hidden">Documentation</span>
          </Button>
        </div>

        {/* Code preview */}
        <div className="mt-12 sm:mt-16 md:mt-20 relative animate-fadeIn px-2" style={{ animationDelay: '3.5s', animationFillMode: 'forwards' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
          <CodePreview />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
