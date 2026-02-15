import React from 'react';
import { Mail, Phone, MapPin, Clock, Sparkles, Award, ShieldCheck } from 'lucide-react';
import model13 from '../assets/models/models (13).jpg';

const About = () => (
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

const Contact = () => (
  <div className="bg-luxury-bg-primary dark:bg-luxury-dark-primary min-h-screen py-32 transition-colors border-t border-luxury-bg-card dark:border-white/5">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-black mb-6 block gold-glow">Get In Touch</span>
        <h1 className="text-5xl md:text-7xl font-serif text-maroon-dominant dark:text-white uppercase tracking-tight leading-none">Concierge <span className="italic text-gold">Services</span></h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 bg-white dark:bg-luxury-dark-card p-8 md:p-16 rounded-3xl shadow-2xl border border-transparent dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none"></div>

        <div className="relative z-10">
          <h3 className="text-3xl font-serif text-maroon-dominant dark:text-white mb-10 uppercase tracking-wide">Royal Consultation</h3>
          <p className="text-luxury-text-light/60 dark:text-luxury-text-darkMuted mb-12 leading-relaxed">
            Our dedicated concierge team is available to assist you with any inquiries, from bespoke commissions to viewing appointments.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6 group items-center p-6 bg-luxury-bg-secondary dark:bg-black/20 rounded-3xl hover:bg-gold/10 transition-colors border border-transparent dark:border-white/5 hover:border-gold/20">
              <div className="p-4 bg-white dark:bg-white/10 rounded-full group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 shadow-lg">
                <Phone className="w-6 h-6 text-maroon-dominant dark:text-gold group-hover:text-maroon-dominant transition-colors" />
              </div>
              <div>
                <h5 className="font-black text-maroon-dominant dark:text-white text-[10px] uppercase tracking-[0.2em] mb-2">Call Us</h5>
                <p className="text-lg font-serif text-luxury-text-light/80 dark:text-luxury-text-darkMuted">+91 33 22XX XXXX</p>
              </div>
            </div>
            <div className="flex gap-6 group items-center p-6 bg-luxury-bg-secondary dark:bg-black/20 rounded-3xl hover:bg-gold/10 transition-colors border border-transparent dark:border-white/5 hover:border-gold/20">
              <div className="p-4 bg-white dark:bg-white/10 rounded-full group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 shadow-lg">
                <Mail className="w-6 h-6 text-maroon-dominant dark:text-gold group-hover:text-maroon-dominant transition-colors" />
              </div>
              <div>
                <h5 className="font-black text-maroon-dominant dark:text-white text-[10px] uppercase tracking-[0.2em] mb-2">Email Concierge</h5>
                <p className="text-lg font-serif text-luxury-text-light/80 dark:text-luxury-text-darkMuted">concierge@aurajewels.in</p>
              </div>
            </div>
            <div className="flex gap-6 group items-center p-6 bg-luxury-bg-secondary dark:bg-black/20 rounded-3xl hover:bg-gold/10 transition-colors border border-transparent dark:border-white/5 hover:border-gold/20">
              <div className="p-4 bg-white dark:bg-white/10 rounded-full group-hover:bg-gold group-hover:text-maroon-dominant transition-all duration-300 shadow-lg">
                <MapPin className="w-6 h-6 text-maroon-dominant dark:text-gold group-hover:text-maroon-dominant transition-colors" />
              </div>
              <div>
                <h5 className="font-black text-maroon-dominant dark:text-white text-[10px] uppercase tracking-[0.2em] mb-2">Flagship Store</h5>
                <p className="text-lg font-serif text-luxury-text-light/80 dark:text-luxury-text-darkMuted">15A Park Street, Kolkata - 700016</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6 relative z-10 bg-luxury-bg-secondary dark:bg-black/20 p-8 rounded-3xl border border-transparent dark:border-white/5">
          <h4 className="text-xl font-serif text-maroon-dominant dark:text-white mb-6 uppercase tracking-wide">Send a Dispatch</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="w-full bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/10 p-4 text-sm focus:outline-none focus:border-gold transition-colors text-maroon-dominant dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-luxury-text-light/20 rounded-full" />
            <input type="email" placeholder="Email Address" className="w-full bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/10 p-4 text-sm focus:outline-none focus:border-gold transition-colors text-maroon-dominant dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-luxury-text-light/20 rounded-full" />
          </div>
          <input type="text" placeholder="Subject of Inquiry" className="w-full bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/10 p-4 text-sm focus:outline-none focus:border-gold transition-colors text-maroon-dominant dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-luxury-text-light/20 rounded-full" />
          <textarea placeholder="Your Message to our Artisans" rows={6} className="w-full bg-white dark:bg-luxury-dark-card border border-transparent dark:border-white/10 p-4 text-sm focus:outline-none focus:border-gold transition-colors text-maroon-dominant dark:text-white placeholder:text-luxury-text-light/30 dark:placeholder:text-luxury-text-light/20 rounded-3xl resize-none"></textarea>
          <button className="w-full bg-maroon-dominant text-white py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-maroon-dominant transition-all shadow-xl active:scale-95 border border-maroon-border group relative overflow-hidden">
            <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">Send Dispatch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default { About, Contact };