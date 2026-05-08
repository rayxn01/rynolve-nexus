import logoImg from "@/assets/rynolve-logo.png";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2`}>
      <img src={logoImg} alt="Rynolve" className={className} />
      <span className="font-display text-xl font-bold tracking-tight">
        <span className="gradient-text">Rynolve</span>
      </span>
    </div>
  );
}
