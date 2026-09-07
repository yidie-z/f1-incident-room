import type { IncidentContent } from '../../types';

// 2022 圣保罗大奖赛 · 冲刺赛 · 阿隆索 × 奥康（Alpine 队友）· 第 1 圈两连撞
// 引语均摘自公开报道，附原始来源链接。遥测来自 FastF1（F1 官方计时数据）。
export const content: IncidentContent = {
  slug: 'sopaul2022-alo-oco',
  title: '“托朋友的福”：队友的最后一根稻草',
  event: '2022 圣保罗大奖赛 · 冲刺赛第 1 圈 / 共 24 圈',
  place: '英特拉戈斯赛道 · 巴西圣保罗',
  date: '2022 年 11 月 12 日',
  verdict:
    'FIA 干事裁定：阿隆索对主直道追尾"负全部责任"——他吃尾流明显更快，自己在听证会上承认抽头时机判断失误；罚时 5 秒（正赛发车跌至 P18）+ 超级驾照扣 2 分。4 号弯的第一下接触未单独处罚，领队萨夫瑙尔各打五十大板："第一下怪埃斯特班，第二下怪费尔南多。"',
  drivers: { a: 'ALO', b: 'OCO' },
  driverNames: { ALO: '阿隆索', OCO: '奥康' },
  colors: { a: '#2293D1', b: '#F34C98' },
  campNames: { a: 'Alpine / 阿隆索', b: 'Alpine / 奥康' },
  statements: [
    {
      id: 'pre-1',
      phase: 'pre',
      when: '赛前 · 车队与人心',
      speaker: '赛场背景',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '赛季倒数第二站，Alpine 正与迈凯伦死磕车队积分榜第 4；冲刺赛两台 Alpine 从 P6、P7 发车，本是抢分良机。但车库里的空气早已凝固：阿隆索夏天突然官宣 2023 年转投阿斯顿·马丁，而他与奥康这一整年的轮对轮，已经"接近撞墙"好几次了。',
      tone: '客观背景',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/its-very-very-unfortunate-alpine-team-mates-alonso-and-ocon-at-odds-over.3PUybCWC2gFjYG5wnGgT1T',
        date: '2022-11-12',
      },
    },
    {
      id: 'pre-2',
      phase: 'pre',
      when: '全年积怨 · 匈牙利名场面',
      speaker: '碰撞之前',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '这一撞不是偶然。三个月前的匈牙利站，奥康在主直道上把阿隆索往护墙方向硬挤，阿隆索在无线电里留下那句名台词："我这辈子从没见过埃斯特班今天这样的防守。从没见过。"吉达、布达佩斯、英特拉戈斯——西班牙人事后把这份"撞墙清单"背得滚瓜烂熟。',
      quote: '"Never in my life have I seen a defense like Esteban\'s today. Never."',
      tone: '积怨已久',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/esteban-ocon-really-bad-teammate/10701432/',
        date: '2025-03-08',
      },
    },
    {
      id: 'inc-1',
      phase: 'incident',
      when: '第 1 圈 · 4 号弯 + 主直道',
      speaker: '两连撞',
      role: '事件核心',
      camp: 'fia',
      zh: '第 1 圈两人碰了两次：先在 4 号弯（Descida do Lago）并排，阿隆索在出弯时被逼宽；半圈后的主直道上，吃足尾流的阿隆索抽头稍晚，前翼直接撞上奥康的右后轮，前翼报废、被迫进站。干事调查的是主直道这一下，认定阿隆索"负全部责任"：他明显更快，且本人承认判断失误。',
      quote:
        '"Alonso was significantly faster as he had the tow, and – as he admitted in the hearing – slightly misjudged the time to pull out and struck Ocon from behind… wholly at fault for the collision, which at those speeds and at that location on the track was dangerous."（干事裁决）',
      tone: '官方裁决',
      source: {
        label: 'RaceFans（裁决原文转引）',
        url: 'https://www.racefans.net/2022/11/12/alonso-given-five-second-penalty-and-two-penalty-points-for-collision-with-ocon/',
        date: '2022-11-12',
      },
    },
    {
      id: 'inc-2',
      phase: 'incident',
      when: '碰撞后数秒 · Team Radio',
      speaker: '费尔南多·阿隆索',
      role: 'Alpine 车手',
      camp: 'a',
      zh: '前翼撞掉之后，阿隆索在无线电里送出年度最阴阳怪气的一句："托我们这位朋友的福，我的前翼没了。"紧接着又补一刀："他在 4 号弯把我挤出去，又在直道上挤我。干得漂亮。"',
      quote:
        '"I lost the front wing thanks to our friend." / "He pushed me off at Turn 4 and then on the straight. Well done."',
      tone: '讽刺 / 暴怒',
      source: {
        label: 'ESPN',
        url: 'https://www.espn.com/f1/story/_/id/35011148/alpine-teammates-fernando-alonso-esteban-ocon-blame-other-sprint-collision',
        date: '2022-11-12',
      },
    },
    {
      id: 'imm-1',
      phase: 'immediate',
      when: '赛后 · 混合采访区',
      speaker: '费尔南多·阿隆索',
      role: 'Alpine 车手',
      camp: 'a',
      zh: '被问到要不要找奥康谈谈、把话说开，阿隆索的回答干脆利落："不了，真不需要。就剩最后一站了，然后就结束了——终于！"他还顺手翻出旧账："在吉达我离护墙就差一点，在布达佩斯也是，今天是 4 号弯……他以前在佩雷兹身上也这样，在这里对维斯塔潘套圈时也这样。就剩一场了。"',
      quote:
        '"No, not really. I don\'t need. It\'s one more race then it\'s over, finally! … I was very close to the wall in Jeddah with him, close to the wall in Budapest, today in Turn 4 now here."',
      tone: '摊牌 / 不装了',
      source: {
        label: 'ESPN',
        url: 'https://www.espn.com/f1/story/_/id/35011148/alpine-teammates-fernando-alonso-esteban-ocon-blame-other-sprint-collision',
        date: '2022-11-12',
      },
    },
    {
      id: 'imm-2',
      phase: 'immediate',
      when: '赛后 · 混合采访区',
      speaker: '埃斯特班·奥康',
      role: 'Alpine 车手',
      camp: 'b',
      zh: '奥康的叙事完全相反："我在进攻那两台迈凯伦，走自己的线进 4 号弯，费尔南多不知道从哪儿从外线冒了出来，我们就碰上了——从那一刻起，我的比赛基本就完了。"对于阿隆索的控诉，他寸步不让："那是他的看法，我的看法不一样。跑在前面的是我，真正在打架的人不是我。"',
      quote:
        '"Fernando came out of nowhere from the outside. So we touched and from there on, my race was pretty much over." / "That\'s his opinion, my opinion is different. I was in the front, so the one fighting is not me really."',
      tone: '反驳 / 喊冤',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/f1-ocon-alonso-unaware-clash-teammate-brazil-sprint/10398978/',
        date: '2022-11-12',
      },
    },
    {
      id: 'imm-3',
      phase: 'immediate',
      when: '赛后 · 一个诡异的细节',
      speaker: '埃斯特班·奥康',
      role: 'Alpine 车手',
      camp: 'b',
      zh: '最离谱的是：导致阿隆索前翼报废、并被干事处罚的主直道那一撞，奥康本人居然毫无察觉——"我完全不知道发生了这事，刚才别人告诉我的。真不知道那怎么可能。"这也侧面说明两车接触之轻，与处罚之重形成的反差，正是这场的看点。',
      quote: '"I had no idea this happened. I got told now. Yeah, I don\'t know how that\'s possible."',
      tone: '错愕',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/f1-ocon-alonso-unaware-clash-teammate-brazil-sprint/10398978/',
        date: '2022-11-12',
      },
    },
    {
      id: 'team-1',
      phase: 'team',
      when: '赛后当晚 · 车队声明',
      speaker: '奥特马尔·萨夫瑙尔',
      role: 'Alpine 车队领队',
      camp: 'neutral',
      zh: '领队没有护任何一边，而是把两人一起骂："今天，两位车手都让车队失望了。"——要知道车队 1000 多名员工在英特拉戈斯拼的是年度第 4。他对外界给出的责任划分堪称"端水大师"："第一下（4 号弯）怪埃斯特班，第二下（主直道）怪费尔南多。"',
      quote:
        '"Today, both drivers have let the team down." / "I blame Esteban for the first incident and Fernando for the second."',
      tone: '各打五十大板',
      source: {
        label: 'Motorsport.com / Grandprix.com',
        url: 'https://www.motorsport.com/f1/news/alonso-f1-penalty-ocon-clash-szafnauer-slams-alpine-drivers/10399043/',
        date: '2022-11-12',
      },
    },
    {
      id: 'team-2',
      phase: 'team',
      when: '一周后 · 阿布扎比站前',
      speaker: '洛朗·罗西',
      role: 'Alpine CEO',
      camp: 'neutral',
      zh: 'CEO 罗西亲自下场"训话"，措辞罕见地强硬："我提醒了他们合同里写的东西，也提醒他们——有的是车手想坐进他们的座舱。哪怕代价很大，用另外两个人结束这个赛季也不是不行。"他把两人的行为定性为"杀手本能用过了头"，但承认周日两人的补救"干得漂亮"。',
      quote:
        '"I reminded them of our contracts, and I reminded them I have plenty of drivers that are longing to race in their place… They have this killer instinct. Sometimes it goes a bit too far."',
      tone: '敲打 / 立威',
      source: {
        label: 'Autosport',
        url: 'https://www.autosport.com/f1/news/rossi-killer-instinct-of-alpine-drivers-went-a-bit-too-far-in-brazil-clashes/10402257/',
        date: '2022-11-19',
      },
    },
    {
      id: 'cool-1',
      phase: 'cooldown',
      when: '赛后冷静下来',
      speaker: '费尔南多·阿隆索',
      role: 'Alpine 车手',
      camp: 'a',
      zh: '火气退去后，阿隆索的口径从"都怪他"变成"可惜了"："冲刺赛第 1 圈就碰，太糟糕了——比赛太短，根本没时间追回进站损失。赛车今天快得惊人，我们本可以拿大分的。他那边整个周末都慢一点，我这边是实实在在丢掉了一个机会。"',
      quote:
        '"Far from ideal when, on a sprint race, you touch on the first lap, because the race is too short to really overcome the deficit of the pitstop… On my side we lost an opportunity."',
      tone: '惋惜 / 留刺',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/f1-ocon-alonso-unaware-clash-teammate-brazil-sprint/10398978/',
        date: '2022-11-12',
      },
    },
    {
      id: 'cool-2',
      phase: 'cooldown',
      when: '三年后 · 奥康回望',
      speaker: '埃斯特班·奥康',
      role: '前 Alpine 车手',
      camp: 'b',
      zh: '三年后奥康给这段恩怨定了个性："我们确实斗过几场，但两年里只真正碰过这一次——而且毫无后果，因为第二天我们跑出了生涯最佳之一：从队尾发车，费尔南多第 5、我第 8 完赛。"周日正赛他还主动让过阿隆索，助车队在年度第 4 之争中甩开迈凯伦。',
      quote:
        '"Out of two years we touched once, I think, and it didn\'t have any consequence because we had the race of our lives the next day. We started last and I think Fernando finished fifth and I finished eighth."',
      tone: '释然 / 翻篇',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/esteban-ocon-really-bad-teammate/10701432/',
        date: '2025-03-08',
      },
    },
  ],
  expertViews: [
    {
      id: 'exp-1',
      phase: 'cooldown',
      when: '2025 年 · 深度复盘',
      speaker: 'Motorsport.com 专栏',
      role: '专业媒体 · "奥康真是坏队友吗？"',
      camp: 'neutral',
      zh: '这篇复盘提出了一个公允的视角：奥康与佩雷兹搭档时的五次事故，四次主要是佩雷兹防守过度，但"坏队友"的标签却贴在了奥康身上；而阿隆索这边——"这位两届世界冠军从不惮于通过媒体推动自己的叙事"。队友间的是非，往往取决于谁的话筒更响。',
      tone: '反转视角',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/esteban-ocon-really-bad-teammate/10701432/',
        date: '2025-03-08',
      },
    },
    {
      id: 'exp-2',
      phase: 'immediate',
      when: '赛后 · 赛季摩擦点梳理',
      speaker: 'RacingNews365 分析',
      role: '专业媒体',
      camp: 'neutral',
      zh: '这家媒体把全年"差点撞上"的瞬间串成了一条线：吉达、匈牙利（"我这辈子没见过这种防守"）、再到巴西的爆发点——并指出一个耐人寻味的细节：阿隆索官宣离队是在匈牙利站当天早上，从那以后，奥康在赛道上对他就再没有"让"这个字。',
      tone: '时间线归因',
      source: {
        label: 'RacingNews365',
        url: 'https://racingnews365.com/analysis-how-many-points-have-alpines-inter-team-battles-cost-them',
        date: '2022-11-13',
      },
    },
  ],
  fiaDecision: {
    docName: '2022 São Paulo Sprint · 干事裁决 – Car 14 causing a collision（第 1 圈主直道）',
    original:
      '"The Stewards determined via telemetry that Ocon was at similar speeds to other cars at the same point on the track that were not in a tow. Alonso, however, was significantly faster as he had the tow, and – as he admitted in the hearing – slightly misjudged the time to pull out and struck Ocon from behind, his front wing striking Ocon’s rear tyre. The Stewards found that Alonso was wholly at fault for the collision, which at those speeds and at that location on the track was dangerous."',
    plain:
      '通俗解读：干事用遥测比对过——奥康在那个位置的速度，和没有尾流的其他车差不多，说明他没有"刹车测试"或异常减速；而阿隆索吃着尾流明显更快，他自己也在听证会上承认"抽头出来的时机判断失误"，从后面撞上了奥康（前翼碰到对方右后轮）。所以这一下全怪阿隆索，而且在那种速度、那个位置，干事认为这个动作是危险的。',
    rules: [
      '为什么 5 秒罚时等于"罚退 3 位"：冲刺赛已经结束，5 秒追加进总成绩，阿隆索从 P15 跌到 P18——周日正赛就从第 18 位发车，恰好排在奥康（P17）后面一位，积分榜上互相亏欠的两个人，发车格上也要脸贴脸。',
      '另扣超级驾照 2 分，阿隆索 12 个月累计 6 分——距离 12 分禁赛线正好一半。',
      '责任划分其实有两层：干事只裁决了主直道第二下（阿隆索全责）；4 号弯的第一下没有处罚，但领队萨夫瑙尔公开表示"第一下怪奥康"——官方文书与车队内部定性并不完全一致，这正是多视角的意义。',
    ],
    sources: [
      {
        label: 'RaceFans（裁决原文转引）',
        url: 'https://www.racefans.net/2022/11/12/alonso-given-five-second-penalty-and-two-penalty-points-for-collision-with-ocon/',
      },
      {
        label: 'Motorsport.com（听证细节与领队表态）',
        url: 'https://www.motorsport.com/f1/news/alonso-f1-penalty-ocon-clash-szafnauer-slams-alpine-drivers/10399043/',
      },
    ],
  },
  telemetryNotes: {
    zoneLabel: '4 号弯 Descida do Lago（约 2340 米）→ 主直道（约 4300 米）',
    window: [1500, 2800],
    contactZone: [2280, 2440],
    lapWindow: [1, 5],
    narrative:
      '两台 Alpine 软胎从 P6、P7 起步。红区是 4 号弯：第 1 圈两车几乎以相同的速度（约 87 km/h）通过弯心——第一下接触就发生在这里，但遥测看不出谁把谁逼宽，这正是"各执一词"的技术原因。更关键的是第 2、3 圈：阿隆索名次从 P6 直接坠到 P20，第 3 圈 102.7 秒是进站换前翼的一圈；而奥康带着侧箱损伤继续，圈速从 76.2 秒一路掉到 76.7 秒开外。换完前翼的阿隆索立刻跑出 75.1、74.8 秒——比受损的队友快 1.5 秒以上，这也是他赛后那句"我的车今天快得惊人"最硬的数据注脚。',
    caveat:
      '冲刺赛第 1 圈距离零点从静止起步起算，存在少量积分漂移；遥测为等距采样插值，不含横向位置与方向盘转角，无法裁定"谁把谁逼出赛道"——干事当年同样主要依靠车载视频、GPS 比对和阿隆索本人在听证会上的承认来定责。',
  },
  complete: true,
};
