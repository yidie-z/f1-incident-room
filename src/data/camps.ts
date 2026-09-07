import type { IncidentContent } from './types';

/**
 * 阵营标签：碰撞双方不同队时用车队名（如 "梅赛德斯"）；
 * 同队（队友互撞）时用「车队 · 车手」（如 "迈凯伦 · 诺里斯"），否则两栏标签无法区分。
 */
export function campLabel(incident: IncidentContent, side: 'a' | 'b'): string {
  const pa = incident.campNames.a.split('/').map((s) => s.trim());
  const pb = incident.campNames.b.split('/').map((s) => s.trim());
  const p = side === 'a' ? pa : pb;
  if (pa[0] === pb[0] && p[1]) return `${p[0]} · ${p[1].replace(/阵营$/, '')}`;
  return p[0];
}
