// 本文件由 tools/generate_incident.py 自动重建，请勿手改
import type { IncidentContent, TelemetryData } from '../types';

import { content as c0 } from './aut2024-ver-nor/content';
import t0 from './aut2024-ver-nor/telemetry.json';
import { content as c1 } from './canadi2025-nor-pia/content';
import t1 from './canadi2025-nor-pia/telemetry.json';
import { content as c2 } from './dutchg2026-alb-sai/content';
import t2 from './dutchg2026-alb-sai/telemetry.json';
import { content as c3 } from './greatb2021-ham-ver/content';
import t3 from './greatb2021-ham-ver/telemetry.json';
import { content as c4 } from './hungar2026-pia-sai/content';
import t4 from './hungar2026-pia-sai/telemetry.json';

export const incidents: { content: IncidentContent; telemetry: TelemetryData }[] = [
  { content: c0, telemetry: t0 as unknown as TelemetryData },
  { content: c1, telemetry: t1 as unknown as TelemetryData },
  { content: c2, telemetry: t2 as unknown as TelemetryData },
  { content: c3, telemetry: t3 as unknown as TelemetryData },
  { content: c4, telemetry: t4 as unknown as TelemetryData },
];

export function getIncident(slug: string) {
  return incidents.find((x) => x.content.slug === slug);
}
