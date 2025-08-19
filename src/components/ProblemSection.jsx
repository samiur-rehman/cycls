import React from 'react';
import { Card, CardContent } from './ui/card';
import { StatsCard } from './ui/stats-card';
import { SectionHeader } from './ui/section-header';
import { GradientText } from './ui/gradient-text';

const ProblemSection = () => {
  const problemStats = [
    { label: "Months to Launch", value: "6-12", gradient: "from-red-400 to-orange-400" },
    { label: "Lines of Code", value: "10,000+", gradient: "from-orange-400 to-yellow-400" },
    { label: "Infrastructure Cost", value: "$100K+", gradient: "from-yellow-400 to-green-400" },
    { label: "With Cycls", value: "Minutes", gradient: "from-green-400 to-blue-400" }
  ];

  return (
    <section id="problem" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title={
            <>
              <GradientText gradient="from-red-400 to-orange-400">
                The Gap Between a Brilliant Agent
              </GradientText>
              <br />
              <span className="text-white">and a Viable Business is Immense.</span>
            </>
          }
          animationDelay="0.5s"
        />

        <div className="relative opacity-0 animate-fadeIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-3xl" />
          <Card className="relative bg-white/5 backdrop-blur-xl border-white/10 p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/20 group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-0">
              <p className="text-lg text-gray-300 leading-relaxed">
                You've built a powerful AI agent. But turning it into a real, commercial product is a maze of infrastructure, frontend boilerplate, authentication, and payment integrations. This friction kills speed and innovation.
              </p>
              <p className="text-xl font-semibold text-white mt-6">
                <GradientText gradient="from-red-400 to-orange-400">
                  Cycls is the platform designed to close that gap instantly.
                </GradientText>
              </p>
              
              {/* Interactive stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {problemStats.map((stat, index) => (
                  <StatsCard
                    key={index}
                    value={stat.value}
                    label={stat.label}
                    gradient={stat.gradient}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
