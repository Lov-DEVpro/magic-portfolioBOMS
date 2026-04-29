'use client';

import { motion, Variants, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import {
  CheckCircle2,
  Truck,
  Wrench,
  Droplets,
  ShoppingCart,
  Building2,
  TrendingUp,
  Award,
  Users,
  Briefcase,
  Star,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const textRevealItem: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
  }
};

import projectsData from '@/data/projects.json';

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Use first 3 projects for the preview
  const previewProjects = projectsData.slice(0, 3).map((p, i) => ({
    title: p.title,
    sub: p.client,
    img: p.featuredImage,
    slug: p.slug,
    className: i === 0 ? 'lg:col-span-2 aspect-[16/9] lg:aspect-auto h-[600px]' : i === 1 ? 'aspect-[4/5] lg:h-[600px]' : 'md:col-span-2 lg:col-span-3 aspect-[21/9] h-[500px]'
  }));

  return (
    <>
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-screen">
        {/* Modern Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/20 blur-[80px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/10 blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl relative"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-xs font-bold uppercase tracking-widest mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Tradicija od 1997.
              </motion.div>
              
              <div className="mb-8">
                <div className="overflow-hidden mb-2">
                  <motion.h1 variants={textRevealItem} className="text-6xl md:text-7xl lg:text-8xl font-black text-[#333333] tracking-tight leading-[0.95]">
                    BOMS-expo
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.h1 variants={textRevealItem} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1] text-gradient">
                    25 godina izvrsnosti <br className="hidden md:block"/>u industriji sajmova
                  </motion.h1>
                </div>
              </div>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[#707070] mb-12 leading-relaxed font-normal max-w-lg">
                Vaš partner za profesionalnu pripremu i besprijekornu realizaciju. Istaknite se uz unikatna rješenja od drveta, metala i plastike.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
                <Link href="/kontakt" passHref>
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(32,53,106,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-primary text-white font-bold transition-all shadow-xl"
                  >
                    Zatraži ponudu
                  </motion.button>
                </Link>
                <Link href="/reference" passHref>
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl border-2 border-primary/10 glass text-primary font-bold transition-all shadow-sm"
                  >
                    Naši projekti
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#333333]">A+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">Bonitet</span>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#333333]">EU</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">Standardi</span>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#333333]">100+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">Klijenata</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="relative lg:h-[700px] flex items-center justify-center lg:justify-end"
            >
              {/* Floating 3D Stand Visualization */}
              <div className="relative w-full max-w-lg aspect-square">
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border border-primary/5 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-4 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]"></div>
                
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full glass rounded-[3rem] p-8 shadow-2xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                  
                  {/* Abstract Stand Elements */}
                  <div className="relative h-full w-full flex flex-col gap-4">
                    <div className="h-2/3 bg-white/50 rounded-[2rem] border border-white/80 shadow-inner flex items-center justify-center relative overflow-hidden">
                      <Image 
                        src="https://picsum.photos/seed/boms1/800/800" 
                        alt="Preview" 
                        fill 
                        sizes="(max-width: 1024px) 100vw, 32rem"
                        className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-[2s]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                    <div className="flex gap-4 h-1/3">
                      <div className="w-2/3 bg-primary rounded-[2rem] shadow-xl flex items-center justify-center p-6">
                        <Award className="text-white w-12 h-12" />
                      </div>
                      <div className="w-1/3 glass rounded-[2rem] flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <motion.div 
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 right-0 translate-x-1/2 glass px-6 py-4 rounded-2xl shadow-xl z-20"
                  >
                    <span className="text-primary font-black block">OCTANORM</span>
                    <span className="text-[10px] uppercase font-bold text-[#707070]">Certified System</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SEKCIJA: O NAMA PREVIEW */}
      <section className="py-32 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:order-2"
            >
              <motion.div variants={fadeInUp} className="w-12 h-1.5 bg-primary mb-8 rounded-full"></motion.div>
              <div className="overflow-hidden mb-8">
                <motion.h2 variants={textRevealItem} className="text-4xl md:text-5xl font-black text-[#333333] tracking-tight leading-tight">
                  Prvo je bila ideja – <br className="hidden md:block"/>
                  <span className="text-primary/40 font-light italic">Mi je pretvaramo u stvarnost</span>
                </motion.h2>
              </div>
              <motion.p variants={fadeInUp} className="text-[#757779] text-lg mb-10 leading-relaxed font-normal">
                Ideja je samo misao sve dok se ne sprovede u djelo. U BOMS-expo, ponosni smo na našu tradiciju koja traje još od 1997. godine. Naši arhitekti i dizajneri daju vašoj ideji željeni oblik i na temelju toga nastaje vaša prva skica.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-6 mb-12">
                {[
                  { title: 'Vlastiti resursi', desc: 'Posjedujemo vlastiti magacin i radionicu za brzu realizaciju.' },
                  { title: 'OCTANORM Sistem', desc: 'Radimo sa svjetski priznatim i prestižnim sistemom.' },
                  { title: 'Bonitetna izvrsnost', desc: 'Ponosni nositelji najviših ocjena stabilnosti i povjerenja.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-5 p-6 rounded-2xl glass hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[#333333] font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-[#757779] font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Link href="/o-nama" className="group inline-flex items-center gap-3 text-primary font-black text-xl">
                  <span>Pročitajte više o nama</span>
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Grid with Premium Layout */}
            <div className="lg:order-1 relative h-[600px] md:h-[750px]">
              {/* Background Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
              
              <motion.div 
                style={{ y: parallaxY1 }} 
                className="absolute left-0 top-[5%] w-[65%] h-[65%] rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white group"
              >
                <Image src="https://picsum.photos/seed/workshop1/800/1000" alt="Workshop" fill sizes="(max-width: 1024px) 100vw, 32rem" className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </motion.div>
              
              <motion.div 
                style={{ y: parallaxY2 }} 
                className="absolute right-0 bottom-[5%] w-[60%] h-[55%] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-white group"
              >
                <Image src="https://picsum.photos/seed/warehouse2/800/1000" alt="Warehouse" fill sizes="(max-width: 1024px) 100vw, 28rem" className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </motion.div>
              
              <motion.div 
                 initial={{ scale: 0, rotate: -15 }}
                 whileInView={{ scale: 1, rotate: 0 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", damping: 12, delay: 0.5 }}
                 className="absolute left-[40%] top-[40%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 glass rounded-full z-30 flex flex-col items-center justify-center text-primary shadow-2xl border-4 border-white"
              >
                <span className="text-4xl font-black leading-none">1997</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 mt-2">Established</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEKCIJA: NAŠE USLUGE (Bento Box) */}
      <section className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full glass text-primary text-[10px] font-black uppercase tracking-widest mb-6">
              Širok spektar rješenja
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-[#333333] tracking-tight mb-6">
              Naše <span className="text-gradient">usluge</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#757779] text-xl font-normal">
              Svakom projektu pristupamo individualno. Nudimo sveobuhvatan inženjering i podršku kako bismo osigurali vaš uspjeh na globalnom tržištu.
            </motion.p>
          </motion.div>

          {/* Rock Solid Bento Grid with Absolute Arrows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[250px]">
            {[
              { 
                icon: Building2, 
                title: 'Sajamska industrija', 
                desc: 'Dizajn, projektovanje i izrada unikatnih štandova. Nudimo najam opreme, pagode i podove za kompletno sajamsko iskustvo.',
                className: 'md:col-span-2 md:row-span-2 bg-primary text-white',
                dark: true,
                img: 'https://picsum.photos/seed/bento1/800/800'
              },
              { 
                icon: Truck, 
                title: 'Logistika i transport', 
                desc: 'Siguran transport opreme širom EU.',
                className: 'md:col-span-1 md:row-span-1 glass',
                dark: false
              },
              { 
                icon: Wrench, 
                title: 'Montaža i demontaža', 
                desc: 'Iskusni timovi na lokaciji.',
                className: 'md:col-span-1 md:row-span-1 glass',
                dark: false
              },
              { 
                icon: Droplets, 
                title: 'Bazeni i oprema', 
                desc: 'Projektovanje i izgradnja luksuznih bazena.',
                className: 'md:col-span-1 md:row-span-1 glass',
                dark: false
              },
              { 
                icon: ShoppingCart, 
                title: 'Online prodaja', 
                desc: 'Posjetite naš web-shop www.zhara.ba za vrhunsku opremu po najboljim cijenama direktno iz našeg magacina.',
                className: 'md:col-span-2 md:row-span-1 glass',
                dark: false,
                highlight: true
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`relative group rounded-[3rem] p-10 overflow-hidden flex flex-col transition-all duration-500 shadow-sm hover:shadow-2xl ${service.className}`}
              >
                {service.img && (
                  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Image src={service.img} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
                  </div>
                )}
                
                <div className="relative z-10 pr-12"> {/* Added padding right to avoid arrow overlap */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-6 ${service.dark ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-2xl font-black mb-3 tracking-tight ${service.dark ? 'text-white' : 'text-[#333333]'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-normal ${service.dark ? 'text-white/70' : 'text-[#757779]'} line-clamp-3`}>
                    {service.desc}
                  </p>
                </div>

                {/* Absolute Labels and Arrow */}
                <div className="absolute bottom-8 left-10 right-10 flex items-center justify-between z-10">
                   {service.highlight ? (
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Web-shop</span>
                        <span className="text-xs font-bold text-[#333333]">zhara.ba</span>
                     </div>
                   ) : <div />}
                   
                   <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ml-auto ${service.dark ? 'border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary' : 'border-primary/10 bg-primary/5 text-primary hover:bg-primary hover:text-white'}`}>
                      <ArrowRight className="w-5 h-5" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <Link href="/usluge" className="inline-flex items-center gap-4 group">
                <span className="text-sm font-black uppercase tracking-[0.3em] text-[#a0a0a0] group-hover:text-primary transition-colors">Sve usluge</span>
                <div className="w-16 h-1 bg-gray-100 relative overflow-hidden">
                   <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
             </Link>
          </div>
        </div>
      </section>

      {/* 4. SEKCIJA: NAŠ PROCES */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-24 text-center max-w-2xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-block px-4 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
            >
              Put do uspjeha
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-[#333333] tracking-tight mb-6">
              Raditi sa nama je <span className="text-primary italic">jednostavno</span>
            </h2>
            <p className="text-[#757779] text-lg font-normal">Naš proces je optimizovan da vam uštedi vrijeme i osigura vrhunski rezultat.</p>
          </div>

          <div className="relative">
            {/* Background Connector line */}
            <div className="hidden lg:block absolute top-[120px] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {[
                { num: '01', title: 'Prvi kontakt', desc: 'Pozovite nas ili pošaljite upit. Naš tim odgovara u najkraćem roku sa prvim savjetima.' },
                { num: '02', title: 'Planiranje', desc: 'Definišemo vaše potrebe, budžet i ciljeve kako bismo kreirali idealnu ponudu.' },
                { num: '03', title: 'Strategija', desc: 'Usaglašavamo dizajn i tehničke detalje do savršenstva prije same realizacije.' },
                { num: '04', title: 'Realizacija', desc: 'Naši majstori i monteri preuzimaju scenu i pretvaraju nacrte u fizičku stvarnost.' },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-8 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 rounded-[2rem] group-hover:rotate-12 group-hover:bg-primary group-hover:scale-110 transition-all duration-500"></div>
                    <span className="text-3xl font-black text-primary group-hover:text-white transition-colors relative z-10">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#333333] mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-sm font-normal text-[#757779] leading-relaxed px-4">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEKCIJA: STATISTIKA (Stats Bar) */}
      <section className="py-40 bg-slate-950 relative overflow-hidden">
        {/* Provided Radial Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
            >
              Volimo i znamo <span className="text-primary italic">šta radimo!</span>
            </motion.h2>
            <p className="text-white/40 text-lg font-light max-w-2xl mx-auto">
              Naš uspjeh se ne mjeri brojevima, već povjerenjem koje nam klijenti ukazuju decenijama širom Evrope.
            </p>
          </div>

          {/* Premium Stats Bar */}
          <div className="glass bg-white/5 border-white/10 rounded-[3rem] p-12 md:p-16 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
              {[
                { val: 100, suffix: '+', label: 'Završenih projekata' },
                { val: 97, suffix: '%', label: 'Zadovoljstvo klijenata' },
                { val: 98, suffix: '%', label: 'Pozitivne recenzije' },
                { val: 50, suffix: '%', label: 'Povratak klijenata' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-center ${i !== 3 ? 'lg:border-r lg:border-white/10' : ''}`}
                >
                  <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                    <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                  </div>
                  <p className="text-primary font-black tracking-[0.2em] uppercase text-[10px]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEKCIJA: PORTFOLIO PREVIEW */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="inline-block px-4 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
              >
                Galerija radova
              </motion.div>
              <motion.h2 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-4xl md:text-6xl font-black text-[#333333] tracking-tight mb-8"
              >
                Neki od naših <span className="text-gradient">projekata</span>
              </motion.h2>
              <p className="text-[#757779] text-xl font-normal leading-relaxed">
                Sa više od 100 završenih projekata širom EU, BOMS-expo je prepoznatljiv po realizaciji najzahtjevnijih sajamskih rješenja.
              </p>
            </div>
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="hidden md:block"
            >
              <Link href="/reference" className="group flex items-center gap-4 text-primary font-black text-xl">
                <span>Svi projekti</span>
                <div className="w-14 h-14 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {previewProjects.map((project, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-[3rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 ${project.className}`}
              >
                <Link href={`/reference/${project.slug}`} className="relative block w-full h-full">
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                     <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                        <h3 className="text-white font-black text-2xl lg:text-3xl mb-2">{project.title}</h3>
                        <p className="text-white/60 font-bold tracking-widest uppercase text-[10px]">{project.sub}</p>
                        <div className="mt-8 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                           <span className="font-bold">Detalji projekta</span>
                           <ArrowRight className="w-4 h-4" />
                        </div>
                     </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center md:hidden mt-16">
            <Link href="/reference" className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-primary text-white font-black shadow-xl">
              Svi projekti
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
