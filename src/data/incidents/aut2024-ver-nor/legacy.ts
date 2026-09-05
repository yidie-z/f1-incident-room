// 2024 奥地利大奖赛 · 维斯塔潘 × 诺里斯 第 64 圈 3 号弯碰撞
// 所有引语均来自公开报道，附原始来源链接。遥测数据来自 FastF1（官方计时数据）。

export type Camp = 'a' | 'b' | 'neutral' | 'fia';

export interface Statement {
  id: string;
  phase: 'pre' | 'incident' | 'immediate' | 'team' | 'cooldown';
  /** 时间标签，例如 "第 55 圈" 或 "7 月 4 日" */
  when: string;
  speaker: string;
  role: string;
  camp: Camp;
  /** 中文转述/翻译 */
  zh: string;
  /** 英文原文引用（如有） */
  quote?: string;
  /** 情绪/立场标签 */
  tone: string;
  source: { label: string; url: string; date: string };
}

export const incidentMeta = {
  title: '3 号弯：一场"迟早要来"的碰撞',
  event: '2024 奥地利大奖赛 · 正赛第 64 圈 / 共 71 圈',
  place: '红牛环赛道 · 施皮尔贝格',
  date: '2024 年 6 月 30 日',
  verdict:
    'FIA 干事裁定：1 号车（维斯塔潘）"负主要责任"，罚时 10 秒 + 超级驾照扣 2 分。诺里斯爆胎退赛，维斯塔潘第 5 完赛，拉塞尔"捡漏"夺冠。',
};

export const phaseLabels: Record<Statement['phase'], { label: string; desc: string }> = {
  pre: { label: '事前 · 火药桶在升温', desc: '谁在追谁，矛盾如何积累' },
  incident: { label: '事发 · 第 64 圈', desc: '碰撞瞬间与第一时间反应' },
  immediate: { label: '事发后 · 首次表态', desc: '肾上腺素最高的时刻' },
  team: { label: '阵营护犊 · 车队下场', desc: '领队与高管的立场战' },
  cooldown: { label: '冷却 · 二次表态', desc: '几天之后，语气变了' },
};

export const statements: Statement[] = [
  {
    id: 'pre-1',
    phase: 'pre',
    when: '第 52 圈',
    speaker: '赛场背景',
    role: '局势铺垫',
    camp: 'neutral',
    zh: '维斯塔潘原本领先 7 秒、巡航式领跑。但红牛二停出现罕见的 6.5 秒慢换胎（左后轮），诺里斯一口气吃掉 4.5 秒差距，进入 DRS 攻击范围。一场原本没有悬念的比赛，突然变成了冠军对决。',
    tone: '客观背景',
    source: {
      label: 'Sky Sports',
      url: 'https://www.skysports.com/f1/news/12433/13161225/the-max-lando-crash-what-happened-and-who-was-to-blame',
      date: '2024-06-30',
    },
  },
  {
    id: 'pre-2',
    phase: 'pre',
    when: '第 55 圈 · Team Radio',
    speaker: '兰多·诺里斯',
    role: '迈凯伦车手',
    camp: 'a',
    zh: '诺里斯第一次在 3 号弯内线进攻被维斯塔潘封住，他在无线电里抗议：维斯塔潘是"看到我的动作之后才变线"的——按规则你不允许这么做。',
    quote: '"He reacted to my move and you are not allowed to do that."',
    tone: '抗议',
    source: {
      label: 'Somerset Live (PA)',
      url: 'https://www.somersetlive.co.uk/sport/other-sport/lando-norris-makes-dangerous-driving-9379382',
      date: '2024-06-30',
    },
  },
  {
    id: 'pre-3',
    phase: 'pre',
    when: '约第 61 圈 · Team Radio',
    speaker: '兰多·诺里斯',
    role: '迈凯伦车手',
    camp: 'a',
    zh: '多次进攻被"细微变线"化解后，诺里斯的无线电火药味升级："我动了之后他不能一直跟着动。这太危险了。这样下去会出大事故。"——一语成谶。',
    quote:
      '"He can\'t keep moving after I\'ve moved. It\'s just dangerous. We\'re going to have a big shunt."',
    tone: '警告 / 愤怒',
    source: {
      label: 'RaceFans',
      url: 'https://www.racefans.net/2024/07/01/russell-breaks-mercedes-losing-streak-as-verstappen-and-norriss-trust-breaks-down/',
      date: '2024-07-01',
    },
  },
  {
    id: 'inc-1',
    phase: 'incident',
    when: '第 64 圈 · 3 号弯',
    speaker: '碰撞发生',
    role: '事件核心',
    camp: 'fia',
    zh: '诺里斯在 3 号弯刹车区把赛车摆到外侧，维斯塔潘向左挤压，两车后轮相撞、双双爆胎。维斯塔潘低速蹭回维修区换胎后第 5 完赛；诺里斯的轮胎在高速下解体、打坏车身，退赛。干事认定维斯塔潘"负主要责任"，罚 10 秒、扣 2 分。',
    quote:
      '"Before turning in, the driver of Car 1 turned to the left… predominantly at fault."（干事裁决摘要）',
    tone: '官方裁决',
    source: {
      label: 'ESPN',
      url: 'https://www.espn.com/racing/story/_/id/40472594/lando-norris-collision-f1-austrian-gp-reopens-discussion-max-verstappen-racecraft',
      date: '2024-07-01',
    },
  },
  {
    id: 'imm-1',
    phase: 'immediate',
    when: '赛后 · 混合采访区',
    speaker: '兰多·诺里斯',
    role: '迈凯伦车手',
    camp: 'a',
    zh: '"如果他说自己没做错任何事，我会对他失去很多尊重。如果他承认自己有点蠢、撞上了我、有点鲁莽，我还能保留一点尊重。但在争冠军的时候发生这种事，真的很难受。我尽力做到公平，而他没有。"',
    quote:
      '"If he says he did nothing wrong, then I will lose a lot of respect for that… I\'m trying to be fair from my side and he just wasn\'t."',
    tone: '愤怒 / 受伤',
    source: {
      label: 'ESPN',
      url: 'https://www.espn.com/racing/story/_/id/40472594/lando-norris-collision-f1-austrian-gp-reopens-discussion-max-verstappen-racecraft',
      date: '2024-07-01',
    },
  },
  {
    id: 'imm-2',
    phase: 'immediate',
    when: '赛后数小时',
    speaker: '马克斯·维斯塔潘',
    role: '红牛车手',
    camp: 'b',
    zh: '维斯塔潘拒绝认错，坚称自己留了空间："我真的认为我在白线内留出了一个车身的宽度。"他同时否认"刹车区变线"的指控。',
    quote: '"I honestly think I did leave a car\'s width on the white line."',
    tone: '辩解 / 不让步',
    source: {
      label: 'Motorsport.com',
      url: 'https://www.motorsport.com/f1/news/verstappen-just-proved-again-he-hasnt-changed-or-matured-since-f1-2021/10630267/',
      date: '2024-07-01',
    },
  },
  {
    id: 'team-1',
    phase: 'team',
    when: '赛后 · Team Radio',
    speaker: '克里斯蒂安·霍纳',
    role: '红牛车队领队',
    camp: 'b',
    zh: '霍纳在无线电里第一时间给自家车手撑腰，把矛头指向诺里斯："他那边的行为不对，麦克斯。太不走运了，但你已经尽了全力。"',
    quote: '"He didn\'t behave correctly there Max. Desperately unlucky… but you did your very best."',
    tone: '护犊 / 甩锅对方',
    source: {
      label: 'Formula1.com',
      url: 'https://www.formula1.com/en/latest/article/the-entire-world-knows-who-is-responsible-stella-weighs-in-on-verstappen.220NOCKNGdH2nKKKmzLpiR',
      date: '2024-07-01',
    },
  },
  {
    id: 'team-2',
    phase: 'team',
    when: '赛后 · Sky Sports 采访',
    speaker: '安德烈亚·斯特拉',
    role: '迈凯伦车队领队',
    camp: 'a',
    zh: '"全世界都知道该怪谁，除了一小撮人。"斯特拉把矛头指向历史旧账：2021 年维斯塔潘与汉密尔顿争冠时的越界防守没有被严惩，"不被诚实处理的问题，迟早会回来。他就是这样学会这样开车的。"他还主张：当事故导致对手退赛时，处罚应与后果成比例。',
    quote:
      '"The entire population of the world knows who was responsible except for a group of people… If you don\'t address these things honestly, they will come back."',
    tone: '强硬 / 追讨历史',
    source: {
      label: 'ESPN',
      url: 'https://www.espn.com/f1/story/_/id/40467801/mclaren-stella-verstappen-driving-unpunished',
      date: '2024-06-30',
    },
  },
  {
    id: 'team-3',
    phase: 'team',
    when: '赛后数日',
    speaker: '赫尔穆特·马尔科',
    role: '红牛赛车顾问',
    camp: 'b',
    zh: '红牛顾问马尔科则坚持另一方叙事：诺里斯"责任更大一些"（a little more at fault）——红牛市内统一口径：这不是维斯塔潘一个人的问题。',
    quote: '"Norris was a little more at fault."（据报道）',
    tone: '护犊 / 反指',
    source: {
      label: 'F1 Oversteer',
      url: 'https://www.f1oversteer.com/news/f1-fans-mock-mclaren-after-social-media-post-about-max-verstappen-and-lando-norris-crash/',
      date: '2024-07-03',
    },
  },
  {
    id: 'team-4',
    phase: 'team',
    when: '7 月 5 日 · 银石',
    speaker: '扎克·布朗',
    role: '迈凯伦 CEO',
    camp: 'a',
    zh: '布朗把矛头升级为"体制问题"："在有人告诉麦克斯那违反规则之前，他不会觉得有任何不同。红牛领导层几乎是在鼓励这种行为。"他还暗讽红牛的成本帽违规旧事，称这是一次"本可避免的赛车事故"。',
    quote:
      '"Until someone tells Max that that\'s against the regulations, he\'s not going to know any different… the leadership almost encourages it."',
    tone: '施压 / 上纲上线',
    source: {
      label: 'ESPN',
      url: 'https://www.espn.com/f1/story/_/id/40500614/red-bull-pitwall-intervened-max-verstappen-austria-crash',
      date: '2024-07-05',
    },
  },
  {
    id: 'cool-1',
    phase: 'cooldown',
    when: '7 月 4 日 · 银石赛前',
    speaker: '兰多·诺里斯',
    role: '迈凯伦车手',
    camp: 'a',
    zh: '一周后诺里斯明显降温，公开收回部分言论："赛后采访区说的有些话，纯粹是因为当时太沮丧、肾上腺素太高。有些话说得并不完全是我的真实想法。他不需要道歉，我也不期待道歉。"',
    quote:
      '"Some of the things I said… were just more because I was frustrated… I probably said some things I didn\'t necessarily believe in… He doesn\'t need to apologise and I don\'t expect an apology."',
    tone: '降温 / 收回',
    source: {
      label: 'PlanetF1',
      url: 'https://www.planetf1.com/news/f1-2021-title-fight-this-one-feels-very-different-max-verstappen',
      date: '2024-10-15',
    },
  },
  {
    id: 'cool-2',
    phase: 'cooldown',
    when: '事故后周一 · 私下沟通',
    speaker: '马克斯·维斯塔潘',
    role: '红牛车手',
    camp: 'b',
    zh: '维斯塔潘透露两人周一就通了话："我唯一在乎的是维持和兰多的关系，我们是很好的朋友。赛后我说要让情绪先冷下来。我们聊完后的结论是：我们其实都很享受那场缠斗。"',
    quote:
      '"The only thing that I cared about is maintaining my relationship with Lando because we are great friends… We spoke on Monday and came to the conclusion that we really enjoyed our battle."',
    tone: '和解 / 护关系',
    source: {
      label: 'PlanetF1',
      url: 'https://www.planetf1.com/news/f1-2021-title-fight-this-one-feels-very-different-max-verstappen',
      date: '2024-10-15',
    },
  },
  {
    id: 'cool-3',
    phase: 'cooldown',
    when: '7 月 21 日 · 匈牙利站',
    speaker: '马克斯·维斯塔潘',
    role: '红牛车手',
    camp: 'b',
    zh: '但维斯塔潘从未在"责任"本身上让步。三周后谈到奥地利，他仍在反击："奥地利那站我被泼了一堆脏水，什么刹车区变线，巴拉巴拉。我是在最初的变线时就把车摆好位置，之后方向盘一直是直的。"——朋友的火气消了，立场的分歧没消。',
    quote:
      '"I got a lot of **** thrown at me in Austria with people saying moving under braking, blah blah blah. I am positioning my car on the initial movement and then I keep it straight."',
    tone: '坚持 / 反击',
    source: {
      label: 'Sky Sports',
      url: 'https://www.skysports.com/f1/news/12433/13183014/max-verstappen-refuses-to-apologise-for-radio-conduct-in-expletive-laden-dismissal-of-criticism',
      date: '2024-07-21',
    },
  },
];

export const expertViews: Statement[] = [
  {
    id: 'exp-1',
    phase: 'immediate',
    when: '赛后分析',
    speaker: '乔里昂·帕尔默',
    role: 'F1 官方专栏分析（前 F1 车手）',
    camp: 'neutral',
    zh: '帕尔默的定性是"太多可疑的动作"（Too many dubious moves）：他既指出维斯塔潘防守动作的擦边性质，也分析诺里斯的进攻选择为何屡屡把自己放进被动位置——这段"友谊"从此进入了新阶段。',
    tone: '技术分析',
    source: {
      label: 'Formula1.com',
      url: 'https://www.formula1.com/en/latest/article/contentious-collisions-intra-team-contact-and-a-surprise-win-the-most.7y6UPVn4tHJr3AyWm72J9I',
      date: '2024-08-16',
    },
  },
  {
    id: 'exp-2',
    phase: 'immediate',
    when: '7 月 1 日 · 专栏',
    speaker: 'Motorsport.com 编辑部',
    role: '专业媒体评论',
    camp: 'neutral',
    zh: '评论文章直言：维斯塔潘再次证明自己"从 2021 年以来没有改变、也没有成熟"。2021 年巴西站未被处罚的 4 号弯防守，直接养成了这种把对手挤出赛道的习惯——奥地利只是同一个剧本的重演。',
    tone: '批评维斯塔潘',
    source: {
      label: 'Motorsport.com',
      url: 'https://www.motorsport.com/f1/news/verstappen-just-proved-again-he-hasnt-changed-or-matured-since-f1-2021/10630267/',
      date: '2024-07-01',
    },
  },
  {
    id: 'exp-3',
    phase: 'immediate',
    when: '7 月 1 日 · 专栏',
    speaker: 'Motor Sport Magazine',
    role: '专业媒体评论',
    camp: 'neutral',
    zh: '另一家老牌杂志把一部分责任分给干事：处罚决定出得太慢，让场上双方对"边界到底在哪"长期得不到答案，争领头名的火药桶才会一路升级到碰撞。斯特拉的历史类比被评为"政治家有风范"，但也暗示：诺里斯也许迟早要用同样强硬的方式"回敬"一次。',
    tone: '各打五十大板',
    source: {
      label: 'Motor Sport Magazine',
      url: 'https://www.motorsportmagazine.com/articles/single-seaters/f1/verstappen-vs-norris-beat-any-2021-race-for-whingeing-up-down-austria/',
      date: '2024-07-01',
    },
  },
];

export const fiaDecision = {
  docName: 'Infringement – Car 1 – Causing a collision（2024 奥地利大奖赛，FIA 赛事干事文件）',
  original:
    '"[Verstappen] was approaching turn 3 with [Norris] alongside on his left. Before turning in, [Verstappen] moved to the left, causing a collision with [Norris]. The Stewards determine that [Verstappen] was predominantly at fault."',
  plain:
    '大白话：诺里斯已经和你并排了（在你左边），你在进弯前又往左挪了一把，把他挤到发生碰撞——所以这次主要怪你。罚 10 秒，驾照扣 2 分。',
  rules: [
    '为何是 10 秒而不是 5 秒：按当年与各车队确认的《驾驶标准指引》，"造成碰撞"的基准处罚就是 10 秒；5 秒档通常用于"迫使对手驶离赛道"等更轻的违规。',
    '为何扣 2 分：造成碰撞属于超级驾照扣分条款中的标准 2 分档。这 2 分让维斯塔潘 12 个月累计来到 8 分（满 12 分禁赛一场），成为他 2025 年"禁赛危机"的起点之一。',
    '为何没改变名次：维斯塔潘冲线时领先第 6 名霍肯伯格 26 秒，10 秒罚时没能把他罚出第 5——诺里斯阵营"处罚应与后果成比例"的愤怒正源于此。',
  ],
  sources: [
    {
      label: 'FOX Sports（裁决原文转引）',
      url: 'https://www.foxsports.com.au/motorsport/formula-one/id-lose-a-lot-of-respect-norris-fumes-over-mad-max-crash-as-all-angles-revealed-talking-points/news-story/1ca71bacdf42bd4c2accf65ea47522ba',
    },
    {
      label: 'Sky Sports（扣分记录）',
      url: 'https://www.skysports.com/f1/news/12433/13387398/austrian-gp-max-verstappen-race-ban-threat-and-oscar-piastri-lando-norris-relations-set-to-intensify-f1-race-at-red-bull-ring',
    },
  ],
};
