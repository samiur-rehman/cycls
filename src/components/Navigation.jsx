import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { GradientText } from './ui/gradient-text';

const Navigation = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  navigationItems, 
  handleSmoothScroll 
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 animate-pulse" />
              <div className="relative glass-strong px-3 py-1 rounded-lg">
                <GradientText
                  as="span"
                  className="text-2xl font-bold flex items-center gap-2"
                  gradient="from-blue-400 to-purple-400"
                >
                  <img src="https://cycls.com/cycls.ico" alt="Cycls" className="w-5 h-5" />
                  Cycls
                </GradientText>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
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
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-500"
              variant="outline"
            >
              <span className="relative">Start Building</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                className="md:hidden"
                variant="ghost"
                size="icon"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-white/10">
              <SheetHeader className="text-left">
                <SheetTitle>
                  <GradientText
                    className="text-2xl font-bold"
                    gradient="from-blue-400 to-purple-400"
                  >
                    Cycls
                  </GradientText>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-8">
                {navigationItems.map((item) => (
                  <a 
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href.slice(1))}
                    className="text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 mt-6"
                  size="lg"
                >
                  Start Building
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
