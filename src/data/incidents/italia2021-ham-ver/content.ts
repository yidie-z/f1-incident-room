import type { IncidentContent } from '../../types';

// 2021 意大利大奖赛 · 汉密尔顿 × 维斯塔潘 · 第 26 圈 Rettifilo 减速弯"叠叠乐"
// 引语均摘自公开报道，附原始来源链接。遥测来自 FastF1（F1 官方计时数据）。
// 注意：两名车手在第 26 圈双双退赛，碰撞圈没有遥测回传，图表只覆盖第 22–25 圈。
export const content: IncidentContent = {
  slug: 'italia2021-ham-ver',
  title: '叠叠乐：压在 Halo 上的那只车轮',
  event: '2021 意大利大奖赛 · 正赛第 26 圈 / 共 53 圈',
  place: '蒙扎赛道 · 意大利',
  date: '2021 年 9 月 12 日',
  verdict:
    'FIA 干事裁定：33 号车（维斯塔潘）"负主要责任"——进攻发起太晚，无权要求赛车空间；下一站（俄罗斯索契）罚退 3 位发车 + 超级驾照扣 2 分。两人当场双双退赛，迈凯伦渔翁得利包揽 1-2，里卡多夺冠。',
  drivers: { a: 'HAM', b: 'VER' },
  driverNames: { HAM: '汉密尔顿', VER: '维斯塔潘' },
  colors: { a: '#00A19B', b: '#3671C6' },
  campNames: { a: '梅赛德斯 / 汉密尔顿阵营', b: '红牛 / 维斯塔潘阵营' },
  statements: [
    {
      id: 'pre-1',
      phase: 'pre',
      when: '赛前 · 冠军形势',
      speaker: '赛场背景',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '赞德沃特主场大胜后，维斯塔潘带着 3 分的领先来到蒙扎。周六冲刺赛他再拿 2 分，优势扩大到 5 分——每条"车手 vs 车手"的轮对轮，都直接改写积分榜走向。银石的 51G 之后，两人之间已经不存在"让一让"这个选项。',
      tone: '客观背景',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/how-hamilton-and-verstappens-battle-evolved-over-the-2021-season.733vQgLMqampix5fLefN62',
        date: '2021-12-20',
      },
    },
    {
      id: 'pre-2',
      phase: 'pre',
      when: '第 1 圈 · 第二减速弯',
      speaker: '碰撞之前',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '两人当天其实"撞"了两次：第 1 圈第二减速弯（Variante della Roggia）轮对轮，汉密尔顿被逼上缓冲区、切弯逃生，他在无线电里抱怨对方没有留空间。这次前哨战没有处罚，但为第 26 圈的剧本写好了伏笔。',
      tone: '客观背景',
      source: {
        label: 'Sporting News',
        url: 'https://www.sportingnews.com/us/athletics/news/lewis-hamilton-max-verstappen-crash-f1-italian-grand-prix/1otk5377em7y51wobjw3eg7l6s',
        date: '2021-09-12',
      },
    },
    {
      id: 'pre-3',
      phase: 'pre',
      when: '第 24–25 圈 · 两次换胎',
      speaker: '命运的交汇点',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '维斯塔潘原本稳居 P2，第 24 圈进站却遭遇 11.1 秒的灾难换胎，名次跌到积分区边缘；一圈后轮到汉密尔顿进站，他的换胎同样不快。梅赛德斯车手驶出维修区通道的那一刻，恰好与全速冲来的维斯塔潘并排——两台争冠赛车在 1 号弯入口"会师"了。',
      tone: '客观背景',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/tactical-foul-or-racing-incident-wolff-and-horner-have-their-say-on-the.62ks0ABWVkMhHFwBjrMjeH',
        date: '2021-09-12',
      },
    },
    {
      id: 'inc-1',
      phase: 'incident',
      when: '第 26 圈 · 1-2 号弯（Rettifilo）',
      speaker: '碰撞发生',
      role: '事件核心',
      camp: 'fia',
      zh: '两人并排进入 1-2 号减速弯，谁也不让。维斯塔潘被挤上内侧高高的"香肠路肩"，赛车弹起、腾空，右后轮直接压在汉密尔顿的 Halo 上——F1 历史上最诡异的照片之一就此诞生：一辆红牛"骑"在一辆梅赛德斯头上，双双陷入砂石区退赛。没有 Halo，后果不堪设想。',
      quote:
        '"Car 33 was not at all alongside car 44 until significantly into the entry into turn one… this manoeuvre was attempted too late for the driver of car 33 to have \'the right to racing room\'… the driver of car 33 was predominantly to blame."（干事裁决）',
      tone: '官方裁决',
      source: {
        label: 'RaceFans（裁决原文转引）',
        url: 'https://www.racefans.net/2021/09/12/verstappen-given-three-place-grid-penalty-for-hamilton-crash/',
        date: '2021-09-12',
      },
    },
    {
      id: 'inc-2',
      phase: 'incident',
      when: '碰撞后数秒 · Team Radio',
      speaker: '马克斯·维斯塔潘',
      role: '红牛车手',
      camp: 'b',
      zh: '赛车还骑在梅赛德斯头上，维斯塔潘在无线电里丢下一句："不留空间，就是这个下场。"',
      quote: '"That\'s what you get when you don\'t leave the space."',
      tone: '愤怒 / 甩锅',
      source: {
        label: 'Sporting News',
        url: 'https://www.sportingnews.com/us/athletics/news/lewis-hamilton-max-verstappen-crash-f1-italian-grand-prix/1otk5377em7y51wobjw3eg7l6s',
        date: '2021-09-12',
      },
    },
    {
      id: 'imm-1',
      phase: 'immediate',
      when: '赛后 · 混合采访区',
      speaker: '马克斯·维斯塔潘',
      role: '红牛车手',
      camp: 'b',
      zh: '维斯塔潘的控诉点是"挤压"："我没想到他会一直挤、一直挤、一直挤——他根本不需要这样做。哪怕给我留一个车身的宽度，我们也能轮对轮跑出 2 号弯，而且他大概率还是在我前面。但他一直把我往外推，最后我无路可走，被顶上了香肠路肩——后轮弹起来碰到他的轮胎，我们就是这样撞上的。"',
      quote:
        '"I didn\'t expect him to keep squeezing, squeezing, squeezing… He just pushed me onto the sausage kerb and that\'s why, at the end of the day, we touched."',
      tone: '控诉 / 喊冤',
      source: {
        label: 'RaceFans',
        url: 'https://www.racefans.net/2021/09/12/hamilton-and-verstappen-blame-each-other-over-crash-and-lap-one-incident/',
        date: '2021-09-12',
      },
    },
    {
      id: 'imm-2',
      phase: 'immediate',
      when: '赛后 · 混合采访区',
      speaker: '刘易斯·汉密尔顿',
      role: '梅赛德斯车手',
      camp: 'a',
      zh: '汉密尔顿的辩护逻辑是"内线天经地义"："我们所有车手都游走在极限边缘。拿到内线的时候，过去到现在的每一个车手，都会试图守住自己的位置。今天的事很不幸，但我们都是职业车手，会向前看。"他还表示赛前两人聊过、互相尊重，但"赛车里没有人会退让"。',
      quote:
        '"All of us drivers, we are on the edge. When we have the inside line every single driver, past and present, will try to hold onto his position."',
      tone: '辩护 / 向前看',
      source: {
        label: 'RaceFans',
        url: 'https://www.racefans.net/2021/09/13/hamilton-pleased-stewards-set-a-precedent-verstappen-doesnt-fully-agree/',
        date: '2021-09-13',
      },
    },
    {
      id: 'team-1',
      phase: 'team',
      when: '赛后 · 采访',
      speaker: '托托·沃尔夫',
      role: '梅赛德斯车队领队',
      camp: 'a',
      zh: '沃尔夫直接抛出全场最重的一个词："用足球的话说，这叫战术犯规（tactical foul）。他大概清楚，如果刘易斯跑在他前面，那场胜利可能就没了。"他警告说如果不加以约束，这种事会继续发生："银石是高速撞墙，这次是一辆赛车压在刘易斯的头上——我们还能走多远？下次是不是高速相撞、叠在一起？"',
      quote:
        '"In football you call it a tactical foul. He probably knew that if Lewis stays ahead, that is the race win possibly… How far can we go? Maybe next we have a high-speed crash and land on each other."',
      tone: '定性"战术犯规"',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/tactical-foul-or-racing-incident-wolff-and-horner-have-their-say-on-the.62ks0ABWVkMhHFwBjrMjeH',
        date: '2021-09-12',
      },
    },
    {
      id: 'team-2',
      phase: 'team',
      when: '赛后 · 采访',
      speaker: '克里斯蒂安·霍纳',
      role: '红牛车队领队',
      camp: 'b',
      zh: '霍纳的回应针锋相对："托托说那是战术犯规，我很失望。这就是一场赛道事故（racing incident），幸好没人受伤。"他的复盘是：换胎搞砸在先，但麦克斯带着势头进 1 号弯、刘易斯留了空间，是 2 号弯把他关得太死了。"你可以说一个该走直线，也可以说另一个该多留空间——无法归责的时候，就得说五五开。在我看来这是赛道事故。"',
      quote:
        '"I\'m disappointed Toto would say it would be a professional foul… When you cannot apportion blame, you\'d have to say it\'s 50-50. From my perspective, it\'s a racing incident."',
      tone: '护犊 / 各打五十大板',
      source: {
        label: 'RaceFans',
        url: 'https://www.racefans.net/2021/09/12/horner-disappointed-by-wolffs-claim-verstappen-performed-a-tactical-foul-on-hamilton/',
        date: '2021-09-12',
      },
    },
    {
      id: 'team-3',
      phase: 'team',
      when: '赛后 · 难得的共识',
      speaker: '霍纳 × 沃尔夫',
      role: '两位领队',
      camp: 'neutral',
      zh: '两位领队在一件事上罕见地达成一致：Halo 救了汉密尔顿。霍纳："今天最重要的是 Halo 完成了它的工作——他以一种很别扭的方式压在梅赛德斯车顶上，幸好没人受伤。"沃尔夫："太棒了。看看那辆车，Halo 上方整个都损坏了，车轮就在刘易斯的头上。"',
      quote:
        '"The most important thing today is the halo has done its job… thankfully no one was hurt." —— 霍纳；"If you see the car, the wheel was on Lewis\' head." —— 沃尔夫',
      tone: '后怕 / 共识',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/tactical-foul-or-racing-incident-wolff-and-horner-have-their-say-on-the.62ks0ABWVkMhHFwBjrMjeH',
        date: '2021-09-12',
      },
    },
    {
      id: 'cool-1',
      phase: 'cooldown',
      when: '裁决公布后 · 周日晚',
      speaker: '刘易斯·汉密尔顿',
      role: '梅赛德斯车手',
      camp: 'a',
      zh: '罚退消息传出时，汉密尔顿正在接受采访。他的回应耐人寻味："如果这就是结果，那我由衷地为干事们感到骄傲。我需要时间认真复盘，但这无疑树立了一个先例——为了车手安全，必须有严格的规则。"',
      quote:
        '"If that is the result, then I\'m ultimately proud of the stewards… I think it definitely sets a precedent and it\'s important for us moving forwards, for the safety of the drivers, that there are strict rules set in place."',
      tone: '欢迎裁决',
      source: {
        label: 'RaceFans',
        url: 'https://www.racefans.net/2021/09/13/hamilton-pleased-stewards-set-a-precedent-verstappen-doesnt-fully-agree/',
        date: '2021-09-13',
      },
    },
    {
      id: 'cool-2',
      phase: 'cooldown',
      when: '裁决公布后 · 周日晚',
      speaker: '马克斯·维斯塔潘',
      role: '红牛车手',
      camp: 'b',
      zh: '维斯塔潘则明确表示不接受：他不完全同意干事的决定，坚持认为这次碰撞就是一场赛道事故。霍纳代表车队表态"对罚退 3 位感到失望，但接受裁决"，同时强调"在这么精彩的一个冠军争夺赛季里，看着两台车都退赛，令人沮丧"。',
      tone: '不认 / 接受',
      source: {
        label: 'RaceFans',
        url: 'https://www.racefans.net/2021/09/12/why-verstappens-grid-penalty-differed-from-hamiltons-silverstone-sanction/',
        date: '2021-09-12',
      },
    },
  ],
  expertViews: [
    {
      id: 'exp-1',
      phase: 'immediate',
      when: '赛后 · 周日晚',
      speaker: '费尔南多·阿隆索',
      role: 'Alpine 车手 · 围场"老炮"视角',
      camp: 'neutral',
      zh: '阿隆索淡化了事故的危险性，定性为"赛道事故"："赛车跳起来，轮胎蹭轮胎，橡胶把一辆车弹飞了。但这是低速弯，时速只有三四十公里，没有危险，什么都没有——今天这事不算什么大事。银石那次可能是，但今天就是一场赛道事故。"他还指出同一个周末吉奥维纳兹与勒克莱尔、斯托尔与佩雷兹都以同样的方式蹭过，只是没碰到轮胎对轮胎，"他们俩只是不走运"。',
      quote:
        '"It\'s low-speed, they are at 30 or 40kph, there is no danger, there is no nothing… Today it was just a racing incident."',
      tone: '淡化 / 各打五十大板',
      source: {
        label: 'RaceFans',
        url: 'https://www.racefans.net/2021/09/14/hamilton-verstappen-crash-was-a-racing-incident-no-danger-alonso/',
        date: '2021-09-14',
      },
    },
    {
      id: 'exp-2',
      phase: 'cooldown',
      when: '赛季末 · 回望',
      speaker: '达蒙·希尔',
      role: '1996 年世界冠军',
      camp: 'neutral',
      zh: '希尔后来把这次碰撞放进整个 2021 赛季的坐标里看：银石、蒙扎、巴西连番摩擦之后，他公开呼吁两人守住体育精神的底线——"如果总冠军靠一场撞车来决定，那是 F1 的悲哀。我希望最后能让人觉得：这是一个伟大的赛季，由两个配得上的人缠斗到底，更好的那个人赢了。"',
      quote:
        '"I think it is sad for F1 if the title is decided in a crash. I just feel like we\'ve got an obligation to be sporting."',
      tone: '忧虑 / 呼吁',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/hill-2021-ending-in-a-hamilton-verstappen-crash-would-be-sad-for-f1/6838714/',
        date: '2021-12-02',
      },
    },
  ],
  fiaDecision: {
    docName: '2021 Italian Grand Prix · 干事裁决 – Car 33 causing a collision（第 26 圈 1-2 号弯）',
    original:
      '"The stewards observed on CCTV footage that the driver of car 44 was driving an avoiding line, although his position caused car 33 to go onto the kerb. But further, the stewards observed that car 33 was not at all alongside car 44 until significantly into the entry into turn one. In the opinion of the stewards, this manoeuvre was attempted too late for the driver of car 33 to have \'the right to racing room\'. While car 44 could have steered further from the kerb to avoid the incident, the stewards determined that his position was reasonable and therefore find that the driver of car 33 was predominantly to blame for the incident. In coming to the penalty the stewards emphasise that they have only considered the incident itself and not the consequences thereof."',
    plain:
      '通俗解读：汉密尔顿走的是一条避让的行车线（虽然他的位置确实把维斯塔潘逼上了路肩）；关键是，维斯塔潘直到 1 号弯入口深处都远未与汉密尔顿并排——这个进攻发起得太晚，他没有资格要求"赛车空间"。汉密尔顿本可以离路肩更远一点，但他的位置是合理的。所以主要怪维斯塔潘。另外干事特意声明：量刑只看动作本身，不考虑后果（即"两败俱伤"不会加重处罚）。',
    rules: [
      '为什么罚退 3 位而不是罚时 10 秒？两人都当场退赛，罚时已经没有意义，所以处罚顺延到下一站（索契）以发车罚退形式执行——这和银石时汉密尔顿继续比赛、罚时 10 秒的逻辑一致：干事试图让两种处罚的"实际代价"相当。',
      '"主要责任（predominantly）"而非"全部责任（wholly）"：干事同时点出汉密尔顿"本可以离路肩更远"，只是他的位置"合理"，所以处罚档位偏轻（罚退 3 位是"造成碰撞"的起步档）。',
      '除罚退外另扣超级驾照 2 分——这是维斯塔潘该 12 个月周期内的头 2 分。',
      '干事特别写明"只考虑事件本身、不考虑后果"，正面回应了红牛阵营"两人都退赛已经够惨"和梅赛德斯阵营"压头了必须重罚"的两头诉求。',
    ],
    sources: [
      {
        label: 'RaceFans（裁决原文转引）',
        url: 'https://www.racefans.net/2021/09/12/verstappen-given-three-place-grid-penalty-for-hamilton-crash/',
      },
      {
        label: 'RaceFans（为何与银石的处罚形式不同）',
        url: 'https://www.racefans.net/2021/09/12/why-verstappens-grid-penalty-differed-from-hamiltons-silverstone-sanction/',
      },
    ],
  },
  telemetryNotes: {
    zoneLabel: '1-2 号弯 Rettifilo 减速弯（碰撞点距起点约 600–900 米）',
    window: [300, 1400],
    lapWindow: [12, 26],
    narrative:
      '这场碰撞的特别之处：两名车手都没能活着跑出第 26 圈，所以碰撞瞬间没有任何遥测回传——图表里看不到那一幕。但数据把"事发前的剧本"讲得很清楚：第 24 圈维斯塔潘的圈速是 114.1 秒（里面含着那次 11.1 秒的灾难换胎，名次从 P2 跌到 P9）；第 25 圈他换上新硬胎立刻轰出 85.2 秒疯狂追击。同一时段，握着领先但还没进站的汉密尔顿用着 25 圈的旧硬胎，只能跑 86.6–90.9 秒。第 25 圈末梅赛德斯召他进站——出站的那一刻，两人恰好并排冲进 1 号弯，剩下的故事你都知道了。放大图（0–1400 米）是两人最后几个完整圈通过 1-2 号弯的走线：320 km/h 全油门 → 重刹降到约 70 km/h 过减速弯——这就是第 26 圈两人以毫厘之差同时抵达的那个位置。',
    caveat:
      '碰撞发生在第 26 圈，两车双双退赛，该圈没有遥测数据回传，图表仅能还原事发前 4 圈（第 22–25 圈）的节奏与车速；遥测为公开计时数据插值，不含横向位置与方向盘转角，无法直接裁定"是否留足一个车身宽度"——干事当年主要依靠 CCTV 视频与 GPS 位置比对定责。',
  },
  complete: true,
};
