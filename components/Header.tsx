'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scrolling lock when mobile menu is open
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isMobileMenuOpen) {
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
      html.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
      html.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.1 }}
        className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center pointer-events-none"
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-[0.25,1,0.5,1] flex justify-between items-center px-4 sm:px-6 py-3 rounded-full ${
            isScrolled
              ? 'bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 w-full max-w-4xl'
              : 'bg-white/40 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-white/20 w-full max-w-7xl'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <motion.div 
               whileHover={{ scale: 1.05, rotate: 5 }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
               className="w-9 h-9 bg-[#20356a] rounded-full flex items-center justify-center text-white font-bold text-lg tracking-tighter shadow-md"
            >
              B
            </motion.div>
            <span className="font-bold text-lg text-[#333333] tracking-tight group-hover:text-[#20356a] transition-colors">BOMS-expo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink href="/" active={pathname === '/'}>Početna</NavLink>
            <NavLink href="/o-nama" active={pathname === '/o-nama'}>O nama</NavLink>
            
            <div className="relative group cursor-pointer px-3 py-2">
              <span className={`text-sm ${pathname.startsWith('/usluge') ? 'text-[#20356a] font-semibold' : 'text-[#757779] font-medium'} group-hover:text-[#20356a] transition-colors flex items-center gap-1 relative z-10`}>
                Usluge 
                <motion.div animate={{ rotate: 90 }} className="group-hover:-rotate-90 transition-transform duration-300">
                  <ChevronRight className="w-3.5 h-3.5" />
                </motion.div>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white/90 backdrop-blur-2xl border border-white/50 shadow-[0_20px_40px_rgb(0,0,0,0.08)] rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2 transform origin-top translate-y-2 group-hover:translate-y-0">
                <DropdownLink href="/usluge/projektovanje-sajamskih-standova">Dizajn i projektovanje</DropdownLink>
                <DropdownLink href="/usluge/izrada-sajamskih-standova">Izrada štandova</DropdownLink>
                <DropdownLink href="/usluge/opremanje-sajmova">Opremanje sajmova</DropdownLink>
                <DropdownLink href="/usluge/transport-i-skladistenje">Logistika i transport</DropdownLink>
                <DropdownLink href="/usluge/montaza-i-demontaza">Montaža i demontaža</DropdownLink>
                <DropdownLink href="/usluge/bazeni-i-oprema">Bazeni i oprema</DropdownLink>
                <DropdownLink href="/usluge/online-prodaja">Online prodaja</DropdownLink>
              </div>
            </div>
            
            <NavLink href="/reference" active={pathname === '/reference'}>Reference</NavLink>
            <NavLink href="/kontakt" active={pathname === '/kontakt'}>Kontakt</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/kontakt" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#20356a] text-white text-sm font-semibold hover:bg-[#15234b] transition-colors shadow-[0_8px_20px_rgba(32,53,106,0.2)]"
              >
                Zatraži ponudu
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#333333] bg-white/50 rounded-full hover:bg-white transition-colors"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.header>

      {/* Full Screen Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-3xl flex flex-col justify-center px-6"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 p-3 bg-gray-50 rounded-full text-[#333333]"
            >
               <X className="w-6 h-6" />
            </button>
            
            <motion.div 
               initial="hidden" animate="visible" exit="hidden"
               variants={{
                 hidden: { opacity: 0 },
                 visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
               }}
               className="flex flex-col space-y-6 lg:space-y-8 text-center"
            >
              <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Početna</MobileNavLink>
              <MobileNavLink href="/o-nama" onClick={() => setIsMobileMenuOpen(false)}>O nama</MobileNavLink>
              <MobileNavLink href="/usluge" onClick={() => setIsMobileMenuOpen(false)}>Usluge</MobileNavLink>
              <MobileNavLink href="/reference" onClick={() => setIsMobileMenuOpen(false)}>Reference</MobileNavLink>
              <MobileNavLink href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</MobileNavLink>
              
              <motion.div 
                 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                 className="pt-8"
              >
                <Link
                  href="/kontakt"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#20356a] text-white text-lg font-bold shadow-[0_10px_30px_rgba(32,53,106,0.3)]"
                >
                  Zatraži ponudu
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// NavLink with custom animated hover pill
function NavLink({ href, active, children }: { href: string, active: boolean, children: React.ReactNode }) {
  return (
    <Link href={href} className="relative px-4 py-2 group">
      <span className={`relative z-10 text-sm ${active ? 'text-[#20356a] font-bold' : 'text-[#757779] font-medium'} group-hover:text-[#20356a] transition-colors`}>
        {children}
      </span>
      {active && (
        <motion.div 
           layoutId="nav-indicator"
           className="absolute inset-0 bg-blue-50/80 rounded-full z-0"
           transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <div className="absolute inset-x-4 bottom-1 h-0.5 bg-[#20356a] transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300 ease-[0.25,1,0.5,1] rounded-full z-10"></div>
    </Link>
  );
}

function DropdownLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-4 py-2.5 text-sm font-medium text-[#757779] hover:bg-blue-50/50 hover:text-[#20356a] rounded-xl transition-colors">
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } } }}>
       <Link href={href} onClick={onClick} className="text-4xl sm:text-5xl font-bold text-[#333333] hover:text-[#20356a] transition-colors inline-block">
         {children}
       </Link>
    </motion.div>
  );
}
