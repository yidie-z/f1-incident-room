import type { IncidentContent } from '../../types';
import { statements, expertViews, fiaDecision } from './legacy';

export const content: IncidentContent = {
  slug: 'aut2024-ver-nor',
  title: '3 号弯：一场"迟早要来"的碰撞',
  event: '2024 奥地利大奖赛 · 正赛第 64 圈 / 共 71 圈',
  place: '红牛环赛道 · 施皮尔贝格',
  date: '2024 年 6 月 30 日',
  verdict:
    'FIA 干事裁定：1 号车（维斯塔潘）"负主要责任"，罚时 10 秒 + 超级驾照扣 2 分。诺里斯爆胎退赛，维斯塔潘第 5 完赛，拉塞尔"捡漏"夺冠。',
  drivers: { a: 'NOR', b: 'VER' },
  driverNames: { NOR: '诺里斯', VER: '维斯塔潘' },
  colors: { a: '#FF8000', b: '#3671C6' },
  campNames: { a: '迈凯伦 / 诺里斯阵营', b: '红牛 / 维斯塔潘阵营' },
  statements: statements as unknown as IncidentContent['statements'],
  expertViews: expertViews as unknown as IncidentContent['expertViews'],
  fiaDecision: fiaDecision as IncidentContent['fiaDecision'],
  telemetryNotes: {
    zoneLabel: '3 号弯刹车区（赛道上坡顶点）',
    window: [1900, 2700],
    contactZone: [2147, 2210],
    lapWindow: [50, 64],
    narrative:
      '诺里斯带着 DRS（尾速 319 km/h，比维斯塔潘快约 20 km/h）从外侧杀入。红线区域为干事认定的碰撞接触区：维斯塔潘的车速在 2207 米处骤降到 69 km/h 并松掉油门滑行（左后轮爆胎），诺里斯出弯后仍在加速——他的右后轮随后在高速下解体，直接终结比赛。',
    caveat:
      '遥测为等距采样插值后的公开计时数据，不含方向盘转角，因此无法直接回答"是否刹车区变线"——这正是双方各执一词、而干事要看车载视频才能定责的原因。数据能确认的是：两人在刹车区的节奏差异，以及碰撞点后两台车截然不同的命运。',
  },
  complete: true,
};
