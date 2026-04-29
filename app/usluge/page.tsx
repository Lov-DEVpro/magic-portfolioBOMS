'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Building2, Hammer, ShoppingBag, Truck, Wrench, Droplets, ShoppingCart, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

const uslugeList = [
  {
    id: 'projektovanje-sajamskih-standova',
    title: 'Projektovanje sajamskih štandova',
    icon: Building2,
    desc: 'BOMS-EXPO stručni tim nudi usluge projektovanja i 3D skiciranja, pretvarajući Vašu ideju u vizuelni koncept.',
  },
  {
    id: 'izrada-sajamskih-standova',
    title: 'Izrada sajamskih štandova',
    icon: Hammer,
    desc: 'Od osnovnih sistema i konvencionalnih rješenja, naša izrada uključuje korištenje najkvalitetnijih materijala...',
  },
  {
    id: 'opremanje-sajmova',
    title: 'Opremanje sajmova',
    icon: ShoppingBag,
    desc: 'Nudimo potpunu uslugu opremanja vašeg izložbenog prostora, uključujući najam opreme, podova i namještaja.',
  },
  {
    id: 'transport-i-skladistenje',
    title: 'Transport i skladištenje',
    icon: Truck,
    desc: 'Pružamo sigurnu i pravovremenu dostavu širom Evrope uz mogućnost skladištenja u našem logističkom centru.',
  },
  {
    id: 'montaza-i-demontaza',
    title: 'Montaža i demontaža',
    icon: Wrench,
    desc: 'Brza i profesionalna montaža od strane naših iskusnih majstora za besprijekoran nastup.',
  },
  {
    id: 'bazeni-i-oprema',
    title: 'Bazeni i oprema',
    icon: Droplets,
    desc: 'Od ideje do potpunog uživanja - prodaja, izgradnja i kompletna bazenska tehnika.',
  },
  {
    id: 'online-prodaja',
    title: 'Online prodaja (Webshop)',
    icon: ShoppingCart,
    desc: 'Osim usluga na terenu, nudimo Vam i online prodaju kvalitetnih proizvoda na našem webshop-u.',
  }
];

export default function UslugePage() {
  const containerRef = useRef(null);
  
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen" ref={containerRef}>
      {/* 1. HERO USLUGE */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
             <div className="w-2 h-2 rounded-full bg-[#20356a]"></div>
             <span className="text-sm font-semibold tracking-widest text-[#a0a0a0] uppercase">Naže Usluge</span>
          </motion.div>
          <motion.h1 
             variants={fadeInUp} 
             className="text-5xl md:text-8xl font-bold text-[#333333] tracking-tighter leading-[1.05] mb-8"
          >
            Sveobuhvatna <br/>
            <span className="text-[#a0a0a0] font-light">rješenja</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#757779] font-light leading-relaxed max-w-2xl">
            Od prve skice do završne montaže. Pristupamo svakom projektu individualno, kreirajući sajamske štandove koji ostavljaju utisak.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. GRID USLUGA (Avant-garde architecture) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(320px,auto)]">
          {uslugeList.map((usluga, i) => {
             // Dynamic spanning logic for visual interest
             let spanClass = "col-span-1";
             if (i === 0) spanClass = "md:col-span-2 lg:col-span-2";
             if (i === 3) spanClass = "md:col-span-2 lg:col-span-2";
             if (i === 6) spanClass = "md:col-span-1 lg:col-span-3";

             return (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.25, 1, 0.5, 1] }}
                 className={`group ${spanClass}`}
               >
                 <Link 
                   href={`/usluge/${usluga.id}`}
                   className="block h-full bg-[#f8f9fa] hover:bg-[#20356a] rounded-[2.5rem] p-8 md:p-12 transition-colors duration-500 relative overflow-hidden"
                 >
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                   
                   <div className="flex flex-col h-full justify-between relative z-10">
                      <div>
                         <motion.div 
                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                            className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 text-[#20356a] group-hover:bg-[#20356a] group-hover:text-white border border-gray-200 group-hover:border-white/20 transition-all duration-300 shadow-sm"
                         >
                           <usluga.icon className="w-8 h-8" />
                         </motion.div>
                         <h3 className="text-2xl md:text-3xl font-bold text-[#333333] group-hover:text-white mb-4 tracking-tight transition-colors duration-500">{usluga.title}</h3>
                         <p className="text-[#757779] group-hover:text-white/80 leading-relaxed font-light transition-colors duration-500 max-w-lg mb-8">
                           {usluga.desc}
                         </p>
                      </div>
                      <div className="inline-flex items-center gap-3 text-[#20356a] group-hover:text-white font-semibold uppercase tracking-widest text-xs transition-colors duration-500 mt-auto">
                        Saznajte više
                        <div className="w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                           <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                   </div>
                 </Link>
               </motion.div>
             )
          })}
        </div>
      </section>
    </div>
  );
}
