import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ChevronRight, Code2, Zap, DollarSign, Rocket, Terminal, Building2, ArrowRight, Menu, X, Github, Twitter, Sparkles, Globe, Shield, Server, Copy, Check, Linkedin } from 'lucide-react';
import TypeWriter from './components/TypeWriter';
import ParticleEffect from './components/ParticleEffect';
import CodePreview from './components/CodePreview';
import BackgroundShapes from './components/BackgroundShapes';
import './styles/animations.css';

const CyclsLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const glowStyle = useMemo(() => ({
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 40%)`,
  }), [mousePosition.x, mousePosition.y]);

  const navigationItems = [
    { href: '#problem', label: 'Problem' },
    { href: '#how', label: 'How it Works' },
    { href: '#developers', label: 'Developers' },
    { href: '#enterprise', label: 'Enterprise' }
  ];

  const howItWorksSteps = [
    {
      step: "1",
      title: "Write Your Agent",
      description: "Focus on what you do best. Write your agent's logic in a simple Python function. Our guided meta-agent can even help you get started, turning ideas into code even faster.",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      delay: "1.1s"
    },
    {
      step: "2",
      title: "Deploy Instantly",
      description: "Add our @cycls.agent decorator to your function. That's it. Cycls automatically packages your agent into a full-stack, serverless application with a pre-built frontend and API.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      delay: "1.4s"
    },
    {
      step: "3",
      title: "Monetize Immediately",
      description: "Launch your subscription business in minutes. Our managed platform comes with a built-in user pool and monetization, allowing you to charge for agent with a simple take-rate model.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      delay: "1.7s"
    }
  ];

  const problemStats = [
    { label: "Months to Launch", value: "6-12", color: "from-red-400 to-orange-400" },
    { label: "Lines of Code", value: "10,000+", color: "from-orange-400 to-yellow-400" },
    { label: "Infrastructure Cost", value: "$500K+", color: "from-yellow-400 to-green-400" },
    { label: "With Cycls", value: "Minutes", color: "from-green-400 to-blue-400" }
  ];

  const developerFeatures = [
    { icon: <Terminal />, label: "CLI-First Development" },
    { icon: <Globe />, label: "Global Edge Network" },
    { icon: <Shield />, label: "Enterprise Security" },
    { icon: <Server />, label: "Serverless Scale" }
  ];

  const enterpriseMetrics = [
    { value: "99.9%", label: "Uptime SLA", color: "text-purple-400" },
    { value: "SOC 2", label: "Compliance", color: "text-pink-400" },
    { value: "24/7", label: "Support", color: "text-blue-400" },
    { value: "KSA", label: "Data Residency", color: "text-green-400" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particle effect background */}
      <ParticleEffect />
      
      {/* Animated background */}
      <BackgroundShapes />
      <div className="fixed inset-0" style={glowStyle} />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 animate-pulse" />
                <div className="relative glass-strong px-3 py-1 rounded-lg">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Cycls</span>
                </div>  
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={(e) => handleSmoothScroll(e, item.href.slice(1))} 
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="px-4 py-2 glass-strong rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Start Building</span>
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navigationItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                onClick={(e) => handleSmoothScroll(e, item.href.slice(1))} 
                className="text-2xl hover:text-purple-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-lg">
              Start Building
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 my-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-white/10 backdrop-blur-sm animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <Sparkles className="w-4 h-4 mr-2 text-purple-400 animate-spin" />
            <span className="text-sm text-gray-300">Cycls is a delightful tool for creating and monetizing AI agents.</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
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

          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeIn" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
            Cycls is the definitive platform for commercial AI agents. Our open-source framework and managed cloud transform your Python code into a scalable, monetizable business with a single decorator.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:scale-105 relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                Start Building for Free
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all hover:border-white/20">
              View Documentation
            </button>
          </div>

          {/* Code preview */}
          <div className="mt-20 relative animate-fadeIn" style={{ animationDelay: '3.5s', animationFillMode: 'forwards' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
            <CodePreview />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                The Gap Between a Brilliant Agent
              </span>
              <br />
              <span className="text-white">and a Viable Business is Immense.</span>
            </h2>
          </div>

          <div className="relative opacity-0 animate-fadeIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/20 group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <p className="text-lg text-gray-300 leading-relaxed">
                  You've built a powerful AI agent. But turning it into a real, commercial product is a maze of infrastructure, frontend boilerplate, authentication, and payment integrations. This friction kills speed and innovation.
                </p>
                <p className="text-xl font-semibold text-white mt-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Cycls is the platform designed to close that gap instantly.
                </p>
                
                {/* Interactive stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {problemStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                From Code to Customer
              </span>
            </h2>
            <p className="text-2xl text-gray-400 opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>in Three Steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((item, index) => (
              <div key={index} className="relative group opacity-0 animate-fadeIn" style={{ animationDelay: item.delay, animationFillMode: 'forwards' }}>
                <div
                  className={`absolute inset-0 bg-gradient-to-r opacity-0 glass`}
                />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all h-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-6xl font-bold text-white/10 absolute top-4 right-4 group-hover:text-white/20 transition-colors duration-300">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center space-x-2">
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 group-hover:w-full w-0`}></div>
                    </div>
                    <span className="text-xs text-gray-500">Step {item.step}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Developers */}
      <section id="developers" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  A Zero-Config Dream
                </span>
                <br />
                <span className="text-white">for Builders.</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Cycls is built by developers, for developers. Our open-source core gives you ultimate flexibility, while our zero-config philosophy removes all the boilerplate. The Python SDK is all you need to learn. With perfect dev/prod parity, what you build locally is exactly what scales globally on our serverless infrastructure.
              </p>
              <button className="group px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all">
                Read the Docs
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
              <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <div className="space-y-4">
                  {developerFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center p-4 glass rounded-xl hover:bg-white/10 transition-all">
                      <div className="mr-4 text-cyan-400">{feature.icon}</div>
                      <span className="font-medium">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Enterprise */}
      <section id="enterprise" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {enterpriseMetrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 glass rounded-xl">
                        <div className={`text-3xl font-bold ${metric.color}`}>{metric.value}</div>
                        <div className="text-sm text-gray-400 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  A Complete
                </span>
                <br />
                <span className="text-white">Commercial Engine.</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Cycls is more than a tool; it's an economic engine. For startups, we provide a complete business-in-a-box, handling users, payments, and infrastructure so you can focus on your product. For enterprises, our sovereign managed cloud, hosted in Dammam, offers a flexible, enterprise-ready platform to build foundational AI capabilities within the Kingdom.
              </p>
              <button className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Contact Sales
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
            <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 glass rounded-3xl border border-white/10 p-12 md:p-16 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/30 group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Ready to Launch Your AI Business?
                  </span>
                </h2>
                <button className="group px-10 py-5 glass-strong rounded-xl font-semibold text-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:scale-105 relative overflow-hidden animate-fadeIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    Get Started for Free
                    <Rocket className="inline-block ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 animate-float" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t-2 border-white/10 py-12 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Cycls</span>
              <p className="text-sm text-gray-500 mt-2">© 2025 Cycls. Built in Riyadh, KSA</p>
              <p className="text-sm text-gray-400 mt-1">Developed By: <a href="https://www.linkedin.com/in/samiurrehman1/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline-none">Sami ur Rehman</a></p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/cycls" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/cycls_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/samiurrehman1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyclsLanding;