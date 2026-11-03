import type { IncidentContent } from '../../types';

// 2026 墨西哥城大奖赛 · 皮亚斯特里 × 林德布拉德 第 59 圈 1 号弯碰撞
// 遥测来自 OpenF1 公共数据（F1 官方计时接口已调整为授权访问，本次由 tools/openf1_export.py 导出），
// 发言与裁决内容取自公开报道，每条附原始来源链接。
// 诚实声明：截至收录时（赛后 2 天），林德布拉德本人尚未有公开引语被检索到，其视角以干事决定书转述呈现。
export const content: IncidentContent = {
  slug: 'mexico2026-pia-lin',
  title: '1 号弯外线："我真的没地方可去了"',
  event: '2026 墨西哥城大奖赛 · 正赛第 59 圈 / 共 71 圈',
  place: '罗德里格斯兄弟赛道 · 墨西哥城',
  date: '2026 年 11 月 1 日',
  verdict:
    'FIA 干事裁定：81 号车（皮亚斯特里）造成碰撞，赛后追加罚时 10 秒——他从第 7 名直接跌出积分区至第 15 名，本赛季第四次颗粒无收。干事认定他"从未完全并排"，本可以在 2 号弯前向左切出赛道避免碰撞。天空体育的尚多克则公开认为这是"比赛事故"。',
  drivers: { a: 'LIN', b: 'PIA' },
  driverNames: { LIN: '林德布拉德', PIA: '皮亚斯特里' },
  colors: { a: '#6692FF', b: '#FF8000' },
  campNames: { a: 'Racing Bulls / 林德布拉德', b: '迈凯伦 / 皮亚斯特里' },
  statements: [
    {
      id: 'pre-1',
      phase: 'pre',
      when: '赛前背景（排位赛）',
      speaker: '赛场背景',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '皮亚斯特里经历了一场"灾难性"的排位赛：Q2 出局，自 2024 年墨西哥站以来近两年首次无缘 Q3，只能从第 12 位发车。正赛他一路追回积分区，通过进站策略升到第 7——直到收官阶段的安全车改变了所有人的节奏。',
      tone: '客观背景',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/piastri-loses-p7-after-being-handed-post-race-penalty-at-mexico-city-gp.5dk3wHeak2yu7xWF0OhsRt',
        date: '2026-11-02',
      },
    },
    {
      id: 'pre-2',
      phase: 'pre',
      when: '安全车重启（第 54 圈前后）',
      speaker: '赛场背景',
      role: '转折',
      camp: 'a',
      zh: '安全车重启时，Racing Bulls 的 18 岁新秀林德布拉德抓住机会超越皮亚斯特里，升至第 7。两人同为软胎，但林德布拉德的胎多跑了 2 圈。皮亚斯特里立刻想把位置要回来——计时数据显示，重启后每一圈两人首尾相接，圈速差距始终在两成秒以内。',
      tone: '客观背景',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/piastri-loses-p7-after-being-handed-post-race-penalty-at-mexico-city-gp.5dk3wHeak2yu7xWF0OhsRt',
        date: '2026-11-02',
      },
    },
    {
      id: 'inc-1',
      phase: 'incident',
      when: '第 59 圈 · 1 号弯',
      speaker: '赛事进程',
      role: '碰撞经过',
      camp: 'neutral',
      zh: '皮亚斯特里在 1.2 公里大直道上吸着尾流（尾速 353 km/h，比林德布拉德快 12 km/h），抽头走 1 号弯外线。他始终没有与林德布拉德完全并排，但坚持留在外线；过弯途中他的前轮与林德布拉德的左后轮接触，Racing Bulls 赛车打滑撞上护墙退赛，皮亚斯特里右侧空力套件大面积缺损，继续比赛。',
      tone: '客观经过',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/piastri-loses-p7-after-being-handed-post-race-penalty-at-mexico-city-gp.5dk3wHeak2yu7xWF0OhsRt',
        date: '2026-11-02',
      },
    },
    {
      id: 'imm-1',
      phase: 'immediate',
      when: '碰撞后（车队无线电）',
      speaker: '奥斯卡·皮亚斯特里',
      role: '迈凯伦车手 · 后被判责任方',
      camp: 'b',
      zh: '我本来想把这个弯让给他的。我们在进弯之前就接触了——我的车是完全笔直的。',
      quote:
        '"I was trying to give him the corner. We made contact before the corner. I was perfectly straight."',
      tone: '第一时间自辩',
      source: {
        label: 'Fox Sports',
        url: 'https://www.foxsports.com.au/motorsport/formula-one/f1-2026-oscar-piastri-and-arvid-lindblad-crash-at-mexico-city-grand-prix-stewards-investigate-collision-mclaren-driver-finishes-seventh-after-qualifying-disaster/news-story/76de322647002f5f15294a183bf90d70',
        date: '2026-11-02',
      },
    },
    {
      id: 'imm-2',
      phase: 'immediate',
      when: '赛后采访',
      speaker: '奥斯卡·皮亚斯特里',
      role: '迈凯伦车手',
      camp: 'b',
      zh: '显然我还得回去再看录像，但在车里的感觉是：我想切 1 号弯内线，阿维德很晚才变线，我为了躲他结果到了外线。从那一刻起我就只能尝试绕外线过。他把我挤得很开，我当时正在收油退让。我们接触的位置离真正的弯角还有一段距离。从我这边看，我真的没有别的地方可去了。看看干事怎么说吧。',
      quote:
        '"I obviously need to look back at it more, but from in the car, I went to go up the inside of turn 1 and Arvid moved very late, so I kind of ended up on the outside because I was avoiding him. Then from that point onwards I tried to go around the outside. He pushed me pretty wide. I was trying to back out. Where we made contact was well before the corner actually happened. From my side of things I really didn\'t have anywhere else to go. We\'ll see what the stewards say."',
      tone: '自辩（"无处可去"）',
      source: {
        label: 'Fox Sports',
        url: 'https://www.foxsports.com.au/motorsport/formula-one/f1-2026-oscar-piastri-and-arvid-lindblad-crash-at-mexico-city-grand-prix-stewards-investigate-collision-mclaren-driver-finishes-seventh-after-qualifying-disaster/news-story/76de322647002f5f15294a183bf90d70',
        date: '2026-11-02',
      },
    },
    {
      id: 'imm-3',
      phase: 'immediate',
      when: '赛后听证（干事决定书转述）',
      speaker: '阿维德·林德布拉德',
      role: 'Racing Bulls 车手 · 被撞退赛方',
      camp: 'a',
      zh: '截至收录时（赛后 2 天），林德布拉德本人尚未有公开引语被检索到——作为新秀，他的赛后采访曝光度远不如大牌车手。干事决定书转述了他的行为定性：他在 1 号弯通过松刹车来防守位置，但没有把对手逼出赛道，而且在外侧留出了赛车空间——注意干事的措辞："这（留空间）本不是他必须做的"。',
      quote:
        '"Through turn 1, the driver of Car 41 defended his position by releasing the brakes however does not force Car 81 off the track, allowing racing room on the outside – which he is not required to do." —— 干事决定书（Formula1.com 转引）',
      tone: '官方转述（本人引语暂缺）',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/piastri-loses-p7-after-being-handed-post-race-penalty-at-mexico-city-gp.5dk3wHeak2yu7xWF0OhsRt',
        date: '2026-11-02',
      },
    },
    {
      id: 'imm-4',
      phase: 'immediate',
      when: '处罚公布',
      speaker: '赛事进程',
      role: '处罚后果',
      camp: 'neutral',
      zh: '干事赛后追加 10 秒罚时：皮亚斯特里从第 7 名跌到第 15 名——完赛车手里的倒数第三。他这一站从第 12 位一路追回来的救赎之旅就此归零，这是继澳大利亚（发车前撞墙）、匈牙利（变速箱）、阿塞拜疆之后，他 2026 赛季第四次颗粒无收。奥迪的博尔托莱托因此递补进入积分区。同场维斯塔潘拿下个人第六次墨西哥城胜利。',
      tone: '客观后果',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/piastri-loses-p7-after-being-handed-post-race-penalty-at-mexico-city-gp.5dk3wHeak2yu7xWF0OhsRt',
        date: '2026-11-02',
      },
    },
    {
      id: 'cool-1',
      phase: 'cooldown',
      when: '赛后复盘（赛季视角）',
      speaker: '赛场背景',
      role: '余波',
      camp: 'b',
      zh: '这次处罚的残忍之处在于对比：就在一年前（2025 赛季收官阶段），皮亚斯特里还在为总冠军而战；而 2026 年他的赛季被可靠性、排位失误和碰撞罚单反复撕碎。墨西哥本可以是一个"从 P12 追到积分"的励志故事，最后 12 圈变成了又一场空。',
      tone: '赛季叙事',
      source: {
        label: 'Fox Sports',
        url: 'https://www.foxsports.com.au/motorsport/formula-one/f1-2026-oscar-piastri-and-arvid-lindblad-crash-at-mexico-city-grand-prix-stewards-investigate-collision-mclaren-driver-finishes-seventh-after-qualifying-disaster/news-story/76de322647002f5f15294a183bf90d70',
        date: '2026-11-02',
      },
    },
  ],
  expertViews: [
    {
      id: 'exp-1',
      phase: 'incident',
      when: '赛事直播评论（碰撞发生后）',
      speaker: '卡伦·尚多克',
      role: '天空体育 F1 解说分析师 · 前 F1 车手',
      camp: 'neutral',
      zh: '尚多克第一时间就认为皮亚斯特里没有任何过错：就算他刹车减速，他也不能凭空消失。我认为这就是一起比赛事故，对林德布拉德来说真的非常不幸。——注意：这个判断与干事的最终裁决完全相反，正是这起事件"两种声音"的核心分歧。',
      quote:
        '"Even if he braked to slow down, he can\'t just disappear. I think that\'s just a racing incident and really unfortunate for Lindblad there."',
      tone: '认为是比赛事故',
      source: {
        label: 'Fox Sports（转引天空体育直播评论）',
        url: 'https://www.foxsports.com.au/motorsport/formula-one/f1-2026-oscar-piastri-and-arvid-lindblad-crash-at-mexico-city-grand-prix-stewards-investigate-collision-mclaren-driver-finishes-seventh-after-qualifying-disaster/news-story/76de322647002f5f15294a183bf90d70',
        date: '2026-11-02',
      },
    },
    {
      id: 'exp-2',
      phase: 'cooldown',
      when: '赛后分析',
      speaker: '干事裁决逻辑（vs 尚多克）',
      role: '裁决视角对照',
      camp: 'neutral',
      zh: '干事与尚多克的分歧点在于"避让义务"：尚多克认为外线车手"不能凭空消失"所以无责；干事则认为皮亚斯特里从未完全并排、本就不拥有弯角权，因此责任恰恰在他——他本可以在 1 号弯后向左切出赛道（哪怕冲出赛道）来避免接触。裁决书原话："如果 81 号车车手在 1 号弯后进一步向左移动，这次碰撞本可以避免，即使这意味着在 2 号弯前离开赛道。"',
      quote:
        '"The Stewards determined that the collision could have been avoided if the driver of Car 81 had moved further to the left after turn 1, even if this involved leaving the track prior to turn 2." —— 干事决定书',
      tone: '裁决逻辑拆解',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/piastri-loses-p7-after-being-handed-post-race-penalty-at-mexico-city-gp.5dk3wHeak2yu7xWF0OhsRt',
        date: '2026-11-02',
      },
    },
  ],
  fiaDecision: {
    docName: '干事决定 – 81 号车 – 造成碰撞（2026 墨西哥城大奖赛，FIA 赛事干事决定；Formula1.com 逐段转引）',
    original:
      '"The Stewards heard from the driver of Car 81 (Piastri), the driver of Car 41 (Lindblad), team representatives and reviewed positioning/marshalling system data, video and in-car video evidence. On the approach to turn 1 the driver of Car 81 attempted an overtake on the outside of Car 41. Car 81 was never fully alongside Car 41 so was not able to claim the right to the corner. Through turn 1, the driver of Car 41 defended his position by releasing the brakes however does not force Car 81 off the track, allowing racing room on the outside – which he is not required to do. The Stewards determined that the collision could have been avoided if the driver of Car 81 had moved further to the left after turn 1, even if this involved leaving the track prior to turn 2."',
    plain:
      '通俗解读：外线超车有一条铁律——你的车没有和对方完全并排，这个弯就不是"你的"弯。皮亚斯特里始终差半个车身，所以林德布拉德松刹车占线防守完全合法，甚至还多留了外侧空间（干事特别强调：他本来可以不留）。责任因此在进攻方：干事认为皮亚斯特里唯一正确的做法是过 1 号弯后向左避让、宁可冲出赛道，而不是继续待在原地被"挤"。这和皮亚斯特里"我真的没地方可去了"的车内视角、尚多克"他不能凭空消失"的直播判断正面冲突。',
    rules: [
      '条款依据：FIA《国际运动法典》附录 L 第 IV 章第 2 条 d)（2026 年现行编号）——"造成碰撞"的基准处罚为 10 秒罚时，本案按基准执行。叠加《驾驶标准指引》的外线超车条款：进攻方未完全并排则不拥有弯角权，避让义务在进攻方。',
      '为什么是 10 秒：造成碰撞的基准处罚就是 10 秒，且本案有实实在在的竞技后果——林德布拉德撞墙退赛，不存在 2025 加拿大站那种"无直接竞技后果"的从轻空间。',
      '为什么罚了就像"判死刑"：皮亚斯特里完赛时排第 7，但与身后差距不足 10 秒，罚时直接跌出积分区至第 15——对追赶者是"追回 5 个位置归零"，对奥迪的博尔托莱托则是"躺进积分区"。',
      '公开转引未提及是否追加超级驾照扣分；截至收录时未见后续报道确认，本站不作断言。',
    ],
    sources: [
      {
        label: 'Formula1.com（裁决书逐段转引与处罚后果）',
        url: 'https://www.formula1.com/en/latest/article/piastri-loses-p7-after-being-handed-post-race-penalty-at-mexico-city-gp.5dk3wHeak2yu7xWF0OhsRt',
      },
      {
        label: 'Fox Sports（皮亚斯特里无线电与赛后采访）',
        url: 'https://www.foxsports.com.au/motorsport/formula-one/f1-2026-oscar-piastri-and-arvid-lindblad-crash-at-mexico-city-grand-prix-stewards-investigate-collision-mclaren-driver-finishes-seventh-after-qualifying-disaster/news-story/76de322647002f5f15294a183bf90d70',
      },
      {
        label: 'GPFans（2026 年条款编号转引：附录 L 第 IV 章第 2 条 d)）',
        url: 'https://www.gpfans.com/en/f1-news/1090755/fia-franco-colapinto-punishment-crash-azerbaijan-grand-prix-pierre-gasly-lando-norris/',
      },
    ],
  },
  telemetryNotes: {
    zoneLabel: '1 号弯刹车区（1.2 km 大直道尽头）',
    window: [700, 1400],
    contactZone: [1130, 1300],
    lapWindow: [54, 61],
    narrative:
      '第 59 圈：皮亚斯特里（橙）带着尾流尾速 353 km/h，比林德布拉德（蓝，341 km/h）快 12 km/h——这就是他敢走外线的底气。林德布拉德在约 1000 米处刹车，过弯途中松开刹车（正是干事说的"松刹车防守"），车速降到 135 km/h 后数据在 1233 米处戛然而止归零——撞墙停住。皮亚斯特里在 1078 米处才刹车（更晚），弯中最低 81 km/h，两台车在 1130–1300 米的红区相遇。碰撞后皮亚斯特里的圈速从 81 秒暴增至 104 秒，之后两圈 112/118 秒——右侧空力损伤的代价写在每一圈上。',
    caveat:
      '本页遥测来自 OpenF1 公共数据（F1 官方计时接口已调整为授权访问），为等距插值结果，不含方向盘转角与横向位置——因此无法直接从数据判定"谁挤谁"，这正是干事要看车载视频的原因。数据能确认的是：12 km/h 的尾速差、皮亚斯特里更晚的刹车点、林德布拉德过弯时的松刹车动作，以及碰撞点（数据归零处）距离弯心还有一段距离——佐证皮亚斯特里"接触发生在进弯之前"的说法。',
  },
  complete: true,
};
