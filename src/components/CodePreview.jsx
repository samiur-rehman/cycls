import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodePreview = React.memo(() => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const codeString = `
import cycls

# Initialize the agent
agent = cycls.Agent()

# Decorate your function to register it as an agent
@agent()
async def hello(context):
    yield "hi"

# Run your agent locally
agent.run()`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div 
      className="relative bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-left transition-all duration-500 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border glow */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
      </div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="ml-4 text-sm text-gray-500">agent.py</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1 text-sm text-gray-400 hover:text-white transition-all duration-300 bg-white/5 rounded-lg hover:bg-white/10 hover:scale-105"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="text-sm md:text-base overflow-x-auto p-4 rounded-lg bg-black/50 transition-all duration-300 hover:bg-black/70">
          <code className="language-python block font-mono">
            <span className="text-red-400">import</span> cycls
            {'\n\n'}
            <span className="text-gray-500 italic"># Initialize the agent</span>
            {'\n'}agent <span className="text-red-400">=</span> cycls.Agent()
            {'\n\n'}
            <span className="text-gray-500 italic"># Decorate your function to register it as an agent</span>
            {'\n'}<span className="text-purple-400">@agent</span>()
            {'\n'}<span className="text-red-400">async</span> <span className="text-blue-400">def</span> <span className="text-purple-400">hello</span>(context):
            {'\n'}    <span className="text-red-400">yield</span> <span className="text-green-400">"hi"</span>
            {'\n\n'}
            <span className="text-gray-500 italic"># Run your agent locally</span>
            {'\n'}agent.run()
          </code>
        </pre>
      </div>
    </div>
  );
});

export default CodePreview;
