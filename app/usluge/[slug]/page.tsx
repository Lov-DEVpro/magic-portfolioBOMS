'use client';

import { use, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Building2, Hammer, ShoppingBag, Truck, Wrench, Droplets, ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const serviceData: Record<string, any> = {
  'projektovanje-sajamskih-standova': {
    title: 'Projektovanje sajamskih štandova',
    icon: Building2,
    desc: 'BOMS-EXPO stručni tim nudi usluge projektovanja i 3D skiciranja, pretvarajući Vašu ideju u vizuelni koncept. Naš dizajn naglašava Vašu jedinstvenost i osigurava maksimalnu pažnju posjetilaca.'
  },
  'izrada-sajamskih-standova': {
    title: 'Izrada sajamskih štandova',
    icon: Hammer,
    desc: 'Od osnovnih sistema i konvencionalnih rješenja do složenih dizajniranih štandova, naša izrada uključuje korištenje najkvalitetnijih materijala (drvo, metal, obojeni materijali, staklo, tekstil). Prilagođavamo štand budžetu sa garantovanim ispunjenjem idejnog projekta.'
  },
  'opremanje-sajmova': {
    title: 'Opremanje sajmova',
    icon: ShoppingBag,
    desc: 'Nudimo potpunu uslugu opremanja vašeg izložbenog prostora. Od najma opreme (stalaže, display materijali, bilbordi, rasvjeta, video), preko postavljanja podova i tepiha do dodatnih usluga poput keteringa i nabavke namještaja po mjeri (tapacirani namještaj za ugostiteljstvo i ostalo).'
  },
  'transport-i-skladistenje': {
    title: 'Transport i skladištenje',
    icon: Truck,
    desc: 'Pružamo sigurnu i pravovremenu dostavu širom Evrope, uz kompletnu organizaciju transporta i carinjenja (ATA karnet). Pored transporta, naš logistički centar omogućava skladištenje Vaših izložbenih eksponata i materijala, bilo da se radi o dugoročnom ili kratkoročnom čuvanju.'
  },
  'montaza-i-demontaza': {
    title: 'Montaža i demontaža',
    icon: Wrench,
    desc: 'Besprijekorna i brza montaža i demontaža na samoj lokaciji od strane naših iskusnih majstora. Važno nam je da vaš nastup bude završen na vrijeme i prema svim tehničkim propisima.'
  },
  'bazeni-i-oprema': {
    title: 'Bazeni i oprema',
    icon: Droplets,
    desc: 'Od ideje do potpunog uživanja - nudimo kompletnu uslugu projektovanja i izgradnje bazena (klasični, prelivni, skimerski). Pored izgradnje obezbjeđujemo cjelokupnu bazensku opremu i održavanje.'
  },
  'online-prodaja': {
    title: 'Online prodaja (Webshop)',
    icon: ShoppingCart,
    desc: 'Osim sajamskih usluga na terenu, BOMS-EXPO razvio je platformu za online prodaju. Naš web-shop www.zhara.ba Vam nudi odabrane, kvalitetne proizvode po najpristupačnijim cijenama.'
  }
};

const containerVariants: any = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 70,
      damping: 20,
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 }
  }
};

export default function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = serviceData[slug];

  // 3D Tilt Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!service) {
    return notFound();
  }

  const Icon = service.icon;

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-[#fafafa]">
      {/* 1. Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(32,53,106,0.08) 0%, rgba(255,255,255,0) 70%)",
            "radial-gradient(circle at 80% 70%, rgba(32,53,106,0.06) 0%, rgba(255,255,255,0) 70%)",
            "radial-gradient(circle at 40% 80%, rgba(32,53,106,0.08) 0%, rgba(255,255,255,0) 70%)",
            "radial-gradient(circle at 20% 30%, rgba(32,53,106,0.08) 0%, rgba(255,255,255,0) 70%)",
          ]
        }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link Entrance */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-10"
        >
          <Link href="/usluge" className="inline-flex items-center gap-2 text-[#989a9c] hover:text-[#20356a] transition-colors text-sm font-semibold tracking-widest uppercase group">
            <ArrowLeft className="w-4 h-4 -translate-x-1 group-hover:-translate-x-2 transition-transform" />
            Nazad na sve usluge
          </Link>
        </motion.div>
         
        {/* 2. The Card (Glassmorphism + 3D Tilt) */}
        <div 
          style={{ perspective: 2000 }}
          className="w-full relative"
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full relative bg-white/60 backdrop-blur-2xl rounded-[3rem] border border-white/50 p-10 md:p-16 lg:p-20 shadow-[0_30px_60px_-15px_rgba(32,53,106,0.1),_0_0_0_1px_rgba(255,255,255,1)_inset]"
          >
            {/* Glossy highlight inside card */}
            <div className="absolute inset-0 w-full h-full rounded-[3rem] pointer-events-none bg-gradient-to-br from-white/80 via-white/10 to-transparent"></div>

            <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
              {/* 3. Icon Treatment */}
              <motion.div variants={itemVariants} className="mb-12 relative inline-flex">
                <motion.div 
                   animate={{ y: [0, -8, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="w-24 h-24 rounded-[1.5rem] bg-gradient-to-b from-[#253f7f] to-[#1a2b56] flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(32,53,106,0.5),_inset_0_2px_4px_rgba(255,255,255,0.3)] relative z-10"
                >
                  <Icon className="w-12 h-12 text-white drop-shadow-md" />
                </motion.div>
                {/* Glow behind icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#20356a] rounded-full blur-2xl opacity-40"></div>
              </motion.div>
              
              {/* 4. Typography Upgrade */}
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#333333] tracking-tighter leading-[1.05] mb-8 max-w-3xl">
                {service.title}
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#757779] font-light leading-relaxed mb-16 max-w-4xl">
                {service.desc}
              </motion.p>
              
              {/* 5. Separator & CTA Section */}
              <motion.div variants={itemVariants} className="relative pt-12">
                {/* Gradient Border Separator */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-white/40 p-8 rounded-[2rem] border border-white/50 backdrop-blur-sm shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#20356a]/0 via-[#20356a]/[0.02] to-[#20356a]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-2 tracking-tight">Želite li ovu uslugu za Vaš sljedeći projekat?</h3>
                    <p className="text-[#989a9c] font-light">Naš tim je spreman da Vašu ideju pretvori u stvarnost.</p>
                  </div>
                  
                  {/* Primary Interactive Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative z-10 shrink-0">
                    <Link href="/kontakt" className="relative overflow-hidden inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#20356a] text-white font-bold tracking-wide shadow-lg shadow-blue-900/20 group/btn">
                      <span className="relative z-10">Zatraži ponudu</span>
                      {/* Button Sweep Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
