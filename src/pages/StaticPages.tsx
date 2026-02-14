import React from 'react';
import { Mail, Phone, MapPin, Clock, Sparkles, Award, ShieldCheck } from 'lucide-react';

const About = () => (
  <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen transition-colors">
    <div className="relative h-[400px] flex items-center justify-center bg-maroon-dominant overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1920')] opacity-30 object-cover grayscale scale-110"></div>
      <div className="relative z-10 text-center text-white px-6">
        <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block animate-in fade-in">Our Story</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-4 italic tracking-wider uppercase">The Heritage of Aura</h1>
      </div>
    </div>
    
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon-dominant dark:text-gold mb-8 uppercase tracking-widest">Crafting Legacies Since 1952</h2>
        <p className="text-luxury-text-light/70 dark:text-luxury-text-darkMuted leading-relaxed text-lg mb-12 italic">
          "Founded in the heart of Kolkata, Aura was born from a singular passion: to preserve the ancient art of Indian jewellery making while embracing the brilliance of modern diamond craftsmanship."
        </p>
        <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-luxury-bg-card dark:border-maroon-border/20">
          <div>
            <Award className="w-10 h-10 text-gold mx-auto mb-4 gold-glow" />
            <h4 className="text-maroon-dominant dark:text-white font-bold uppercase tracking-widest text-xs mb-2">Excellence</h4>
            <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted text-sm">Awarded for the finest filigree work in Eastern India for three decades.</p>
          </div>
          <div>
            <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-4 gold-glow" />
            <h4 className="text-maroon-dominant dark:text-white font-bold uppercase tracking-widest text-xs mb-2">Purity</h4>
            <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted text-sm">A pioneer in 100% HUID compliance and BIS Hallmark standards.</p>
          </div>
          <div>
            <Sparkles className="w-10 h-10 text-gold mx-auto mb-4 gold-glow" />
            <h4 className="text-maroon-dominant dark:text-white font-bold uppercase tracking-widest text-xs mb-2">Innovation</h4>
            <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted text-sm">Bridging tradition with future tech like AR Vision and 3D design.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen py-24 transition-colors">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block">Get In Touch</span>
        <h1 className="text-5xl font-serif text-maroon-dominant dark:text-white uppercase tracking-wider">Concierge Services</h1>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 bg-luxury-bg-secondary dark:bg-luxury-dark-card p-12 rounded-sm shadow-xl border border-luxury-bg-card dark:border-maroon-border/20">
        <div>
          <h3 className="text-2xl font-serif text-maroon-dominant dark:text-gold mb-8 uppercase tracking-widest">Royal Consultation</h3>
          <div className="space-y-8">
            <div className="flex gap-4 group">
              <div className="p-3 bg-luxury-bg-card dark:bg-maroon-dominant/20 rounded-full group-hover:bg-gold transition-colors">
                <Phone className="w-6 h-6 text-gold group-hover:text-white" />
              </div>
              <div>
                <h5 className="font-bold text-luxury-text-light dark:text-white text-xs uppercase tracking-widest mb-1">Call Us</h5>
                <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted">+91 33 22XX XXXX</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="p-3 bg-luxury-bg-card dark:bg-maroon-dominant/20 rounded-full group-hover:bg-gold transition-colors">
                <Mail className="w-6 h-6 text-gold group-hover:text-white" />
              </div>
              <div>
                <h5 className="font-bold text-luxury-text-light dark:text-white text-xs uppercase tracking-widest mb-1">Email Concierge</h5>
                <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted">concierge@aurajewels.in</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="p-3 bg-luxury-bg-card dark:bg-maroon-dominant/20 rounded-full group-hover:bg-gold transition-colors">
                <MapPin className="w-6 h-6 text-gold group-hover:text-white" />
              </div>
              <div>
                <h5 className="font-bold text-luxury-text-light dark:text-white text-xs uppercase tracking-widest mb-1">Flagship Store</h5>
                <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted">15A Park Street, Kolkata - 700016</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="w-full bg-luxury-bg-primary dark:bg-luxury-dark-primary border border-luxury-bg-card dark:border-maroon-border/40 p-4 text-sm focus:outline-none focus:border-gold transition-colors text-luxury-text-light dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-luxury-text-dark/20" />
            <input type="email" placeholder="Email Address" className="w-full bg-luxury-bg-primary dark:bg-luxury-dark-primary border border-luxury-bg-card dark:border-maroon-border/40 p-4 text-sm focus:outline-none focus:border-gold transition-colors text-luxury-text-light dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-luxury-text-dark/20" />
          </div>
          <input type="text" placeholder="Subject of Inquiry" className="w-full bg-luxury-bg-primary dark:bg-luxury-dark-primary border border-luxury-bg-card dark:border-maroon-border/40 p-4 text-sm focus:outline-none focus:border-gold transition-colors text-luxury-text-light dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-luxury-text-dark/20" />
          <textarea placeholder="Your Message to our Artisans" rows={4} className="w-full bg-luxury-bg-primary dark:bg-luxury-dark-primary border border-luxury-bg-card dark:border-maroon-border/40 p-4 text-sm focus:outline-none focus:border-gold transition-colors text-luxury-text-light dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-luxury-text-dark/20"></textarea>
          <button className="w-full bg-maroon-dominant text-white py-5 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-maroon-dominant transition-all shadow-xl active:scale-95 border border-maroon-border">Send Dispatch</button>
        </form>
      </div>
    </div>
  </div>
);

export default { About, Contact };