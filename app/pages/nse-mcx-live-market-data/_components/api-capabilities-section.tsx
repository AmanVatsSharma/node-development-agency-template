'use client';

/**
 * @fileoverview API Capabilities Section
 * @description Shows REST API and WebSocket capabilities with code examples
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Zap, Globe, GitBranch, Check } from 'lucide-react';

export function APICapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeCode, setActiveCode] = useState<'rest' | 'websocket' | 'python'>('rest');

  const codeExamples = {
    rest: `// REST API - Get Live Quote
fetch('https://api.yourservice.com/v1/quote/NSE/RELIANCE', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => {
  console.log('LTP:', data.last_price);
  console.log('Change:', data.change_percent);
  console.log('Volume:', data.volume);
});

// Response (< 1ms latency)
{
  "symbol": "RELIANCE",
  "exchange": "NSE",
  "last_price": 2456.75,
  "change": 18.25,
  "change_percent": 0.75,
  "volume": 2345678,
  "high": 2478.90,
  "low": 2445.20,
  "timestamp": "2024-01-15T14:30:45.123Z"
}`,
    websocket: `// WebSocket - Real-Time Streaming
const ws = new WebSocket('wss://stream.yourservice.com/v1/live');

ws.onopen = () => {
  // Subscribe to instruments
  ws.send(JSON.stringify({
    action: 'subscribe',
    instruments: ['NSE:NIFTY', 'NSE:BANKNIFTY', 'NSE:RELIANCE']
  }));
};

ws.onmessage = (event) => {
  const tick = JSON.parse(event.data);
  console.log('Live Tick:', {
    symbol: tick.symbol,
    ltp: tick.last_price,
    volume: tick.volume,
    timestamp: tick.timestamp
  });
  
  // Update your UI in real-time
  updateChart(tick);
};

// Receive 1000+ ticks per second
// Ultra-low latency: < 1ms`,
    python: `# Python SDK - Easy Integration
from marketdata import MarketDataAPI

# Initialize
api = MarketDataAPI(api_key='YOUR_API_KEY')

# Get live quote
quote = api.get_quote('NSE', 'RELIANCE')
print(f"LTP: {quote.last_price}")
print(f"Change: {quote.change_percent}%")

# Subscribe to live stream
def on_tick(tick):
    print(f"{tick.symbol}: ₹{tick.last_price}")

api.stream(['NSE:NIFTY', 'NSE:BANKNIFTY'], on_tick)

# Get historical data
candles = api.get_historical(
    symbol='NIFTY',
    from_date='2024-01-01',
    to_date='2024-01-31',
    interval='5min'
)

# Access options chain
chain = api.get_options_chain('NIFTY', expiry='2024-01-25')
for strike in chain:
    print(f"{strike.strike_price}: CE={strike.ce_ltp}, PE={strike.pe_ltp}")`
  };

  const capabilities = [
    {
      title: 'REST API',
      description: 'RESTful endpoints for quotes, historical data, and more',
      features: ['GET /quote', 'GET /historical', 'GET /options-chain', 'Rate Limit: 1000 req/sec']
    },
    {
      title: 'WebSocket Streaming',
      description: 'Real-time tick-by-tick data streaming',
      features: ['Live Ticks', 'Order Updates', 'Market Depth', '1000+ msgs/sec']
    },
    {
      title: 'Multiple Languages',
      description: 'SDKs for popular programming languages',
      features: ['Python', 'JavaScript/Node.js', 'Java', 'C++/C#']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black relative overflow-hidden"
      id="api-capabilities"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FF88]/10 to-[#FFD700]/10 rounded-full mb-4 border border-[#00FF88]/30">
            <Code className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">DEVELOPER-FRIENDLY API</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">Developers</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple, powerful APIs that get you up and running in minutes. 
            REST + WebSocket support with comprehensive documentation.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#00FF88]/50 transition-all shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{cap.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{cap.description}</p>
              <div className="space-y-2">
                {cap.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Check className="h-4 w-4 text-[#00FF88]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          {/* Code Tabs */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {[
              { id: 'rest' as const, label: 'REST API', icon: <Globe className="h-4 w-4" /> },
              { id: 'websocket' as const, label: 'WebSocket', icon: <Zap className="h-4 w-4" /> },
              { id: 'python' as const, label: 'Python SDK', icon: <Code className="h-4 w-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCode(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                  activeCode === tab.id
                    ? 'bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39]'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-[#00FF88]/20">
            {/* Code Header */}
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 bg-[#FF3366] rounded-full" />
                  <div className="h-3 w-3 bg-[#FFD700] rounded-full" />
                  <div className="h-3 w-3 bg-[#00FF88] rounded-full" />
                </div>
                <span className="text-white/70 text-sm font-mono ml-2">
                  {activeCode === 'rest' ? 'rest-api.js' : activeCode === 'websocket' ? 'websocket.js' : 'python-sdk.py'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-[#00FF88] rounded-full animate-pulse" />
                <span className="text-[#00FF88] text-xs font-mono">LIVE</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-white/90 leading-relaxed">
                <code>{codeExamples[activeCode]}</code>
              </pre>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { label: 'API Latency', value: '<1ms' },
              { label: 'Uptime SLA', value: '99.99%' },
              { label: 'Rate Limit', value: '1000/s' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-black text-[#00FF88] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] APICapabilitiesSection loaded');
