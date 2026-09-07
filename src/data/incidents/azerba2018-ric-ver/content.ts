import type { IncidentContent } from '../../types';

// 2018 阿塞拜疆大奖赛 · 里卡多 × 维斯塔潘（红牛队友）· 第 40 圈 1 号弯追尾双退
// 引语均摘自公开报道，附原始来源链接。遥测来自 FastF1（F1 官方计时数据）。
// 注意：两名车手在第 40 圈双双退赛，碰撞圈没有遥测回传，图表覆盖第 36–39 圈。
export const content: IncidentContent = {
  slug: 'azerba2018-ric-ver',
  title: '“Well done Baku”：一起撞进校长办公室',
  event: '2018 阿塞拜疆大奖赛 · 正赛第 40 圈 / 共 51 圈',
  place: '巴库城市赛道 · 阿塞拜疆',
  date: '2018 年 4 月 29 日',
  verdict:
    'FIA 干事裁定：双方均有责任——33 号车（维斯塔潘）的两次变线防守是事故"起因"但"相对轻微"，3 号车（里卡多）承认进攻抽头太晚、同样"促成事故"；两人各记一次训斥（reprimand），逃过下一站罚退。霍纳要求两人回米尔顿凯恩斯工厂，向全体员工当面道歉。',
  drivers: { a: 'RIC', b: 'VER' },
  driverNames: { RIC: '里卡多', VER: '维斯塔潘' },
  colors: { a: '#3671C6', b: '#8FBFFF' },
  campNames: { a: '红牛 / 里卡多', b: '红牛 / 维斯塔潘' },
  statements: [
    {
      id: 'pre-1',
      phase: 'pre',
      when: '赛前 · 车队形势',
      speaker: '赛场背景',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '里卡多两周前刚在中国站献上生涯代表作夺冠，红牛势头正盛。巴库两人 P4、P5 发车，整场比赛像被胶水粘在一起：安全车重启后互有攻防，两次轮碰轮。车队赛前会议专门叮嘱过"互相留空间"，两人当时都点了头。',
      tone: '客观背景',
      source: {
        label: 'Sky Sports',
        url: 'https://www.skysports.com/f1/news/12433/11352821/max-verstappen-daniel-ricciardo-reprimanded-for-all-red-bull-azerbaijan-gp-crash',
        date: '2018-04-29',
      },
    },
    {
      id: 'pre-2',
      phase: 'pre',
      when: '第 35–39 圈 · 反超与被反超',
      speaker: '丹尼尔·里卡多',
      role: '红牛车手',
      camp: 'a',
      zh: '里卡多第 35 圈终于在 1 号弯外线超越维斯塔潘升到 P4——但紧接着的进站改变了一切：他的出站圈遇到交通，维斯塔潘晚一圈进站完成 overcut，P4 易主。用他自己的话说："好不容易有了势头超过麦克斯……结果进站圈遇到交通，被他 overcut 了，我们又回到了原来的位置。"',
      quote:
        '"I finally got some momentum and got Max… we had some traffic so Max was able to \'over-cut\' us, and then we were back in the same position that we\'d been in."',
      tone: '懊恼 / 伏笔',
      source: {
        label: 'FOX Sports',
        url: 'https://foxsports.com.au/motorsport/formula-one/f1-daniel-ricciardo-sorry-for-collision-with-max-verstappen-in-azerbaijan-grand-prix/news-story/ff116f327598bb6282c8a13af882c461',
        date: '2018-04-29',
      },
    },
    {
      id: 'inc-1',
      phase: 'incident',
      when: '第 40 圈 · 1 号弯',
      speaker: '碰撞发生',
      role: '事件核心',
      camp: 'fia',
      zh: '两台全新超软胎的红牛首尾相接冲上 Neftchilar 大直道。里卡多先卖个假动作走外线，维斯塔潘往内线守；刹车区里维斯塔潘再次变线，里卡多避让不及，前翼狠狠撞上队友的尾部——两台红牛一起上墙，双双退赛。指挥台上，纽维默默合上笔记本转身离开的画面，成了这场比赛的注脚。',
      quote:
        '"Both drivers contributed to the collision. The driver of car 33 made two moves, both of which were relatively minor. The driver of car 3 admitted he left his move to overtake on the left, too late."（干事裁决）',
      tone: '官方裁决',
      source: {
        label: 'Sky Sports（裁决全文）',
        url: 'https://www.skysports.com/f1/news/12433/11352821/max-verstappen-daniel-ricciardo-reprimanded-for-all-red-bull-azerbaijan-gp-crash',
        date: '2018-04-29',
      },
    },
    {
      id: 'imm-1',
      phase: 'immediate',
      when: '赛后 · 采访',
      speaker: '马克斯·维斯塔潘',
      role: '红牛车手',
      camp: 'b',
      zh: '维斯塔潘选择不谈责任："这对车队来说太令人失望了，我们白白丢掉了大把积分。我觉得没必要讨论谁对谁错——毕竟我们是为车队、为代表身后的所有人而战。在那之前我认为是强硬但公平的 racing，我们都给对方留了空间，轮碰轮那一下只是 racing。但之后发生的事，不好。"',
      quote:
        '"It is just really disappointing for the team. We lost a lot of points today, unnecessarily. I don\'t think we need to speak about who\'s at fault… Before that I think it was hard racing but fair… But what happened afterwards is not good."',
      tone: '回避责任 / 顾全大局',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/horner-ricciardo-and-verstappen-both-to-blame-for-clash.5oB6OKMwN2SiKkQmYUGUqI',
        date: '2018-04-29',
      },
    },
    {
      id: 'imm-2',
      phase: 'immediate',
      when: '赛后 · 采访',
      speaker: '丹尼尔·里卡多',
      role: '红牛车手',
      camp: 'a',
      zh: '里卡多赛后居然还笑得出来，但话里有反省："也许我们早就越界了。"他复盘整场比赛的升级过程：重启时自己在 2 号弯留了门、"对自己很恼火"，之后一次次用 DRS 尾流冲击 1 号弯，又一次次被队友挡回——直到第 40 圈，弦断了。',
      quote: '"Maybe we were already over the limit."',
      tone: '反省 / 苦笑',
      source: {
        label: 'FOX Sports',
        url: 'https://foxsports.com.au/motorsport/formula-one/f1-daniel-ricciardo-sorry-for-collision-with-max-verstappen-in-azerbaijan-grand-prix/news-story/ff116f327598bb6282c8a13af882c461',
        date: '2018-04-29',
      },
    },
    {
      id: 'team-1',
      phase: 'team',
      when: '赛后 · 采访',
      speaker: '克里斯蒂安·霍纳',
      role: '红牛车队领队',
      camp: 'neutral',
      zh: '霍纳没有偏袒任何一边："我们允许他们轮对轮地 racing，赛前会议也讨论过互留空间——今天的结果是两个人各自为战造成的最坏局面。责任不分彼此，两人同等负责。他们现在都待罪在身后一站比赛前，两人都要回工厂，向所有为造车付出辛苦的员工当面道歉。"',
      quote:
        '"There\'s no blame apportioned more in one direction or another. Both were equally responsible… They are both in the doghouse… they will be in the factory to apologise to all the staff prior to the Barcelona race."',
      tone: '震怒 / 各打五十大板',
      source: {
        label: 'Sky Sports',
        url: 'https://www.skysports.com/f1/news/12433/11352821/max-verstappen-daniel-ricciardo-reprimanded-for-all-red-bull-azerbaijan-gp-crash',
        date: '2018-04-29',
      },
    },
    {
      id: 'cool-1',
      phase: 'cooldown',
      when: '六年后 · 播客回望',
      speaker: '丹尼尔·里卡多',
      role: '前红牛车手',
      camp: 'a',
      zh: '2024 年里卡多在播客里笑着复盘："我们轮碰轮了好几次，本该知道事情在升级——最后果然出事了。你问我们有没有被狠狠骂一顿？有。有没有被叫去校长办公室？有。办公室里的分贝嘛……这么说吧，听到那顿骂的不止我和麦克斯。"他还爆料：此后每次回巴库，他和老队友们都会互相调侃一句"Well done Baku！"——因为第一年赛道围场的标语就是这句。',
      quote:
        '"We hit wheels a few times. We should have known it was starting to escalate… Did we get called to the principal\'s office? Yes, we did. The vocal decibel level in the office afterwards, let\'s just say Max and I would not have been the only ones who heard the bollocking."',
      tone: '自嘲 / 翻篇',
      source: {
        label: 'GPblog（转引自 Red Flags Podcast）',
        url: 'https://www.gpblog.com/en/news/daniel-ricciardo-has-his-say-on-crash-with-max-verstappen-from-baku-2018.html',
        date: '2024-07-16',
      },
    },
    {
      id: 'cool-2',
      phase: 'cooldown',
      when: '赛季末 · 余波',
      speaker: '转会的伏笔',
      role: '阵营行动',
      camp: 'a',
      zh: '这年夏天，里卡多宣布赛季末离开红牛转投雷诺。巴库被广泛视为转折点：媒体报道他认为车队没有秉公处理，而是在保护"金童"维斯塔潘。一场队友互撞，最终改写了两位车手和两支车队此后数年的命运。',
      tone: '深远影响',
      source: {
        label: 'PlanetF1',
        url: 'https://www.planetf1.com/features/five-of-the-biggest-flash-points-between-teammates-f1-title-fight-hamilton-verstappen-and-more',
        date: '2025-10-07',
      },
    },
  ],
  expertViews: [
    {
      id: 'exp-1',
      phase: 'immediate',
      when: '赛后 · 围场名宿点评',
      speaker: '尼基·劳达',
      role: '梅赛德斯非执行主席 · 三届世界冠军',
      camp: 'neutral',
      zh: '所有人都说"一人一半"，但劳达偏要给出精确比例：他认为这起事故七成责任在维斯塔潘——刹车区里的二次变线才是杀招。红牛官方显然不接受这个算法，而这份"护犊子"的分歧，恰恰被后来的报道视为里卡多心生去意的原因之一。',
      tone: '辛辣 / 不按剧本',
      source: {
        label: 'EssentiallySports',
        url: 'https://www.essentiallysports.com/f1-news-what-happened-between-max-verstappen-daniel-ricciardo-in-azerbaijan/',
        date: '2023-04-12',
      },
    },
    {
      id: 'exp-2',
      phase: 'cooldown',
      when: '2025 年 · 官方复盘',
      speaker: 'Formula1.com 专题',
      role: 'F1 官方媒体',
      camp: 'neutral',
      zh: 'F1 官网在"队友互撞名场面"专题里给这场的定位是：两人 2016 年搭档以来一直"场上死磕、场下朋友"，而巴库是这段关系"到达顶点"的时刻——事后两人都被干事判责、各记训斥，并被霍纳要求回米尔顿凯恩斯向全队正式道歉。',
      tone: '历史定位',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/from-title-showdowns-to-spectacular-somersaults-12-of-the-most-dramatic-team.7AS4Jlp7gkwKWhgOTygLea',
        date: '2025-06-20',
      },
    },
  ],
  fiaDecision: {
    docName: '2018 Azerbaijan Grand Prix · 干事裁决 – Car 3 / Car 33 collision（第 40 圈 1 号弯）',
    original:
      '"Both drivers contributed to the collision. The driver of car 33 made two moves, both of which were relatively minor. The driver of car 3 admitted he left his move to overtake on the left, too late. It was obvious to the stewards that although the incident had its origins in the moves by car 33, the driver of car 3 also contributed to the incident. Both drivers expressed regret about their respective contributions to the incident, during the Stewards\' hearing."',
    plain:
      '通俗解读：维斯塔潘防守时变了两次线——干事认定事故"起因"在他，但两次变线都"相对轻微"；里卡多自己承认往内线抽头的时机太晚，也"促成了事故"。所以结论是一人一半：各记一次训斥。听证会上，两人都对各自的责任表示了悔意。',
    rules: [
      '训斥（reprimand）是 FIA 处罚体系里最轻的一档，但有累积效应：单赛季累计 3 次（其中至少 2 次与驾驶相关）自动罚退 10 位发车。这是两人 2018 赛季的第一次训斥。',
      '为什么没有罚时或罚退？双双退赛已经是最大的"自然惩罚"，加上责任均摊、两人当场认错，干事选择了最低档。两人也因此逃过了下一站西班牙站的罚退。',
      '真正重的处罚来自车队内部：霍纳要求两人回米尔顿凯恩斯工厂向全体员工正式道歉——对车手来说，"向 800 名造车的人低头"比扣 2 分难堪得多。',
    ],
    sources: [
      {
        label: 'Sky Sports（裁决全文）',
        url: 'https://www.skysports.com/f1/news/12433/11352821/max-verstappen-daniel-ricciardo-reprimanded-for-all-red-bull-azerbaijan-gp-crash',
      },
      {
        label: 'RaceFans（裁决转引与霍纳表态）',
        url: 'https://www.racefans.net/2018/04/29/stewards-reprimand-verstappen-and-ricciardo-for-crash/',
      },
    ],
  },
  telemetryNotes: {
    zoneLabel: '1 号弯（Neftchilar 大直道尽头，约 650 米）',
    window: [300, 1100],
    lapWindow: [26, 40],
    narrative:
      '和蒙扎 2021 一样，碰撞圈（第 40 圈）两人双双退赛、没有任何遥测回传——但前 4 圈的数据把"这场追尾为什么几乎必然发生"讲清楚了：第 35 圈里卡多刚超到 P4，第 38 圈他先进站（122.8 秒），出站圈只有 105.6 秒；维斯塔潘晚一圈进站（121.6 秒）完成 overcut，P4 回到他手里。第 39 圈，两台全新超软胎的红牛首尾相接——圈速图上看，这是整场比赛两人第一次速度完全同步、且没有任何人会再进站拉开差距的时刻。下一圈的大直道尽头，弦断了。',
    caveat:
      '碰撞发生在第 40 圈，两车双双退赛，该圈没有遥测数据回传，图表仅能还原第 36–39 圈（含两次进站）；遥测为等距采样插值，不含横向位置与方向盘转角，无法直接裁定"刹车区变线"——干事当年依靠车载视频与 GPS 比对，认定维斯塔潘两次变线"相对轻微"、里卡多抽头太晚。',
  },
  complete: true,
};
