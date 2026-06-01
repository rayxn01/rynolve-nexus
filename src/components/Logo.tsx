import logoImg from "@/assets/rynolve-logo.png";

export function Logo({ className = "h-9 w-9 sm:h-10 sm:w-10" }: { className?: string }) {
  return (
    <span className="flex items-center gap-2 select-none">
      <img
        src={logoImg}
        alt="Rynolve logo"
        width={40}
        height={40}
        className={`${className} object-contain`}
        draggable={false}
      />
      <span className="text-lg sm:text-xl font-display font-bold tracking-tight gradient-text">
        Rynolve
      </span>
    </span>
  );
}
