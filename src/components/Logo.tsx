import logoImg from "@/assets/rynolve-logo.png";

export function Logo({ className = "h-11 w-auto sm:h-12" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Rynolve"
      className={`${className} object-contain select-none`}
      draggable={false}
    />
  );
}
