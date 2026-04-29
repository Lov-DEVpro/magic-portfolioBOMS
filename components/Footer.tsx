'use client';

import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111111] text-white pt-32 pb-12 rounded-t-[3rem] mt-24 relative overflow-hidden">
      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black tracking-tighter whitespace-nowrap leading-none mt-20">
          BOMS-EXPO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
           className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24"
        >
          {/* Brand & Intro (Col span 5) */}
          <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-12">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#20356a] font-bold text-2xl tracking-tighter shadow-lg shadow-white/5">
                 B
               </div>
               <span className="font-bold text-3xl tracking-tight">BOMS-expo</span>
            </div>
            <h4 className="text-xl font-medium mb-6 text-white/90 leading-snug">
              U.D. BOMS-EXPO d.o.o. Gračanica
            </h4>
            <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-md font-light">
               Desetljeća iskustva, visoki standardi kvalitete i naš kompetentan tim stručnjaka osiguravaju da svaka vizija postane stvarnost.
            </p>
          </div>

          {/* Contact (Col span 4) */}
          <div className="md:col-span-6 lg:col-span-4">
            <h5 className="font-bold mb-8 text-white text-sm tracking-widest uppercase text-white/50">Kontakt informacije</h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-[#20356a] group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                <span className="text-[#d0d0d0] text-base group-hover:text-white transition-colors">Adresa: Stjepan Polje bb,<br/>75320 Gračanica</span>
              </li>
              <li className="flex items-start gap-4 group">
                <Phone className="w-5 h-5 text-[#20356a] group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+38762343328" className="text-[#d0d0d0] hover:text-white transition-colors text-base">+387 (0) 62 343 328</a>
                  <a href="tel:+38735783040" className="text-[#d0d0d0] hover:text-white transition-colors text-base">+387 (0) 35 783 040</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                 <div className="bg-[#20356a] px-2 py-1 rounded text-xs font-bold text-white group-hover:bg-blue-600 transition-colors">INFO</div>
                 <a href="tel:080020212" className="text-white hover:text-blue-200 transition-colors font-bold text-xl tracking-wider">0800 202 12</a>
              </li>
              <li className="flex items-start gap-4 group">
                <Mail className="w-5 h-5 text-[#20356a] group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@bomsexpo.com" className="text-[#d0d0d0] hover:text-white transition-colors text-base">info@bomsexpo.com</a>
                  <a href="mailto:benjamin.hdbd@gmail.com" className="text-[#a0a0a0] hover:text-white transition-colors text-sm">benjamin.hdbd@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links (Col span 3) */}
          <div className="md:col-span-6 lg:col-span-3">
            <h5 className="font-bold mb-8 text-white text-sm tracking-widest uppercase text-white/50">Brzi linkovi</h5>
            <ul className="space-y-4">
              {[
                { name: 'Početna', href: '/' },
                { name: 'O nama', href: '/o-nama' },
                { name: 'Usluge', href: '/usluge' },
                { name: 'Portfolio', href: '/reference' },
                { name: 'Kontakt', href: '/kontakt' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="inline-block text-[#a0a0a0] hover:text-white transition-all text-lg hover:translate-x-2 duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                 <a href="https://www.zhara.ba" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#111111] hover:text-white bg-white hover:bg-[#20356a] transition-all px-4 py-2 rounded-full text-sm font-bold mt-2 shadow-lg hover:shadow-blue-900/50">
                    Posjetite Webshop
                 </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-[#707070] text-sm text-center md:text-left font-light tracking-wide">
            © 2021 U.D. BOMS-expo d.o.o. Sva prava zadržana.
          </p>
          <button 
            type="button"
            onClick={scrollToTop}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all outline-none"
            aria-label="Scroll to top"
          >
            <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white -rotate-90 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
