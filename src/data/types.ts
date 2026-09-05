// 共享类型：一个"争议事件页面"所需的全部数据契约。
// 生成器（tools/generate_incident.py）产出的内容文件遵循此结构。

export type Camp = 'a' | 'b' | 'neutral' | 'fia';

export interface Source {
  label: string;
  url: string;
  date?: string;
}

export interface Statement {
  id: string;
  phase: 'pre' | 'incident' | 'immediate' | 'team' | 'cooldown';
  when: string;
  speaker: string;
  role: string;
  camp: Camp;
  zh: string;
  quote?: string;
  tone: string;
  source: Source & { date: string };
}

export interface FiaDecision {
  docName: string;
  original: string;
  plain: string;
  rules: string[];
  sources: Source[];
}

export interface TelemetryNotes {
  /** 遥测图表聚焦的弯道/区段描述，例如 "3 号弯刹车区" */
  zoneLabel: string;
  /** 图表距离窗口 [start, end]（米） */
  window: [number, number];
  /** 接触区 [start, end]（米），由生成器估算，可手工修正 */
  contactZone?: [number, number];
  /** 圈速图窗口 [起, 止] */
  lapWindow: [number, number];
  /** 图表下方的解读文字 */
  narrative: string;
  /** 数据局限性说明 */
  caveat: string;
}

export interface IncidentContent {
  slug: string;
  title: string;
  event: string;
  place: string;
  date: string;
  verdict: string;
  /** 双方车手代码，a = 受损方/挑战方，b = 获益方/防守方 */
  drivers: { a: string; b: string };
  driverNames: Record<string, string>;
  /** 阵营展示色（车队色） */
  colors: { a: string; b: string };
  campNames: { a: string; b: string };
  statements: Statement[];
  expertViews: Statement[];
  fiaDecision?: FiaDecision;
  telemetryNotes?: TelemetryNotes;
  /** false = 生成器产出的骨架，发言内容待人工补充 */
  complete: boolean;
}

// ---- 遥测 JSON 结构（与生成器输出一致） ----

export interface TelLap {
  lap: number;
  dist: number[];
  speed: number[];
  brake: number[];
  throttle: number[];
  gear: number[];
  drs: number[];
}

export interface TelemetryData {
  lapTimes: {
    driver: string;
    lap: number;
    time: number | null;
    compound: string;
    tyreLife: number | null;
    position: number | null;
  }[];
  telemetry: Record<string, TelLap[]>;
  meta?: {
    year: number;
    gp: string;
    incidentLap: number;
    detectedAt: string;
  };
}

export const phaseLabels: Record<Statement['phase'], { label: string; desc: string }> = {
  pre: { label: '事前 · 火药桶在升温', desc: '谁在追谁，矛盾如何积累' },
  incident: { label: '事发 · 碰撞瞬间', desc: '碰撞瞬间与官方认定' },
  immediate: { label: '事发后 · 首次表态', desc: '肾上腺素最高的时刻' },
  team: { label: '阵营护犊 · 车队下场', desc: '领队与高管的立场战' },
  cooldown: { label: '冷却 · 二次表态', desc: '几天之后，语气变了' },
};
