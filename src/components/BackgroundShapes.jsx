import React from 'react';

const BackgroundShapes = React.memo(() => {
  return (
    <div className="fixed inset-0 opacity-40">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
      
      {/* Floating geometric shapes - Enhanced pattern */}
      <div className="absolute top-20 left-20 w-40 h-40 border border-blue-500/20 rounded-full animate-float-slow" />
      <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg rotate-45 animate-float" />
      <div className="absolute bottom-40 left-32 w-28 h-28 border border-cyan-500/20 rounded-lg animate-float-reverse" />
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full animate-float-slow" />
      
      {/* Additional shapes for richer pattern */}
      <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-500/15 to-rose-500/15 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-2/3 right-1/4 w-28 h-28 border-2 border-emerald-500/20 rotate-12 animate-float-reverse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-lg animate-float-slow" style={{ animationDelay: '1.5s' }} />
      
      {/* Triangle shapes */}
      <div className="absolute top-1/4 right-1/3 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-cyan-500/20 animate-float" style={{ animationDelay: '0.8s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[36px] border-t-pink-500/20 animate-float-reverse" style={{ animationDelay: '1.2s' }} />
      
      {/* Hexagon shapes */}
      <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 animate-float-slow" style={{ 
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        animationDelay: '0.3s'
      }} />
      <div className="absolute bottom-1/3 right-1/6 w-28 h-28 border border-yellow-500/20 animate-float" style={{ 
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        animationDelay: '0.7s'
      }} />
      
      {/* Diamond shapes */}
      <div className="absolute top-3/4 left-1/2 w-20 h-20 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rotate-45 animate-float-reverse" style={{ animationDelay: '0.4s' }} />
      <div className="absolute top-1/6 right-1/6 w-24 h-24 border border-orange-500/20 rotate-45 animate-float-slow" style={{ animationDelay: '0.9s' }} />
      
      {/* AI-Related Shapes - Neural Network Nodes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
      <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-blue-400/30 rounded-full animate-ping" style={{ animationDelay: '0.1s' }} />
      
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-purple-400/30 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
      
      <div className="absolute bottom-1/3 left-1/3 w-7 h-7 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-7 h-7 border-2 border-green-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
      
      {/* Circuit Board Elements */}
      <div className="absolute top-1/2 left-1/2 w-32 h-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="absolute top-1/2 left-1/2 w-2 h-32 bg-gradient-to-b from-purple-500/30 to-pink-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
      
      <div className="absolute top-1/3 right-1/4 w-24 h-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
      <div className="absolute top-1/3 right-1/4 w-1 h-20 bg-gradient-to-b from-blue-500/30 to-cyan-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
      
      {/* Data Flow Arrows */}
      <div className="absolute top-1/6 left-1/6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-blue-400/30 animate-float" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/6 left-1/6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-blue-400/20 animate-float" style={{ animationDelay: '0.7s', transform: 'translateY(8px)' }} />
      
      <div className="absolute bottom-1/6 right-1/6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[16px] border-t-purple-400/30 animate-float-reverse" style={{ animationDelay: '0.9s' }} />
      <div className="absolute bottom-1/6 right-1/6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[12px] border-t-purple-400/20 animate-float-reverse" style={{ animationDelay: '0.9s', transform: 'translateY(-8px)' }} />
      
      {/* AI Brain/Neural Network Pattern */}
      <div className="absolute top-1/5 right-1/5 w-16 h-16 border border-blue-400/20 rounded-full animate-float-slow" style={{ animationDelay: '1.1s' }} />
      <div className="absolute top-1/5 right-1/5 w-8 h-8 border border-purple-400/20 rounded-full animate-float" style={{ animationDelay: '1.3s' }} />
      <div className="absolute top-1/5 right-1/5 w-4 h-4 bg-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Binary/Data Stream Elements */}
      <div className="absolute top-2/3 left-1/5 w-12 h-1 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
      <div className="absolute top-2/3 left-1/5 w-8 h-1 bg-gradient-to-r from-emerald-400/40 to-teal-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s', transform: 'translateY(4px)' }} />
      <div className="absolute top-2/3 left-1/5 w-16 h-1 bg-gradient-to-r from-teal-400/40 to-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.7s', transform: 'translateY(8px)' }} />
      
      {/* Futuristic Tech Shapes */}
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-orange-400/20 rounded-lg animate-float" style={{ 
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
        animationDelay: '0.4s'
      }} />
      
      <div className="absolute top-1/4 right-1/6 w-16 h-16 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 animate-float-reverse" style={{ 
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        animationDelay: '0.6s'
      }} />
      
      {/* Small decorative elements */}
      <div className="absolute top-1/5 left-1/5 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="absolute top-2/5 right-1/5 w-5 h-5 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
      <div className="absolute bottom-1/5 left-2/5 w-7 h-7 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
      <div className="absolute bottom-2/5 right-2/5 w-6 h-6 bg-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
      
      {/* Large background elements */}
      <div className="absolute top-0 left-0 w-80 h-80 border border-blue-500/10 rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-purple-500/10 rounded-full animate-float-slow" style={{ animationDelay: '2.5s' }} />
    </div>
  );
});

export default BackgroundShapes;
