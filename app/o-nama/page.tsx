'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import { CheckCircle2, TrendingUp, Award, Building2 } from 'lucide-react';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      {/* 1. HERO O NAMA */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
               <span className="text-sm font-semibold tracking-widest text-[#a0a0a0] uppercase">O KOMPANIJI</span>
            </motion.div>
            <motion.h1 
               variants={fadeInUp} 
               className="text-5xl md:text-7xl font-bold text-[#333333] tracking-tighter leading-[1.1] mb-8"
            >
              Od vizije <br/>
              <span className="text-[#a0a0a0] font-light">do stvarnosti</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-[#757779] font-light leading-relaxed mb-6">
              Naša priča sa ponosom traje još od 1997. godine. Iza nas je više od <strong className="font-bold text-[#333333]">25 godina iskustva</strong> u sajamskoj industriji, što nas čini vodećim specijalistima u ovom području.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-[#757779] leading-relaxed mb-8">
              Vjerujemo da je prvo bila ideja, a ideja je samo misao sve dok se ne sprovede u djelo. Upravo zbog toga smo mi tu – da vam pomognemo da svoju ideju pretvorite u stvarnost. Možete nam u potpunosti prepustiti svoj projekat i smatrati stvar gotovom, ili možete lično pratiti svaki korak kroz naš potpuno transparentan postupak.
            </motion.p>
          </motion.div>

          {/* Hero Image Collage */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[80%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image src="https://picsum.photos/seed/about1/800/1000" alt="BOMS-expo workshop" fill sizes="(max-width: 1024px) 100vw, 36rem" className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
               style={{ scale }}
               className="absolute bottom-12 left-0 w-[60%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
            >
               <Image src="https://picsum.photos/seed/about2/600/600" alt="BOMS-expo office" fill sizes="(max-width: 1024px) 100vw, 28rem" className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PREDNOSTI I RESURSI */}
      <section className="bg-[#111111] py-32 relative overflow-hidden rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-6 lg:px-16 mb-32">
         {/* Abstract geometric elements */}
         <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[radial-gradient(ellipse_at_center,rgba(32,53,106,0.3)_0%,transparent_70%)] opacity-50 blur-3xl -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
         <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-50 blur-3xl translate-x-1/3 translate-y-1/3 rounded-full"></div>

         <div className="relative z-10">
            <div className="max-w-3xl mb-20 text-center mx-auto">
               <motion.h2 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
               >
                  Naše prednosti i resursi
               </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { icon: Building2, text: 'Ponosni smo što posjedujemo vlastiti magacin i radionicu, što nam omogućava maksimalnu kontrolu kvaliteta.' },
                 { icon: Award, text: 'Radimo sa prestižnim OCTANORM sistemom.' },
                 { icon: TrendingUp, text: 'U mogućnosti smo da ponudimo izradu svih vrsta štandova, majstorski kombinujući materijale poput drveta, metala i plastike.' },
                 { icon: CheckCircle2, text: 'Nosioci smo najviših bonitetnih ocjena, uključujući A+ (CompanyWall Business).' },
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: i * 0.1 }}
                     className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300"
                  >
                     <div className="w-12 h-12 rounded-full bg-[#20356a]/30 flex items-center justify-center mb-6 text-white border border-[#20356a]">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <p className="text-[#e2e8f0] leading-relaxed font-light">{item.text}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. VIZIJA I MISIJA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-gray-50 rounded-[3rem] p-12 md:p-16 border border-gray-100"
            >
               <h3 className="text-3xl font-bold text-[#333333] mb-6 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#20356a] flex items-center justify-center text-white text-sm">V</span> 
                  Naša vizija
               </h3>
               <p className="text-[#757779] text-lg font-light leading-relaxed">
                  Postati prepoznatljiv lider u Evropi u kreiranju inovativnih prostornih rješenja i prenosivih konstrukcija. Biti prvi izbor za kompanije koje žele da se istaknu, donoseći svjetske standarde kvaliteta i dizajna.
               </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-[#20356a] rounded-[3rem] p-12 md:p-16 relative overflow-hidden text-white"
            >
               {/* Decorative watermark */}
               <div className="absolute -bottom-10 -right-10 text-9xl font-black opacity-5 pointer-events-none">M</div>
               <h3 className="text-3xl font-bold mb-6 flex items-center gap-4 relative z-10">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#20356a] text-sm">M</span> 
                  Naša misija
               </h3>
               <p className="text-white/80 text-lg font-light leading-relaxed relative z-10">
                  Naša misija je osnažiti brendove naših klijenata izgradnjom funkcionalnih, estetski savršenih i prilagođenih paviljona i prodajnih mjesta.
               </p>
               <ul className="mt-8 space-y-4 relative z-10">
                  {[
                     'Kvalitet bez kompromisa: Koristimo najmodernije tehnike, opremu i materijale.',
                     'Klijent na prvom mjestu: Pristupamo svakom klijentu sa pažnjom.',
                     'Dugoročna perspektiva: Povezujemo kreativnost, tradiciju i modernu tehnologiju.'
                  ].map((item, i) => (
                     <li key={i} className="flex gap-4 font-light text-white/90 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0" />
                        <span>{item}</span>
                     </li>
                  ))}
               </ul>
            </motion.div>
         </div>
      </section>

    </div>
  );
}
