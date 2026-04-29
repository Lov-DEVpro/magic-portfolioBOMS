'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, FileText, Send } from 'lucide-react';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function KontaktPage() {
  return (
    <div className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[#333333] tracking-tight mb-6"
          >
            Kontaktirajte <span className="text-[#20356a]">nas</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-[#989a9c]">
            Imate viziju, ali niste sigurni odakle da počnete? Kontaktirajte nas i rado ćemo odgovoriti na sva Vaša pitanja.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Kontakt Informacije */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#20356a] rounded-[2rem] p-10 text-white shadow-xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <h3 className="text-2xl font-bold mb-8 relative z-10">U.D. BOMS-EXPO D.O.O. GRAČANICA</h3>
             
             <div className="space-y-6 relative z-10">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                   <MapPin className="w-6 h-6 text-blue-100" />
                 </div>
                 <div>
                   <p className="text-blue-100/70 text-sm mb-1">Adresa</p>
                   <p className="font-medium text-lg">Stjepan Polje bb,<br />75320 Gračanica</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                   <Phone className="w-6 h-6 text-blue-100" />
                 </div>
                 <div>
                   <p className="text-blue-100/70 text-sm mb-1">Telefoni</p>
                   <a href="tel:+38762343328" className="block font-medium text-lg hover:text-blue-200 transition-colors">+387 (0) 62 343 328 (Mobitel)</a>
                   <a href="tel:+38735783040" className="block font-medium text-lg hover:text-blue-200 transition-colors">+387 (0) 35 783 040 (Tel / Fax)</a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/20 flex items-center justify-center shrink-0">
                   <Phone className="w-6 h-6 text-[#ff6b00]" />
                 </div>
                 <div>
                   <p className="text-[#ff6b00]/80 text-sm mb-1 font-semibold">Besplatan info telefon</p>
                   <a href="tel:080020212" className="block font-bold text-2xl text-[#ff6b00] hover:text-[#ff8533] transition-colors tracking-wide">0800 202 12</a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                   <Mail className="w-6 h-6 text-blue-100" />
                 </div>
                 <div>
                   <p className="text-blue-100/70 text-sm mb-1">Email</p>
                   <a href="mailto:info@bomsexpo.com" className="block font-medium text-lg hover:text-blue-200 transition-colors">info@bomsexpo.com</a>
                   <a href="mailto:benjamin.hdbd@gmail.com" className="block font-medium text-md hover:text-blue-200 transition-colors">benjamin.hdbd@gmail.com</a>
                 </div>
               </div>
               
               <div className="flex items-start gap-4 pt-6 mt-6 border-t border-white/10">
                 <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center shrink-0">
                   <FileText className="w-6 h-6 text-white/50" />
                 </div>
                 <div>
                   <p className="text-white/70 text-sm mb-1 border-b border-white/10 pb-1 w-max">Podaci kompanije</p>
                   <p className="text-white/90">ID Broj: 4209172020005</p>
                   <p className="text-white/90">PDV Broj: 209172020005</p>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* Kontakt Forma */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-[#333333] mb-6">Pošaljite nam poruku</h3>
            <form className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">Ime i prezime</label>
                   <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 text-[#333333] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20356a]/30 focus:border-[#20356a] transition-all" placeholder="Vaše ime" />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">Email adresa</label>
                   <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 text-[#333333] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20356a]/30 focus:border-[#20356a] transition-all" placeholder="vash@email.com" />
                 </div>
               </div>
               <div>
                 <label htmlFor="subject" className="block text-sm font-medium text-[#333333] mb-2">Naslov poruke</label>
                 <input type="text" id="subject" className="w-full bg-gray-50 border border-gray-200 text-[#333333] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20356a]/30 focus:border-[#20356a] transition-all" placeholder="Tema vašeg upita" />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">Poruka</label>
                 <textarea id="message" rows={5} className="w-full bg-gray-50 border border-gray-200 text-[#333333] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20356a]/30 focus:border-[#20356a] transition-all resize-none" placeholder="Kako vam možemo pomoći..."></textarea>
               </div>
               <button type="button" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#20356a] text-white font-medium hover:bg-[#1a2b56] transition-colors shadow-sm active:scale-[0.98]">
                 <Send className="w-5 h-5" /> Pošalji poruku
               </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
