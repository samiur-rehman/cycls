import React from 'react';
import { Code2, Zap, DollarSign } from 'lucide-react';
import { FeatureCard } from './ui/feature-card';
import { SectionHeader } from './ui/section-header';

const HowItWorksSection = () => {
  const howItWorksSteps = [
    {
      step: "1",
      title: "Write Your Agent",
      description: "Focus on what you do best. Write your agent's logic in a simple Python function. Our guided meta-agent can even help you get started, turning ideas into code even faster.",
      icon: <Code2 className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      animationDelay: "1.1s"
    },
    {
      step: "2",
      title: "Deploy Instantly",
      description: "Add our @cycls.agent decorator to your function. That's it. Cycls automatically packages your agent into a full-stack, serverless application with a pre-built frontend and API.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      animationDelay: "1.4s"
    },
    {
      step: "3",
      title: "Monetize Immediately",
      description: "Launch your subscription business in minutes. Our managed platform comes with a built-in user pool and monetization, allowing you to charge for agent with a simple take-rate model.",
      icon: <DollarSign className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      animationDelay: "1.7s"
    }
  ];

  return (
    <section id="how" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="From Code to Customer"
          subtitle="in Three Steps."
          titleGradient="from-green-400 to-blue-400"
          animationDelay="0.5s"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {howItWorksSteps.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              step={item.step}
              gradient={item.gradient}
              animationDelay={item.animationDelay}
              showProgress={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
