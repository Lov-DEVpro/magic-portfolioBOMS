'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import projectsData from '@/data/projects.json';
import { notFound } from 'next/navigation';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData.find((p) => p.slug === slug);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white" ref={containerRef}>
      {/* Refined Hero */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-[#111]">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src={project.featuredImage}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover opacity-70"
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <Link 
              href="/reference" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Nazad na reference</span>
            </Link>
            
            <div className="max-w-4xl">
              <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">{project.year} / {project.client}</p>
              <h1 className="text-5xl md:text-7xl font-black text-[#1a1a1a] tracking-tighter leading-[0.95]">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Info Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Info */}
            <div className="lg:col-span-4 space-y-12">
              <div className="grid grid-cols-1 gap-10">
                <Stat label="Klijent" value={project.client} />
                <Stat label="Usluga" value={project.service} />
                <Stat label="Godina" value={project.year} />
              </div>
              
              <div className="pt-10 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Opis projekta</p>
                <p className="text-lg text-[#757779] font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Structured Gallery */}
            <div className="lg:col-span-8 space-y-12">
              {project.gallery.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gray-50 shadow-sm"
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Simplified Footer Nav */}
      <section className="py-20 bg-[#fafafa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link href="/reference" className="group inline-flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Svi radovi</span>
            <h4 className="text-4xl md:text-6xl font-black text-[#1a1a1a] tracking-tighter hover:text-primary transition-all duration-300">
              Vidi ostale projekte
            </h4>
            <div className="mt-8 w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
               <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-[#a0a0a0] mb-2">{label}</p>
      <p className="text-xl font-black text-[#1a1a1a] leading-tight">{value}</p>
    </div>
  );
}
