import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function AIMascot() {
  const [open, setOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 15 });
  const sy = useSpring(my, { stiffness: 80, damping: 15 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
    let raf = 0;
    let pending: { x: number; y: number } | null = null;
    const flush = () => {
      raf = 0;
      if (!pending) return;
      const el = document.getElementById("ryno-mascot");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = pending.x - cx;
      const dy = pending.y - cy;
      const d = Math.hypot(dx, dy) || 1;
      const max = 6;
      mx.set((dx / d) * Math.min(max, d / 30));
      my.set((dy / d) * Math.min(max, d / 30));
      pending = null;
    };
    const onMove = (e: MouseEvent) => {
      pending = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(flush);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [mx, my]);

  const eyeX = useTransform(sx, (v) => v * 0.6);
  const eyeY = useTransform(sy, (v) => v * 0.6);

  if (isTouch) return null;

  return (
    <div id="ryno-mascot" className="fixed bottom-6 right-6 z-40 hidden md:block">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute bottom-full right-0 mb-3 w-64 glass rounded-2xl p-4 shadow-elegant glow-border"
        >
          <p className="text-sm font-semibold gradient-text mb-1">Hi, I'm Ryno 👋</p>
          <p className="text-xs text-muted-foreground">
            Your AI guide. Need help finding services, pricing, or booking a call?
          </p>
          <div className="mt-3 flex gap-2">
            <a href="/services" className="text-xs px-3 py-1.5 rounded-full bg-primary/20 text-primary hover:bg-primary/30">Services</a>
            <a href="/contact" className="text-xs px-3 py-1.5 rounded-full glass hover:shadow-glow-sm">Contact</a>
          </div>
        </motion.div>
      )}

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ x: sx, y: sy }}
        className="relative w-16 h-16 rounded-2xl glass glow-border shadow-glow flex items-center justify-center"
        aria-label="AI Assistant"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet/20 via-primary/20 to-accent/20 animate-gradient-shift" />
        <svg viewBox="0 0 64 64" className="relative w-10 h-10">
          {/* Antenna */}
          <line x1="32" y1="6" x2="32" y2="14" stroke="oklch(0.78 0.18 230)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="5" r="2.5" fill="oklch(0.82 0.15 210)">
            <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          {/* Head */}
          <rect x="14" y="14" width="36" height="30" rx="8" fill="url(#g)" stroke="oklch(0.78 0.18 230)" strokeWidth="1" />
          {/* Eyes */}
          <motion.g style={{ x: eyeX, y: eyeY }}>
            <circle cx="24" cy="28" r="3" fill="oklch(0.98 0.005 250)" />
            <circle cx="40" cy="28" r="3" fill="oklch(0.98 0.005 250)" />
          </motion.g>
          {/* Mouth */}
          <rect x="26" y="36" width="12" height="2" rx="1" fill="oklch(0.78 0.18 230)" />
          {/* Body hint */}
          <rect x="20" y="46" width="24" height="6" rx="3" fill="oklch(0.22 0.03 270)" stroke="oklch(0.78 0.18 230 / 0.5)" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.62 0.22 290)" />
              <stop offset="100%" stopColor="oklch(0.68 0.19 255)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.button>
    </div>
  );
}
