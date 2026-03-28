import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => (
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

export default Contact;
