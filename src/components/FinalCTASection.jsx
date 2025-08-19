import React from 'react';
import { Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle } from './ui/card';
import { GradientText } from './ui/gradient-text';

const FinalCTASection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
          <Card className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 glass border-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/30 group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-12 md:p-16">
              <CardTitle className="text-4xl md:text-5xl font-bold mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <GradientText gradient="from-white to-gray-300">
                  Ready to Launch Your AI Business?
                </GradientText>
              </CardTitle>
              <Button 
                className="group px-10 py-5 glass-strong text-xl hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 relative overflow-hidden animate-fadeIn" 
                style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
                size="lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  Get Started for Free
                  <Rocket className="inline-block ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 animate-float" />
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
