'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import projectsData from '@/data/projects.json';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } }
};

export default function ReferencePage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Consistent Header */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
          >
            Portfolio & Reference
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-[#1a1a1a] tracking-tighter leading-none mb-6"
          >
            Naši uspješno <br/>
            <span className="text-primary italic">realizovani projekti</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#757779] text-lg font-normal leading-relaxed"
          >
            Pregled odabranih sajamskih štandova i projekata koje smo realizovali širom Evrope.
          </motion.p>
        </div>

        {/* Strictly Aligned Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projectsData.map((project, i) => (
            <motion.div 
               key={i} 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               transition={{ delay: i * 0.05 }}
            >
              <Link href={`/reference/${project.slug}`} className="group block relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image 
                    src={project.featuredImage} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{project.year}</span>
                    <ArrowRight className="w-4 h-4 text-[#a0a0a0] group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-black text-[#1a1a1a] tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#757779] font-normal line-clamp-1 opacity-70">
                    {project.client}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Compact CTA Section */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative overflow-hidden bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white"
        >
           <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Pregledajte još projekata</h3>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-10 italic">
                Ukoliko želite detaljniji portfolio ili razgovarati o vašem projektu, tu smo za vas.
              </p>
              <Link href="/kontakt" className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-white text-primary font-black hover:scale-105 transition-transform duration-300">
                Zatraži kompletan portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
           </div>
        </motion.div>
      </div>
    </main>
  );
}
