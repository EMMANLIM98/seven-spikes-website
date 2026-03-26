'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterStatProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function CounterStat({ target, suffix = '', label, duration = 2000 }: CounterStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div
      ref={ref}
      className="px-8 py-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
    >
      <p className="text-white text-4xl sm:text-5xl font-bold mb-3">
        {count}{suffix}
      </p>
      <p className="text-white/90 text-lg font-medium">{label}</p>
    </div>
  );
}
