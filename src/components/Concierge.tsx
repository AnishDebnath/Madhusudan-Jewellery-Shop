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
          systemInstruction: `You are Aura's luxury jewelry concierge. We are located in Kolkata. You help customers choose gold and diamond jewelry. Be sophisticated and helpful.`
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
        className="fixed bottom-6 right-6 z-[150] w-14 h-14 bg-maroon text-gold rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-gold/30 gold-glow"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[150] w-96 max-h-[500px] bg-dark-card rounded-xl shadow-2xl border border-luxury-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-maroon p-4 flex justify-between items-center border-b border-maroon-secondary">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-dark-primary flex items-center justify-center border border-gold/30 shadow-sm">
                <Sparkles className="w-4 h-4 text-gold gold-glow" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold tracking-wider">Aura Concierge</h4>
                <span className="text-[9px] text-gold uppercase tracking-[0.2em] font-bold">Heritage Expert</span>
              </div>
            </div>
            <X className="w-5 h-5 text-gold/60 cursor-pointer hover:text-white" onClick={() => setIsOpen(false)} />
          </div>

          <div ref={scrollRef} className="flex-1 p-4 space-y-4 overflow-y-auto bg-dark-primary custom-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-luxury-muted text-xs italic">Greetings from Park Street. How may I assist you with our collections today?</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm font-light leading-relaxed ${m.role === 'user'
                    ? 'bg-maroon/40 text-white border border-maroon-secondary rounded-tr-none'
                    : 'bg-dark-card text-luxury-secondary border border-gold/10 rounded-tl-none'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-dark-card p-3 rounded-xl border border-gold/10 text-[10px] text-gold animate-pulse italic">
                  Concierge is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-dark-secondary border-t border-luxury-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Inquire about our craft..."
              className="flex-1 bg-dark-primary rounded-sm px-4 py-2 text-sm focus:outline-none border border-maroon-secondary focus:border-gold transition-colors text-white placeholder:text-luxury-disabled"
            />
            <button onClick={handleSend} className="w-10 h-10 bg-gold text-dark-primary rounded-sm flex items-center justify-center hover:bg-gold-light transition-all active:scale-90 shadow-xl gold-glow">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Concierge;