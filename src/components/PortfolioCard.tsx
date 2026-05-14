import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ExternalLink, Globe } from "lucide-react";

export interface PortfolioCardProps {
  name: string;
  url: string;
  category: string;
  description: string;
  color: string;
  index: number;
}

function buildSources(url: string): string[] {
  // Strip protocol for some providers
  const noProto = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return [
    // WordPress mShots — free, reliable, real screenshots
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=1100`,
    // Microlink screenshot (free tier)
    `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=1600`,
    // Thum.io fallback
    `https://image.thum.io/get/width/900/crop/1100/noanimate/${url}`,
    // Google PageSpeed (always works as last resort but small)
    `https://www.google.com/s2/favicons?domain=${noProto}&sz=256`,
  ];
}

export function PortfolioCard({ name, url, category, description, color, index }: PortfolioCardProps) {
  const sources = useMemo(() => buildSources(url), [url]);
  const [srcIdx, setSrcIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Initials for fallback tile
  const initials = useMemo(
    () =>
      name
        .split(/\s+/)
        .map((w) => w[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase(),
    [name],
  );

  return (
    <motion.a
      layout
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: (index % 9) * 0.04 }}
      whileHover={{ y: -8 }}
      className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass cursor-pointer block touch-manipulation"
    >
      {/* Skeleton / brand fallback layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100 animate-pulse"
        }`}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-display font-bold text-white/30 tracking-tight select-none">
            {initials}
          </span>
        </div>
      )}

      {!failed && (
        <img
          src={sources[srcIdx]}
          alt={`${name} — live website preview`}
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={index < 3 ? "high" : "low"}
          width={900}
          height={1100}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={(e) => {
            // mShots returns a tiny placeholder (~400 bytes) while generating — treat as not-loaded
            const img = e.currentTarget;
            if (img.naturalWidth < 200 || img.naturalHeight < 200) {
              if (srcIdx < sources.length - 1) {
                setSrcIdx((i) => i + 1);
              } else {
                setFailed(true);
              }
              return;
            }
            setLoaded(true);
          }}
          onError={() => {
            if (srcIdx < sources.length - 1) {
              setSrcIdx((i) => i + 1);
            } else {
              setFailed(true);
            }
          }}
        />
      )}

      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-30 mix-blend-overlay pointer-events-none`} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-white/90 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur">
          <Globe className="h-3 w-3" /> {category}
        </span>
        <h3 className="mt-2 text-xl font-bold text-white leading-tight">{name}</h3>
        <p className="mt-1 text-xs text-white/70 line-clamp-2">{description}</p>
      </div>

      {/* Hover overlay — desktop (hover-capable) only, so mobile single-tap navigates */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end pointer-events-none">
        <span className="text-xs text-primary uppercase tracking-wider">{category}</span>
        <h3 className="mt-1 text-2xl font-bold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary self-start">
          Visit website <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.a>
  );
}
