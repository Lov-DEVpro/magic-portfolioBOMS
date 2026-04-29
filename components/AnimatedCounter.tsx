'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useInView, useMotionValue, useSpring, motion } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ value, suffix = '', className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const fmt = useMemo(() => new Intl.NumberFormat('en-US'), []);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    mass: 1
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = fmt.format(Math.floor(latest)) + suffix;
      }
    });
  }, [fmt, springValue, suffix]);

  return <motion.span ref={ref} className={`inline-block min-w-[4ch] tabular-nums ${className}`}>{`0${suffix}`}</motion.span>;
}
