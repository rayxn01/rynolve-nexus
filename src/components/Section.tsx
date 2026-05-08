import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground text-balance">{description}</p>
      )}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  y = 20,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet/20 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[140px] animate-blob" style={{ animationDelay: "8s" }} />
    </div>
  );
}
