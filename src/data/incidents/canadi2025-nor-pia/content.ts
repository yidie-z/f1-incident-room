import type { IncidentContent } from '../../types';

// 2025 加拿大大奖赛 · 诺里斯 × 皮亚斯特里 第 66 圈主直道碰撞
// 骨架由 generate_incident.py 生成（遥测来自 FastF1 官方计时数据），
// 发言与裁决内容取自公开报道，每条附原始来源链接。
export const content: IncidentContent = {
  slug: 'canadi2025-nor-pia',
  title: '主直道：一次没有赢家的队友碰撞',
  event: '2025 加拿大大奖赛 · 正赛第 66 圈 / 共 70 圈',
  place: '吉尔·维伦纽夫赛道 · 蒙特利尔',
  date: '2025 年 6 月 15 日',
  verdict:
    'FIA 干事裁定：4 号车（诺里斯）对碰撞负全部责任，赛后追加罚时 5 秒、超级驾照不扣分——理由竟是"没有对其他车手造成直接明显的竞技后果"。诺里斯当场退赛（按完成里程列入第 18 名），皮亚斯特里保住第 4，积分榜领先优势扩大到 22 分。',
  drivers: { a: 'NOR', b: 'PIA' },
  driverNames: { NOR: '诺里斯', PIA: '皮亚斯特里' },
  colors: { a: '#FF8000', b: '#FFC233' },
  campNames: { a: '迈凯伦 / 诺里斯', b: '迈凯伦 / 皮亚斯特里' },
  statements: [
    {
      id: 'pre-1',
      phase: 'pre',
      when: '赛前背景',
      speaker: '赛场背景',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '2025 赛季迈凯伦双车争冠：皮亚斯特里领跑积分榜，诺里斯紧随。车队坚持"木瓜规则"（papaya rules）——允许两人自由竞争，唯一铁律是同队两车不许相撞。蒙特利尔收官阶段，前五名只差约 8 秒：皮亚斯特里缠斗安东内利争第 3，诺里斯咬在队友 DRS 区内虎视眈眈。',
      tone: '客观背景',
      source: {
        label: 'Motorsport Week',
        url: 'https://www.motorsportweek.com/2025/06/15/george-russell-wins-f1-canadian-gp-as-mclaren-drivers-clash/',
        date: '2025-06-15',
      },
    },
    {
      id: 'inc-1',
      phase: 'incident',
      when: '第 66 圈',
      speaker: '赛事进程',
      role: '碰撞经过',
      camp: 'neutral',
      zh: '诺里斯在 10 号发夹弯内线超越皮亚斯特里，但出弯跑大，皮亚斯特里沿赌场直道并在最后减速弯夺回第 4。进入发车直道，诺里斯凭借更好的出弯再次压上，试图从左侧挤进队友与护墙之间的空隙——但空间根本不存在。他的前翼刮到皮亚斯特里的左后轮，赛车高速撞上维修区护墙，左前悬挂断裂，当场退赛。安全车出动，比赛在安全车带领下结束。',
      tone: '客观经过',
      source: {
        label: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/2025_Canadian_Grand_Prix',
        date: '2025-06-15',
      },
    },
    {
      id: 'inc-2',
      phase: 'incident',
      when: '第 67 圈 · Team Radio',
      speaker: '兰多·诺里斯',
      role: '迈凯伦车手 · 事故责任方',
      camp: 'a',
      zh: '撞车后第一时间，诺里斯在无线电里没有任何辩解，直接认错。',
      quote: '"Sorry. All my bad. All my fault. Stupid from me."',
      tone: '当场认错',
      source: {
        label: 'ESPN',
        url: 'https://www.espn.com/f1/story/_/id/45491077/russell-wins-canadian-gp-norris-crashes-out',
        date: '2025-06-15',
      },
    },
    {
      id: 'imm-1',
      phase: 'immediate',
      when: '赛后采访',
      speaker: '兰多·诺里斯',
      role: '迈凯伦车手',
      camp: 'a',
      zh: '赛后混合区，诺里斯继续把责任全部揽在自己身上，称这是一次"误判"（misjudgement），并向车队和皮亚斯特里道歉——这是他自 2019 年进入 F1 以来第一次与队友相撞。',
      tone: '自责道歉',
      source: {
        label: 'Sky Sports',
        url: 'https://www.skysports.com/f1/news/12040/13384910/lando-norris-mclaren-driver-says-he-will-take-oscar-piastri-collision-on-the-chin-and-move-on-from-canadian-gp',
        date: '2025-06-17',
      },
    },
    {
      id: 'team-1',
      phase: 'team',
      when: '赛后 F1 TV',
      speaker: '安德里亚·斯特拉',
      role: '迈凯伦领队',
      camp: 'neutral',
      zh: '我们绝不愿看到迈凯伦出事故，更不愿看到两台迈凯伦相撞——这种情况是不可接受的。但同时，兰多立刻认了错、向车队道了歉，这让事态平息了下来。他在积分榜上付出了代价，我们相信他学到了重要一课。比赛还会继续。',
      quote:
        '"We never want to see a McLaren car involved in an accident and definitely we don\'t want to see the two McLarens having contact, so this situation is a situation that we know is not acceptable. At the same time, we appreciate that Lando immediately owned it and apologised to the team... he paid a price in the championship... we will go racing again."',
      tone: '定性 + 灭火',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/stella-says-norris-and-piastri-collision-not-acceptable-as-he-admits-briton.5I2G0joimFftevHuEeJDjj',
        date: '2025-06-15',
      },
    },
    {
      id: 'team-2',
      phase: 'team',
      when: '赛后（被问"木瓜规则"是否会收紧）',
      speaker: '安德里亚·斯特拉',
      role: '迈凯伦领队',
      camp: 'neutral',
      zh: '不会改变什么，因为这就是一次误判，不是车手的意图越过了底线。如果兰多是另一种（不认错）反应，那我们才需要严肃谈话——但他立刻意识到自己只是算错了与前车的距离，这给他自己、给车队都造成了麻烦，还差点连累奥斯卡。',
      quote:
        '"It doesn\'t change things because it\'s a misjudgement. It\'s not like the driver had an intent that was beyond the principles... If Lando had a different reaction, then there would have been certainly serious conversations to have."',
      tone: '规则不变',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/stella-says-norris-and-piastri-collision-not-acceptable-as-he-admits-briton.5I2G0joimFftevHuEeJDjj',
        date: '2025-06-15',
      },
    },
    {
      id: 'cool-1',
      phase: 'cooldown',
      when: '6 月 17 日 · 纽约（两天后）',
      speaker: '兰多·诺里斯',
      role: '迈凯伦车手',
      camp: 'a',
      zh: '发生的事已经发生，我当时就后悔了也道了歉。遗憾的是这也是赛车的一部分。我接受这个结果并往前看——要着眼于下一站，想办法做得更好，不再犯这种愚蠢的错误。',
      quote:
        '"What happened happened and I regretted it at the time and apologised for it. Sadly, it\'s also racing. I take it on the chin and I\'ve got to move on... not make those silly mistakes at times."',
      tone: '翻篇',
      source: {
        label: 'Sky Sports',
        url: 'https://www.skysports.com/f1/news/12040/13384910/lando-norris-mclaren-driver-says-he-will-take-oscar-piastri-collision-on-the-chin-and-move-on-from-canadian-gp',
        date: '2025-06-17',
      },
    },
    {
      id: 'cool-2',
      phase: 'cooldown',
      when: '6 月 26 日 · 奥地利站前',
      speaker: '奥斯卡·皮亚斯特里',
      role: '迈凯伦车手',
      camp: 'b',
      zh: '加拿大的事确实不理想，但我们谈过了，依然可以放手去比赛——我们都在争总冠军，继续push，只是别再来一次碰撞。兰多举手认错了，所以一切都好。规矩还是老样子：不管写没写下来，第一条铁律就是同队的两辆车不能撞。',
      quote:
        '"What happened in Canada wasn\'t ideal, but we\'re still free to race, still fighting for a championship each... Lando put his hands up and apologised, so it\'s all good. The first rule, regardless of whether it\'s written down or not, is that the two cars from the same team don\'t crash."',
      tone: '接受道歉',
      source: {
        label: 'Speedcafe',
        url: 'https://speedcafe.com/f1-news-2025-red-bull-ring-preview-oscar-piastri-vs-lando-norris-comment-mark-webber-feud-sebastian-vettel/',
        date: '2025-06-27',
      },
    },
    {
      id: 'cool-3',
      phase: 'cooldown',
      when: '6 月 30 日 · 奥地利站后复盘',
      speaker: '安德里亚·斯特拉',
      role: '迈凯伦领队',
      camp: 'neutral',
      zh: '斯特拉复盘时透露了一个技术细节：诺里斯的误判部分源于两车接近速度超出预期——皮亚斯特里的 MGU-K 在那圈末段因电池耗尽停止输出动力。他把加拿大定性为"良性的"（benign）事故，并强调车队复盘后"更强大、更团结"。',
      quote:
        '"I am so refreshed by how the team reviewed the situation in Canada, which was a benign situation. It was just a misjudgment. And we have come out stronger and even more united from there."',
      tone: '技术复盘',
      source: {
        label: 'The Race',
        url: 'https://www.the-race.com/formula-1/where-mclaren-feels-piastri-vs-norris-austrian-gp-f1-move-crossed-line/',
        date: '2025-06-30',
      },
    },
  ],
  expertViews: [
    {
      id: 'exp-1',
      phase: 'cooldown',
      when: '6 月 19 日专栏',
      speaker: '乔利恩·帕尔默',
      role: '前 F1 车手 · F1.com 专栏作家',
      camp: 'neutral',
      zh: '有人拿它和 2011 年蒙特利尔的汉密尔顿×巴顿相比，但性质完全不同：2011 年汉密尔顿有车身重叠、有权要空间；而这一次诺里斯从未与皮亚斯特里并排，空间从来不存在——他就是直接撞上了奥斯卡的车尾。迈凯伦这次能免于"内战"，靠的是奥斯卡反而受益、兰多立刻举手认错。',
      quote:
        '"Norris was desperate to force that same move, but the space was never there and Lando was never alongside. He simply drove into the back of Oscar... The fact that Oscar actually benefitted from it, and Lando immediately held his hands up, means that the team will probably get away without civil war just yet."',
      tone: '历史对照',
      source: {
        label: 'Crash.net（转引 F1.com 专栏）',
        url: 'https://www.crash.net/f1/news/1074634/1/why-mclaren-can-get-away-without-civil-war-canada-f1-clash',
        date: '2025-06-19',
      },
    },
    {
      id: 'exp-2',
      phase: 'cooldown',
      when: '6 月 16 日分析',
      speaker: '劳伦斯·埃德蒙森',
      role: 'ESPN 资深 F1 记者',
      camp: 'neutral',
      zh: '诺里斯其实"逃过"了重罚：造成碰撞的基准处罚是 10 秒 + 驾照扣 2 分，但干事只给了 5 秒、不扣分——白纸黑字的理由是"碰撞没有对其他车手造成直接明显的竞技后果"。而由于他完成超 90% 赛程被"列入成绩"，干事连"转换成下一站罚退"都用不了。唯一的代价是他自己退赛，把积分差距送大到 22 分。',
      quote:
        '"The standard penalty for causing a collision is ten seconds and two penalty points, but the stewards\' statement said their decision had been more lenient because it had not impacted any other driver\'s result."',
      tone: '处罚解读',
      source: {
        label: 'ESPN',
        url: 'https://www.espn.com/f1/story/_/id/45524823/why-was-lando-norris-only-given-five-second-penalty-oscar-piastri-crash',
        date: '2025-06-16',
      },
    },
    {
      id: 'exp-3',
      phase: 'cooldown',
      when: '6 月 26 日播客',
      speaker: '拉尔夫·舒马赫',
      role: '前 F1 车手 · Sky 德国评论嘉宾',
      camp: 'b',
      zh: '（唱反调的狠话）诺里斯毫无必要地撞上奥斯卡的车尾，暴露了太多软弱和失误。他道歉了，说明他是个好人——但这没用，因为好人很少能拿总冠军。我认为迈凯伦内部已经决定把总冠军押在皮亚斯特里身上。',
      quote:
        '"Lando shows too many weaknesses and makes too many mistakes, including his senseless driving into the back of Oscar in Canada. He has apologised and that shows what a great person he is. But it\'s no use, because great people rarely win titles."',
      tone: '辛辣批评',
      source: {
        label: 'GPFans（转引 Sky 德国 Backstage Pit Lane）',
        url: 'https://www.gpfans.com/en/f1-news/1054044/mclaren-f1-decided-number-one-driver-oscar-piastri-lando-norris-drivers-title/',
        date: '2025-06-26',
      },
    },
  ],
  fiaDecision: {
    docName: '干事决定 – 4 号车 – 造成碰撞（2025 加拿大大奖赛，FIA 赛事干事文件，RacingNews365 全文转引）',
    original:
      '"Car 4 was attempting to overtake Car 81 on the main straight. He attempted to move to the left of Car 81 but there was no space. The driver of Car 4 said that he thought there might be space but realised too late that there was not and he collided with Car 81. While Car 4 sustained damage and retired from the race (but was nonetheless classified in the results), Car 81 was not damaged. The Stewards determined that the driver of Car 4 was solely to blame for the collision. Because the collision had no immediate and obvious sporting consequence, we imposed a 5-second post-race time penalty on Car 4."',
    plain:
      '通俗解读：你想在主直道从左边超你的队友，但那里根本没有空间——你自己也承认"以为有空间，发现没有时已经太晚"。所以全责在你。但是：你撞废的是自己的车，队友毫发无损、第 4 名完赛，这次碰撞没有毁掉任何别人的比赛——所以只象征性地赛后追加 5 秒（你已经退赛了，这 5 秒实际等于没罚），驾照分也不扣。',
    rules: [
      '为何是 5 秒而不是 10 秒：造成碰撞的基准处罚是 10 秒 + 扣 2 分，但干事明文以"没有对其他车手产生直接明显的竞技后果"为由从轻——因为皮亚斯特里的车完全没受损。',
      '为何退赛了还能罚时：按规则，退赛车手的罚时通常转换为下一站罚退；但诺里斯完成了超过 90% 的赛程，被正式"列入成绩"（第 18 名），所以只能追加罚时，无法转换。',
      '为何不扣分：超级驾照扣分完全属于干事的自由裁量，本次他们选择不扣——ESPN 的评价是"诺里斯逃过了一劫"。',
    ],
    sources: [
      {
        label: 'RacingNews365（裁决书全文转引）',
        url: 'https://racingnews365.com/f1-stewards-hand-lando-norris-unusual-penalty-after-oscar-piastri-collision',
      },
      {
        label: 'ESPN（处罚尺度分析）',
        url: 'https://www.espn.com/f1/story/_/id/45524823/why-was-lando-norris-only-given-five-second-penalty-oscar-piastri-crash',
      },
    ],
  },
  telemetryNotes: {
    zoneLabel: '发车直道（1 号弯前，维修区护墙侧）',
    window: [3300, 4300],
    contactZone: [4150, 4300],
    lapWindow: [52, 68],
    narrative:
      '第 66 圈的最后阶段：两人通过最后减速弯（约 3800-3900 米处速度降到 100 km/h 左右）后全油门冲上发车直道，尾速双双逼近 290 km/h。注意红区：皮亚斯特里（浅橙）的曲线完整划过 4300 米，而诺里斯（橙）的速度曲线在 4201 米处、290 km/h 全油门状态下戛然而止——数据在这里中断，正是前翼刮到队友左后轮、撞上护墙的瞬间。',
    caveat:
      '遥测为等距采样插值后的公开计时数据，不含方向盘转角与横向位置，无法直接呈现"向左抽头"的动作；但两台车曲线在直道末端的突然分岔（一条中断、一条完整）与事故时间线完全吻合。',
  },
  complete: true,
};
