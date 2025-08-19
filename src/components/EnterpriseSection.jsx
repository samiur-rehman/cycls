import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { StatsCard } from './ui/stats-card';
import { GradientText } from './ui/gradient-text';

const EnterpriseSection = () => {
  const enterpriseMetrics = [
    { value: "99.9%", label: "Uptime SLA", color: "text-purple-400" },
    { value: "SOC 2", label: "Compliance", color: "text-pink-400" },
    { value: "24/7", label: "Support", color: "text-blue-400" },
    { value: "KSA", label: "Data Residency", color: "text-green-400" }
  ];

  return (
    <section id="enterprise" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
              <Card className="relative bg-white/5 backdrop-blur-xl border-white/10">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {enterpriseMetrics.map((metric, index) => (
                      <StatsCard
                        key={index}
                        value={metric.value}
                        label={metric.label}
                        gradient={metric.color}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <GradientText gradient="from-purple-400 to-pink-400">
                A Complete
              </GradientText>
              <br />
              <span className="text-white">Commercial Engine.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Cycls is more than a tool; it's an economic engine. For startups, we provide a complete business-in-a-box, handling users, payments, and infrastructure so you can focus on your product. For enterprises, our sovereign managed cloud, hosted in Dammam, offers a flexible, enterprise-ready platform to build foundational AI capabilities within the Kingdom.
            </p>
            <Button 
              className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Contact Sales
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
