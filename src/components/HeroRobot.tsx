import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Large interactive robot for the hero section.
 * Head tilts toward cursor, eyes track it, antenna pulses.
 * Pure SVG + Framer Motion — no 3D libs, fast to load.
 */
export function HeroRobot() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  // Raw pointer offsets relative to robot center (-1..1)
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  // Smoothed
  const sx = useSpring(px, { stiffness: 90, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 90, damping: 18, mass: 0.6 });

  // Head transforms
  const headRotateY = useTransform(sx, [-1, 1], [-14, 14]);
  const headRotateX = useTransform(sy, [-1, 1], [10, -10]);
  const headTranslateX = useTransform(sx, [-1, 1], [-6, 6]);
  const headTranslateY = useTransform(sy, [-1, 1], [-4, 4]);

  // Eye transforms (move further within sockets)
  const eyeX = useTransform(sx, [-1, 1], [-3.2, 3.2]);
  const eyeY = useTransform(sy, [-1, 1], [-2.2, 2.2]);

  // Glow intensity reacts to proximity
  const glow = useTransform([sx, sy], ([x, y]) => {
    const d = Math.min(1, Math.hypot(x as number, y as number));
    return 0.55 + (1 - d) * 0.45;
  });

  useEffect(() => {
    setReady(true);
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      px.set(Math.max(-1.2, Math.min(1.2, dx)));
      py.set(Math.max(-1.2, Math.min(1.2, dy)));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [px, py]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full aspect-square max-w-[560px] mx-auto"
      style={{ perspective: 1000 }}
    >
      {/* Ambient glow behind */}
      <motion.div
        style={{ opacity: glow }}
        className="absolute inset-8 rounded-full blur-3xl"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-violet/40 via-primary/35 to-accent/30" />
      </motion.div>

      {/* Soft floor reflection */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full bg-primary/20 blur-2xl" />

      {/* Orbiting rings */}
      <div className="absolute inset-0 animate-spin-slow opacity-40 pointer-events-none">
        <div className="absolute inset-6 rounded-full border border-primary/20" />
        <div className="absolute inset-16 rounded-full border border-accent/15" />
      </div>

      <motion.div
        animate={ready ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_30px_60px_rgba(98,80,255,0.35)]"
          style={{
            rotateX: headRotateX,
            rotateY: headRotateY,
            x: headTranslateX,
            y: headTranslateY,
          }}
        >
          <defs>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.22 0.04 270)" />
              <stop offset="50%" stopColor="oklch(0.16 0.03 270)" />
              <stop offset="100%" stopColor="oklch(0.10 0.02 270)" />
            </linearGradient>
            <linearGradient id="faceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.28 0.05 270)" />
              <stop offset="100%" stopColor="oklch(0.10 0.02 270)" />
            </linearGradient>
            <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.62 0.22 290)" />
              <stop offset="100%" stopColor="oklch(0.78 0.18 230)" />
            </linearGradient>
            <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.95 0.15 200)" />
              <stop offset="60%" stopColor="oklch(0.78 0.18 230)" />
              <stop offset="100%" stopColor="oklch(0.62 0.22 290)" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Antenna */}
          <line x1="200" y1="30" x2="200" y2="70" stroke="url(#rim)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="200" cy="24" r="9" fill="url(#eyeGlow)" filter="url(#glow)">
            <animate attributeName="r" values="8;11;8" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Neck */}
          <rect x="180" y="290" width="40" height="22" rx="6" fill="url(#bodyGrad)" stroke="oklch(0.62 0.22 290 / 0.4)" />

          {/* Shoulders */}
          <rect x="80" y="305" width="240" height="70" rx="28" fill="url(#bodyGrad)" stroke="oklch(0.62 0.22 290 / 0.4)" />
          <circle cx="100" cy="340" r="14" fill="oklch(0.18 0.03 270)" stroke="url(#rim)" strokeWidth="1.5" />
          <circle cx="300" cy="340" r="14" fill="oklch(0.18 0.03 270)" stroke="url(#rim)" strokeWidth="1.5" />
          <circle cx="200" cy="340" r="6" fill="url(#eyeGlow)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite" />
          </circle>

          {/* Head outer */}
          <rect x="100" y="70" width="200" height="220" rx="60" fill="url(#bodyGrad)" stroke="url(#rim)" strokeWidth="2" />

          {/* Side ear pods */}
          <rect x="92" y="160" width="14" height="50" rx="6" fill="oklch(0.18 0.03 270)" stroke="oklch(0.62 0.22 290 / 0.5)" />
          <rect x="294" y="160" width="14" height="50" rx="6" fill="oklch(0.18 0.03 270)" stroke="oklch(0.62 0.22 290 / 0.5)" />

          {/* Face panel */}
          <rect x="120" y="110" width="160" height="150" rx="40" fill="url(#faceGrad)" />
          <rect x="120" y="110" width="160" height="150" rx="40" fill="none" stroke="oklch(1 0 0 / 0.06)" />

          {/* Highlight */}
          <ellipse cx="170" cy="140" rx="50" ry="14" fill="oklch(1 0 0 / 0.05)" />

          {/* Eyes */}
          <motion.g style={{ x: eyeX, y: eyeY }}>
            {/* Left eye */}
            <circle cx="170" cy="180" r="16" fill="oklch(0.05 0.02 270)" />
            <circle cx="170" cy="180" r="10" fill="url(#eyeGlow)" filter="url(#glow)" />
            <circle cx="172" cy="178" r="3" fill="oklch(0.99 0 0)" opacity="0.9" />
            {/* Right eye */}
            <circle cx="230" cy="180" r="16" fill="oklch(0.05 0.02 270)" />
            <circle cx="230" cy="180" r="10" fill="url(#eyeGlow)" filter="url(#glow)" />
            <circle cx="232" cy="178" r="3" fill="oklch(0.99 0 0)" opacity="0.9" />
          </motion.g>

          {/* Mouth / speaker grille */}
          <g>
            <rect x="170" y="220" width="60" height="14" rx="7" fill="oklch(0.10 0.02 270)" stroke="url(#rim)" strokeWidth="0.8" />
            {[0,1,2,3,4,5].map((i) => (
              <rect key={i} x={176 + i*8} y="225" width="3" height="4" rx="1" fill="url(#eyeGlow)">
                <animate attributeName="height" values="2;6;2" dur={`${0.6 + i*0.1}s`} repeatCount="indefinite" />
                <animate attributeName="y" values="227;224;227" dur={`${0.6 + i*0.1}s`} repeatCount="indefinite" />
              </rect>
            ))}
          </g>

          {/* Chin LED */}
          <circle cx="200" cy="265" r="3" fill="url(#eyeGlow)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </motion.svg>
      </motion.div>
    </div>
  );
}
