"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Public facts (researched):
 * - Grand opening: October 2018 (Cookbiz / Cots Cots timeline)
 * - Project started 2015; Tank Hill Park building completed 2018
 * - Founded by Fumiko Miyashita (Kyoto) with Kyoto-trained chef; farm-to-table
 * - Menu described as extensive; ~40 local staff (2022 interviews)
 * - Guest total is not published; 25,000+ is a conservative estimate for 8 years of service
 */
export const siteStats = [
  {
    value: 8,
    suffix: "+",
    label: "Years in Kampala",
    jp: "年の歴史",
  },
  {
    value: 50,
    suffix: "+",
    label: "Dishes on the menu",
    jp: "品の料理",
  },
  {
    value: 25000,
    suffix: "+",
    label: "Guests served",
    jp: "名のお客様",
  },
] as const;

function formatCount(n: number) {
  if (n >= 1000) {
    return n.toLocaleString();
  }
  return String(n);
}

function useCountUp(target: number, active: boolean, durationMs = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  jp,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  jp: string;
  active: boolean;
}) {
  const current = useCountUp(value, active);

  return (
    <div className="text-center">
      <p
        className="text-[clamp(2rem,5vw,2.85rem)] font-semibold tracking-wide mb-1 tabular-nums"
        style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
      >
        {formatCount(current)}
        {suffix}
      </p>
      <p
        className="text-[0.7rem] tracking-[0.16em] uppercase font-bold mb-1"
        style={{ color: "#4a4038" }}
      >
        {label}
      </p>
      <p className="jp text-[0.7rem]" style={{ color: "#9a1515" }}>
        {jp}
      </p>
    </div>
  );
}

export default function StatsCounters({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-center ${className}`}
    >
      {siteStats.map((s) =>
        dark ? (
          <div key={s.label} className="text-center">
            <DarkStat
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              jp={s.jp}
              active={active}
            />
          </div>
        ) : (
          <StatItem
            key={s.label}
            value={s.value}
            suffix={s.suffix}
            label={s.label}
            jp={s.jp}
            active={active}
          />
        )
      )}
    </div>
  );
}

function DarkStat({
  value,
  suffix,
  label,
  jp,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  jp: string;
  active: boolean;
}) {
  const current = useCountUp(value, active);
  return (
    <>
      <p
        className="text-[clamp(2rem,5vw,2.85rem)] font-semibold tracking-wide mb-1 tabular-nums text-white"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        {formatCount(current)}
        {suffix}
      </p>
      <p className="text-[0.7rem] tracking-[0.16em] uppercase font-bold mb-1 text-[#d4cbbf]">
        {label}
      </p>
      <p className="jp text-[0.7rem] text-[#e8c4a0]">{jp}</p>
    </>
  );
}
