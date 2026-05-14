import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 200, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 30, mass: 0.5 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth < 1024) return; // skip on small viewports — cheap perf win
    setEnabled(true);
    let raf = 0;
    let pending: { x: number; y: number } | null = null;
    const flush = () => {
      raf = 0;
      if (!pending) return;
      x.set(pending.x);
      y.set(pending.y);
      pending = null;
    };
    const move = (e: MouseEvent) => {
      pending = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(flush);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-[400px] h-[400px] rounded-full opacity-30 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.68 0.19 255 / 0.5), transparent 60%)" }} />
    </motion.div>
  );
}
