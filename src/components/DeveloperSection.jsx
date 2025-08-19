import React from 'react';
import { ArrowRight, Terminal, Globe, Shield, Server } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { GradientText } from './ui/gradient-text';

const DeveloperSection = () => {
  const developerFeatures = [
    { icon: <Terminal />, label: "CLI-First Development" },
    { icon: <Globe />, label: "Global Edge Network" },
    { icon: <Shield />, label: "Enterprise Security" },
    { icon: <Server />, label: "Serverless Scale" }
  ];

  return (
    <section id="developers" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <GradientText gradient="from-cyan-400 to-blue-400">
                A Zero-Config Dream
              </GradientText>
              <br />
              <span className="text-white">for Builders.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Cycls is built by developers, for developers. Our open-source core gives you ultimate flexibility, while our zero-config philosophy removes all the boilerplate. The Python SDK is all you need to learn. With perfect dev/prod parity, what you build locally is exactly what scales globally on our serverless infrastructure.
            </p>
            <Button 
              className="group px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10" 
              variant="outline"
            >
              Read the Docs
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
            <Card className="relative bg-black/50 backdrop-blur-xl border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {developerFeatures.map((feature, i) => (
                    <Card key={i} className="glass border-white/10 hover:bg-white/10 transition-all">
                      <CardContent className="flex items-center p-4">
                        <div className="mr-4 text-cyan-400">{feature.icon}</div>
                        <span className="font-medium">{feature.label}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
