import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Pick dark or light foreground for a hex background so contrast ≥ 4.5:1 where possible. */
export function contrastText(hexBg: string): string {
  const m = hexBg.replace('#', '')
  if (!/^[0-9a-fA-F]{6}$/.test(m)) return '#0B0E14'
  const r = parseInt(m.slice(0, 2), 16)
  const g = parseInt(m.slice(2, 4), 16)
  const b = parseInt(m.slice(4, 6), 16)
  const lum = (c: number) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  }
  const L = 0.2126 * lum(r) + 0.7152 * lum(g) + 0.0722 * lum(b)
  // contrast with white = 1.05/(L+0.05); with #0B0E14 (L≈0.0056) = (L+0.05)/0.0556
  return 1.05 / (L + 0.05) >= (L + 0.05) / 0.0556 ? '#FFFFFF' : '#0B0E14'
}
