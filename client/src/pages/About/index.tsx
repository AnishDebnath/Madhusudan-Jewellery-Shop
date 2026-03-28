import React from 'react';
import model13 from '../../assets/models/models (13).jpg';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

const About: React.FC = () => (
  <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen transition-colors animate-in fade-in duration-700">
    <div className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden border-b border-gold/10">
      <div className="absolute inset-0 bg-black opacity-40 object-cover scale-105 animate-kenburns_slow">
        <img src={model13} alt="Heritage" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <span className="text-gold text-xs tracking-[0.6em] uppercase font-black mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700 gold-glow">Our Story</span>
        <h1 className="text-5xl md:text-8xl font-serif mb-6 italic tracking-tight leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">The Heritage of <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold to-white">Aura</span></h1>
        <p className="max-w-xl mx-auto text-lg text-white/70 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">Preserving a legacy of imperial craftsmanship since 1952.</p>
      </div>
    </div>

    <div className="container mx-auto px-6 py-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-maroon-dominant dark:text-white mb-12 uppercase tracking-wide leading-tight">Crafting Legacies <br /><span className="italic text-gold lowercase">since</span> 1952</h2>
        <div className="w-24 h-[1px] bg-gold/30 mx-auto mb-12"></div>
        <p className="text-luxury-text-light/70 dark:text-luxury-text-darkMuted leading-loose text-xl mb-24 font-serif italic max-w-3xl mx-auto">
          "Founded in the heart of Kolkata, Aura was born from a singular passion: to preserve the ancient art of Indian jewellery making while embracing the brilliance of modern diamond craftsmanship."
        </p>

        <div className="grid md:grid-cols-3 gap-16 border-t border-luxury-bg-card dark:border-white/5 pt-16">
          <div className="group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-20 h-20 bg-luxury-bg-secondary dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold group-hover:text-maroon-dominant transition-colors duration-300">
              <Award className="w-8 h-8 text-gold group-hover:text-maroon-dominant transition-colors" />
            </div>
            <h4 className="text-maroon-dominant dark:text-white font-black uppercase tracking-[0.2em] text-xs mb-4">Excellence</h4>
            <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted text-sm leading-relaxed px-4">Awarded for the finest filigree work in Eastern India for three decades continuously.</p>
          </div>
          <div className="group hover:-translate-y-2 transition-transform duration-500 delay-100">
            <div className="w-20 h-20 bg-luxury-bg-secondary dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold group-hover:text-maroon-dominant transition-colors duration-300">
              <ShieldCheck className="w-8 h-8 text-gold group-hover:text-maroon-dominant transition-colors" />
            </div>
            <h4 className="text-maroon-dominant dark:text-white font-black uppercase tracking-[0.2em] text-xs mb-4">Purity</h4>
            <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted text-sm leading-relaxed px-4">A pioneer in 100% HUID compliance and BIS Hallmark standards across all collections.</p>
          </div>
          <div className="group hover:-translate-y-2 transition-transform duration-500 delay-200">
            <div className="w-20 h-20 bg-luxury-bg-secondary dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold group-hover:text-maroon-dominant transition-colors duration-300">
              <Sparkles className="w-8 h-8 text-gold group-hover:text-maroon-dominant transition-colors" />
            </div>
            <h4 className="text-maroon-dominant dark:text-white font-black uppercase tracking-[0.2em] text-xs mb-4">Innovation</h4>
            <p className="text-luxury-text-light/50 dark:text-luxury-text-darkMuted text-sm leading-relaxed px-4">Bridging legacy with future tech like AR Vision and 3D algorithmic design.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
