import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are Aura's luxury jewelry concierge. We are located in Kolkata. You help customers choose gold and diamond jewelry. Be sophisticated, formal, and helpful.`
        }
      });
      const text = response.text || "I apologize, I'm having trouble connecting to our showroom right now.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error('Concierge error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm currently busy assisting another royal client. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[150] w-18 h-18 bg-maroon-dominant text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(128,0,0,0.5)] hover:scale-110 active:scale-95 transition-all duration-500 border border-gold/40 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
        <span className="absolute top-4 right-4 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gold shadow-[0_0_10px_rgba(212,175,55,1)]"></span>
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-[150] w-[400px] max-h-[650px] bg-white dark:bg-luxury-dark-card rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] border border-transparent dark:border-white/5 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 zoom-in-95 duration-500">
          <div className="bg-maroon-dominant p-6 flex justify-between items-center border-b border-white/5 relative">
            <div className="absolute inset-0 bg-maroon-dominant opacity-10"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner group">
                <Sparkles className="w-6 h-6 text-gold gold-glow group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <h4 className="text-white text-lg font-serif tracking-wide leading-none mb-1">Aura Concierge</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                  <span className="text-[9px] text-white/60 uppercase tracking-[0.3em] font-black">Digital Boutique</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 hover:bg-white/10 rounded-full transition-all text-white/50 hover:text-white hover:rotate-90 relative z-10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-8 space-y-8 overflow-y-auto bg-luxury-bg-secondary dark:bg-black/20">
            {messages.length === 0 && (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-maroon-dominant/5 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/10">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <h5 className="text-maroon-dominant dark:text-white font-serif text-2xl uppercase tracking-tight">Royal Greetings</h5>
                <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted text-xs font-medium max-w-[220px] mx-auto leading-relaxed uppercase tracking-widest">
                  I am here to ensure your journey through our heritage collection is flawless. How may I serve you?
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-[13px] leading-relaxed shadow-sm md:shadow-md ${m.role === 'user'
                  ? 'bg-maroon-dominant text-white font-medium'
                  : 'bg-white dark:bg-luxury-dark-card border border-luxury-bg-card dark:border-white/10 text-maroon-dominant dark:text-white font-serif italic'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-luxury-dark-card p-5 rounded-3xl border border-black/5 dark:border-white/5 shadow-md flex items-center gap-2">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-gold/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-gold/70 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white dark:bg-luxury-dark-secondary border-t border-black/5 dark:border-white/5 flex gap-4 shadow-2xl z-20">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Your royal request..."
              className="flex-1 bg-luxury-bg-secondary dark:bg-luxury-dark-card rounded-full px-8 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-maroon-dominant dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 border border-transparent shadow-inner"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-14 h-14 bg-maroon-dominant text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-maroon-dominant disabled:opacity-30 disabled:hover:bg-maroon-dominant transition-all active:scale-90 shadow-xl border border-white/10 group"
            >
              <Send className="w-6 h-6 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Concierge;