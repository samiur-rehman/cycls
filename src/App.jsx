import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import ParticleEffect from './components/ParticleEffect';
import BackgroundShapes from './components/BackgroundShapes';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import HowItWorksSection from './components/HowItWorksSection';
import DeveloperSection from './components/DeveloperSection';
import EnterpriseSection from './components/EnterpriseSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden dark">
      {/* Particle effect background */}
      <ParticleEffect />

      {/* Animated background */}
      <BackgroundShapes />
      <div className="fixed inset-0" style={glowStyle} />

      {/* Navigation */}
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigationItems={navigationItems}
        handleSmoothScroll={handleSmoothScroll}
      />



      {/* Hero Section */}
      <HeroSection heroRef={heroRef} />

      {/* Problem Section */}
      <ProblemSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* For Developers */}
      <DeveloperSection />

      {/* For Enterprise */}
      <EnterpriseSection />

      {/* Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CyclsLanding;