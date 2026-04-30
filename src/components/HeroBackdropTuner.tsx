"use client";

import { useEffect, useMemo, useState } from "react";

type SettingKey =
  | "opacity"
  | "darkness"
  | "blur"
  | "saturation"
  | "brightness"
  | "coral"
  | "grid"
  | "darkLeft"
  | "darkRight"
  | "centerClean";

type Setting = {
  key: SettingKey;
  label: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
};

const centerSettings: Setting[] = [
  { key: "opacity", label: "Mapa", min: 0, max: 100, step: 1, unit: "%" },
  { key: "darkness", label: "Escuro Centro", min: 0, max: 100, step: 1, unit: "%" },
  { key: "blur", label: "Blur", min: 0, max: 14, step: 0.5, unit: "px" },
  { key: "saturation", label: "Saturação", min: 0, max: 140, step: 1, unit: "%" },
  { key: "brightness", label: "Luz", min: 40, max: 130, step: 1, unit: "%" },
  { key: "coral", label: "Coral", min: 0, max: 30, step: 1, unit: "%" },
  { key: "grid", label: "Grid", min: 0, max: 60, step: 1, unit: "%" },
];

const sideSettings: Setting[] = [
  { key: "darkLeft", label: "Escuro Esq", min: 0, max: 100, step: 1, unit: "%" },
  { key: "darkRight", label: "Escuro Dir", min: 0, max: 100, step: 1, unit: "%" },
  { key: "centerClean", label: "Clean Centro", min: 0, max: 60, step: 1, unit: "%" },
];

const defaults: Record<SettingKey, number> = {
  opacity: 100,
  darkness: 100,
  blur: 0,
  saturation: 140,
  brightness: 40,
  coral: 0,
  grid: 0,
  darkLeft: 75,
  darkRight: 75,
  centerClean: 0,
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function readInitialValues(): Record<SettingKey, number> {
  if (typeof window === "undefined") return defaults;
  const params = new URLSearchParams(window.location.search);
  const next = { ...defaults };
  for (const setting of [...centerSettings, ...sideSettings]) {
    const raw = params.get(setting.key);
    if (raw === null) continue;
    const parsed = Number(raw);
    if (Number.isFinite(parsed)) {
      next[setting.key] = clamp(parsed, setting.min, setting.max);
    }
  }
  return next;
}

function shouldShowTuner() {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return (
    params.get("heroTune") === "1" ||
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  );
}

function formatValue(setting: Setting, value: number) {
  if (setting.unit === "%") return `${Math.round(value)}%`;
  if (setting.unit === "px") return `${value.toFixed(value % 1 ? 1 : 0)}px`;
  return String(value);
}

export function HeroBackdropTuner() {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [values, setValues] = useState<Record<SettingKey, number>>(defaults);

  useEffect(() => {
    setVisible(shouldShowTuner());
    setValues(readInitialValues());
  }, []);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const darkness = values.darkness / 100;
    const darkLeft = values.darkLeft / 100;
    const darkRight = values.darkRight / 100;
    const centerClean = values.centerClean / 100;
    
    // Calculate mid darkness based on centerClean - higher clean = darker center
    const darkMid = clamp(darkness + centerClean * 0.5, 0, 0.98);
    
    hero.style.setProperty("--hero-map-opacity", String(values.opacity / 100));
    hero.style.setProperty("--hero-map-blur", `${values.blur}px`);
    hero.style.setProperty("--hero-map-saturate", String(values.saturation / 100));
    hero.style.setProperty("--hero-map-brightness", String(values.brightness / 100));
    hero.style.setProperty("--hero-map-dark-left", String(clamp(darkLeft, 0, 0.98)));
    hero.style.setProperty("--hero-map-dark-mid", String(darkMid));
    hero.style.setProperty("--hero-map-dark-right", String(clamp(darkRight, 0, 0.98)));
    hero.style.setProperty("--hero-map-coral", String(values.coral / 100));
    hero.style.setProperty("--hero-grid-opacity", String(values.grid / 100));

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      params.set("heroTune", "1");
      for (const setting of [...centerSettings, ...sideSettings]) {
        params.set(setting.key, String(values[setting.key]));
      }
      const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
      window.history.replaceState(null, "", nextUrl);
    }
  }, [values]);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, [values]);

  if (!visible) return null;

  return (
    <aside className="fixed bottom-4 right-4 z-[80] w-[min(360px,calc(100vw-32px))] rounded-2xl border border-white/15 bg-black/75 p-4 text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.18em]">
            Hero tune
          </p>
          <p className="mt-1 text-xs text-white/45">
            Local preview only
          </p>
        </div>
        <button
          type="button"
          onClick={() => setCollapsed((v) => !v)}
          className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/70 transition hover:border-[color:var(--color-coral-500)] hover:text-white"
        >
          {collapsed ? "Abrir" : "Fechar"}
        </button>
      </div>

      {!collapsed ? (
        <>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {/* Coluna Centro */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.14em] text-white/40 mb-2">Centro</p>
              {centerSettings.map((setting) => (
                <label key={setting.key} className="block">
                  <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.12em] text-white/65">
                    <span>{setting.label}</span>
                    <span className="font-semibold text-[color:var(--color-coral-400)]">
                      {formatValue(setting, values[setting.key])}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={setting.min}
                    max={setting.max}
                    step={setting.step}
                    value={values[setting.key]}
                    onChange={(event) =>
                      setValues((current) => ({
                        ...current,
                        [setting.key]: Number(event.target.value),
                      }))
                    }
                    className="h-2 w-full accent-[color:var(--color-coral-500)]"
                  />
                </label>
              ))}
            </div>
            
            {/* Coluna Lados */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.14em] text-white/40 mb-2">Lados</p>
              {sideSettings.map((setting) => (
                <label key={setting.key} className="block">
                  <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.12em] text-white/65">
                    <span>{setting.label}</span>
                    <span className="font-semibold text-[color:var(--color-coral-400)]">
                      {formatValue(setting, values[setting.key])}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={setting.min}
                    max={setting.max}
                    step={setting.step}
                    value={values[setting.key]}
                    onChange={(event) =>
                      setValues((current) => ({
                        ...current,
                        [setting.key]: Number(event.target.value),
                      }))
                    }
                    className="h-2 w-full accent-[color:var(--color-coral-500)]"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setValues(defaults)}
              className="rounded-full border border-white/15 px-3 py-2 text-xs uppercase tracking-[0.14em] text-white/70 transition hover:border-[color:var(--color-coral-500)] hover:text-white"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => navigator.clipboard?.writeText(shareUrl)}
              className="rounded-full bg-[color:var(--color-coral-500)] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[color:var(--color-coral-400)]"
            >
              Copiar URL
            </button>
          </div>
        </>
      ) : null}
    </aside>
  );
}
