import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export function GradientButton({
  to,
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const sizing = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm";

  const variants = {
    primary:
      "text-primary-foreground bg-gradient-to-r from-violet via-primary to-accent animate-gradient-shift hover:shadow-glow",
    ghost: "text-foreground hover:bg-white/5",
    outline: "text-foreground glass glow-border hover:shadow-glow-sm",
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all ${sizing} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (to) return <Link to={to} onClick={onClick}>{inner}</Link>;
  if (href) return <a href={href} onClick={onClick}>{inner}</a>;
  return <button onClick={onClick}>{inner}</button>;
}
