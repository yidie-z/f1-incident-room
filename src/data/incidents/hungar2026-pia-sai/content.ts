import type { IncidentContent } from '../../types';

// 2026 匈牙利大奖赛 · 皮亚斯特里 × 塞恩斯 第 38 圈 2 号弯碰撞
// 骨架由 generate_incident.py 生成（遥测来自 FastF1 官方计时数据），
// 发言与裁决内容取自公开报道，每条附原始来源链接。
export const content: IncidentContent = {
  slug: 'hungar2026-pia-sai',
  title: '2 号弯：盲区里撞掉的领先',
  event: '2026 匈牙利大奖赛 · 正赛第 38 圈 / 共 70 圈',
  place: '亨格罗宁赛道 · 布达佩斯（莫焦罗德）',
  date: '2026 年 7 月 26 日',
  verdict:
    'FIA 干事裁定：55 号车（塞恩斯）对碰撞负责，罚时 5 秒——"皮亚斯特里处于塞恩斯的后视镜盲区"被认定为减轻情节，因此没有按 10 秒档处理；但蓝灯提示系统故障不构成免责理由。皮亚斯特里因此丢掉比赛领先，第 56 圈又因变速箱故障退赛。',
  drivers: { a: 'PIA', b: 'SAI' },
  driverNames: { PIA: '皮亚斯特里', SAI: '塞恩斯' },
  colors: { a: '#FF8000', b: '#64C4FF' },
  campNames: { a: '迈凯伦 / 皮亚斯特里阵营', b: '威廉姆斯 / 塞恩斯阵营' },
  statements: [
    {
      id: 'pre-1',
      phase: 'pre',
      when: '第 1-33 圈',
      speaker: '赛场背景',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '皮亚斯特里第 1 圈就在 2 号弯用交叉线反超杆位队友诺里斯，随后领跑前半场。诺里斯反复在无线电里强调"我更快"，并要求先进站执行 undercut，被车队以"领先车有优先进站权"为由拒绝。第 33 圈迈凯伦让皮亚斯特里二停防守汉密尔顿，出站后正好落入慢车堆——塞恩斯与阿隆索正在为第 14 名缠斗。',
      quote: '"When Hamilton pits, he is in condition to undercut the two McLarens, so we needed to respond. Oscar was in the lead, and we thought that he was the right car to stop for that." —— 斯特拉赛后解释',
      tone: '客观背景',
      source: {
        label: 'Motorsport.com',
        url: 'https://hu.motorsport.com/f1/news/explained-mclarens-view-of-oscar-piastris-explosive-f1-hungarian-gp-radio-outburst/10842231/',
        date: '2026-07-26',
      },
    },
    {
      id: 'pre-2',
      phase: 'pre',
      when: '比赛初段起',
      speaker: '赛场背景',
      role: '系统故障',
      camp: 'neutral',
      zh: '本场蓝旗提示系统（方向盘蓝灯）因 GPS 数据通信故障被整场禁用：开赛几圈就有车手收到"幽灵蓝旗"，之后灯板也不再显示具体车号。多名被套圈车手整场只能靠后视镜和工程师口头提醒判断身后是谁——这是理解第 38 圈事故的关键背景。',
      quote:
        '"We didn\'t have any feedback on the dash... I might have blocked him for three corners. But by the time the engineers told me, you don\'t know because the blue flag is always flashing the whole lap." —— 奥康',
      tone: '客观背景',
      source: {
        label: 'Autosport',
        url: 'https://www.autosport.com/f1/news/how-blue-flag-malfunction-caused-chaos-in-f1-hungarian-gp/10842154/',
        date: '2026-07-26',
      },
    },
    {
      id: 'inc-1',
      phase: 'incident',
      when: '第 38 圈 · 2 号弯出弯',
      speaker: '奥斯卡·皮亚斯特里',
      role: '迈凯伦车手 · 场上领先者',
      camp: 'a',
      zh: '皮亚斯特里在 2 号弯内线套圈塞恩斯。塞恩斯在外线跑大后突然切回赛车线，前翼蹭到迈凯伦侧面，把皮亚斯特里半推出赛道。皮亚斯特里在无线电中爆了粗口——这一下只损失了几秒，但足以让随后进站的诺里斯完成 overcut，永久夺走领先。',
      quote: '"You idiot!" —— Team Radio',
      tone: '暴怒',
      source: {
        label: 'FOX Sports',
        url: 'https://www.foxsports.com.au/motorsport/formula-one/f1-2026-oscar-piastri-dnf-in-hungarian-grand-prix-after-carlos-sainz-crash-costs-him-first-place-lando-norris-wins-after-begging-mclaren-for-race-lead-highlights-video-latest-news/news-story/0f0770aad670d11219e07b939ae88910',
        date: '2026-07-26',
      },
    },
    {
      id: 'imm-1',
      phase: 'immediate',
      when: '赛后第一时间',
      speaker: '卡洛斯·塞恩斯',
      role: '威廉姆斯车手 · 被套圈方',
      camp: 'b',
      zh: '方向盘没有蓝灯提示，我正和阿隆索死拼一个弯角的 undercut，根本不知道自己马上要被套圈；就算想到他可能在那儿，那个角度他也是在我后视镜的死角里——说实话，我这边没有任何办法避免。',
      quote:
        '"We didn\'t have blue lights on the steering... I had no idea I was about to get lapped... he was in my dead spot on the angle. So it was impossible, honestly, from my side to avoid it."',
      tone: '辩解',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/sainz-explains-how-blue-light-issue-caught-him-out-in-piastri-collision.OD1D0DiIZApJZmL6jHZkr',
        date: '2026-07-26',
      },
    },
    {
      id: 'imm-2',
      phase: 'immediate',
      when: '赛后第一时间',
      speaker: '卡洛斯·塞恩斯',
      role: '威廉姆斯车手',
      camp: 'b',
      zh: '真的很抱歉奥斯卡。但我觉得自己有个相当说得过去的理由——或许他在争领奖台，也可以在蓝旗系统乱成一团的时候把线路放得更保守一点。总之 5 秒我认了，我在争 P18，无所谓。',
      quote:
        '"I\'m really sorry for Oscar. But I think I have a pretty good excuse for what happened... I took the five seconds. I\'m okay with it. I don\'t care when I\'m fighting for P18."',
      tone: '道歉但坚持',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/sainz-explains-how-blue-light-issue-caught-him-out-in-piastri-collision.OD1D0DiIZApJZmL6jHZkr',
        date: '2026-07-26',
      },
    },
    {
      id: 'imm-3',
      phase: 'immediate',
      when: '赛后采访（被告知塞恩斯的解释后）',
      speaker: '奥斯卡·皮亚斯特里',
      role: '迈凯伦车手',
      camp: 'a',
      zh: '他跟费尔南多争最后一个名次，拼得像在争世界冠军，结果把我的领先撞没了。他平时对别人挺挑剔的，别人也说过他在赛道上难缠——你做出这种事，也许该先照照镜子。',
      quote:
        '"He was fighting Fernando for last place like it was the World Championship, and cost me the lead of the race... maybe you should look in the mirror a bit."',
      tone: '愤怒反击',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/piastri-reacts-to-getting-taken-out-by-a-backmarker-in-unusual-hungarian-gp-incident.7D4Ic8FN4rvg9rvqzY2cbW',
        date: '2026-07-26',
      },
    },
    {
      id: 'imm-4',
      phase: 'immediate',
      when: '赛后采访',
      speaker: '奥斯卡·皮亚斯特里',
      role: '迈凯伦车手',
      camp: 'a',
      zh: '他看没看到我我不在乎。他没看到、或者没人告诉他、或者整体意识缺失——不管是哪种，都不可接受。',
      quote:
        '"I don\'t really care if he didn\'t see me. The fact that he didn\'t, or no one told him, or there was a lack of complete awareness, is unacceptable."',
      tone: '不接受辩解',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/piastri-reacts-to-getting-taken-out-by-a-backmarker-in-unusual-hungarian-gp-incident.7D4Ic8FN4rvg9rvqzY2cbW',
        date: '2026-07-26',
      },
    },
    {
      id: 'imm-5',
      phase: 'immediate',
      when: '赛后采访',
      speaker: '奥斯卡·皮亚斯特里',
      role: '迈凯伦车手',
      camp: 'a',
      zh: '做策略的时候，你不会把"被套圈车撞出去"列入计划……所以这件事我一点不怪车队。第 56 圈变速箱断的时候我只是走在正常线路上，不知道是什么原因。夏休前这下午，能出错的都出错了。',
      quote:
        '"On the strategy side, you don\'t plan strategy for getting taken out by a backmarker, so… I can\'t blame the team at all for that."',
      tone: '克制',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/piastri-reacts-to-getting-taken-out-by-a-backmarker-in-unusual-hungarian-gp-incident.7D4Ic8FN4rvg9rvqzY2cbW',
        date: '2026-07-26',
      },
    },
    {
      id: 'imm-6',
      phase: 'immediate',
      when: '赛后',
      speaker: '奥利弗·贝尔曼',
      role: '哈斯车手（同场因无视蓝旗被罚 5 秒）',
      camp: 'neutral',
      zh: '因为和哈贾尔那次蓝旗的事我很过意不去，说实话今天简直是噩梦：你穿过内场根本没时间看后视镜，而且每一圈都有蓝旗屏幕弹出来——今天它们工作不正常，你根本分不清蓝旗是给谁的。显然这不是恶意的，但对被我影响的人我很抱歉。',
      quote:
        '"I feel bad about the blue-flag penalty with Hadjar, because honestly it was a bit of a nightmare out there... This race, they weren\'t working properly, so it was tough to know if it was you or the car behind getting the blue flag."',
      tone: '佐证系统混乱',
      source: {
        label: 'Autosport',
        url: 'https://www.autosport.com/f1/news/how-blue-flag-malfunction-caused-chaos-in-f1-hungarian-gp/10842154/',
        date: '2026-07-26',
      },
    },
    {
      id: 'team-1',
      phase: 'team',
      when: '赛后发布会',
      speaker: '安德里亚·斯特拉',
      role: '迈凯伦领队',
      camp: 'a',
      zh: '这次碰撞损失了相当多的时间。我们都知道卡洛斯是个非常公平、规矩的车手——如果连他都发生了这种事，那说明是某个环节的系统出了问题。（把矛头指向蓝灯系统，而非塞恩斯本人）',
      quote:
        '"It caused quite a bit of loss of time. We know Carlos is such a fair, correct driver, so if this is happening then that means something was not working correctly."',
      tone: '护犊但留余地',
      source: {
        label: 'France 24 (AFP)',
        url: 'https://www.france24.com/en/live-news/20260726-norris-heaps-praise-on-mclaren-for-updated-car-and-victory',
        date: '2026-07-26',
      },
    },
    {
      id: 'team-2',
      phase: 'team',
      when: '赛后',
      speaker: '安德里亚·斯特拉',
      role: '迈凯伦领队',
      camp: 'a',
      zh: '为什么不让诺里斯先进站？规则就是规则：汉密尔顿进站后有条件 undercut 我们两台车，必须回应；而奥斯卡是场上领先者，他就是该优先进站的那台车。（回应"策略偏心诺里斯"的质疑）',
      quote:
        '"When Hamilton pits, he is in condition to undercut the two McLarens, so we needed to respond. Oscar was in the lead, and we thought that he was the right car to stop for that."',
      tone: '辩护策略',
      source: {
        label: 'Motorsport.com',
        url: 'https://hu.motorsport.com/f1/news/explained-mclarens-view-of-oscar-piastris-explosive-f1-hungarian-gp-radio-outburst/10842231/',
        date: '2026-07-26',
      },
    },
    {
      id: 'cool-1',
      phase: 'cooldown',
      when: '赛后冷静复盘',
      speaker: '卡洛斯·塞恩斯',
      role: '威廉姆斯车手',
      camp: 'b',
      zh: '这就是一起比赛事故，奥斯卡大概也理解发生了什么。他没有因此退赛，也不是我的错——只是碰了一下，幸好没太干扰他的比赛。蓝旗的规则很清楚，解决办法也简单：我们的车要是没那么慢，就不会有这么多蓝旗了。我这辈子还没被套过两圈，这太糟了。',
      quote:
        '"It\'s a racing incident. He probably understands what happened... I\'m glad it didn\'t disturb his race too much. If we were not so slow, there wouldn\'t be so many blue flags. I never got lapped twice in my life, so it\'s quite bad."',
      tone: '淡然 + 自嘲',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/sainz-explains-how-blue-light-issue-caught-him-out-in-piastri-collision.OD1D0DiIZApJZmL6jHZkr',
        date: '2026-07-26',
      },
    },
  ],
  expertViews: [
    {
      id: 'exp-1',
      phase: 'cooldown',
      when: '7 月 27 日专栏',
      speaker: '马丁·布伦德尔',
      role: 'Sky Sports 解说 · 前 F1 车手',
      camp: 'neutral',
      zh: '在皮亚斯特里看来，塞恩斯在外线跑大，全世界都会以为"他看到我了，在让我过去"——结果塞恩斯重重地切回赛车线，撞上领先者。威廉姆斯已经通知过他，但 180 度弯的外线位置意味着后视镜里根本看不到紧贴内线的皮亚斯特里，所以处罚被减轻到 5 秒——这对理应愤怒的皮亚斯特里来说毫无安慰。',
      quote:
        '"It must have looked for all the world to Piastri that he\'d seen him and was letting him through, just as Sainz swung heavily back to the racing line and clashed with the race leader. Sainz had been informed by his Williams team but his position on the outside of a 180 degree turn meant he had no mirror sight of Piastri tight on the inside, and so his penalty was mitigated down to five seconds, which was zero comfort to a rightly angry Piastri."',
      tone: '技术分析',
      source: {
        label: 'Sky Sports',
        url: 'https://www.skysports.com/f1/news/12433/13567450/hungarian-gp-martin-brundle-on-relentless-lando-norris-oscar-piastri-carlos-sainz-incident-and-malaysia-return-to-f1-calendar',
        date: '2026-07-27',
      },
    },
    {
      id: 'exp-2',
      phase: 'cooldown',
      when: '7 月 26 日报道',
      speaker: 'Autosport 赛事报道组',
      role: '专业媒体',
      camp: 'neutral',
      zh: '干事把"迈凯伦处于塞恩斯的盲区"视为减轻情节，但不接受蓝旗系统故障作为理由——因此是 5 秒而不是 10 秒。同场贝尔曼因无视蓝旗也吃到同样的 5 秒罚单，佐证了干事对当天系统混乱的统一尺度。',
      quote:
        '"Stewards viewing the McLaren\'s position in the Spaniard\'s blind spot – but not the blue-flag situation – as a mitigating factor, hence why it wasn\'t a 10-second penalty."',
      tone: '裁决解读',
      source: {
        label: 'Autosport',
        url: 'https://www.autosport.com/f1/news/how-blue-flag-malfunction-caused-chaos-in-f1-hungarian-gp/10842154/',
        date: '2026-07-26',
      },
    },
  ],
  fiaDecision: {
    docName: '干事决定 – 55 号车 – 造成碰撞（2026 匈牙利大奖赛，FIA 赛事干事文件；以下为媒体转述，非裁决书逐字原文）',
    original:
      '"Stewards determined that Sainz was responsible for the collision and imposed a five-second time penalty." —— 处罚结论（Wikipedia/Autosport 转述）；"The stewards viewed the McLaren\'s position in the Spaniard\'s blind spot as a mitigating factor, but not the blue-flag situation." —— 减轻情节认定（Autosport 转述）；干事同时注意到"威廉姆斯指挥台曾就皮亚斯特里的接近与车手沟通过"（Formula1.com 转述）。',
    plain:
      '大白话：你是被套圈的车，车队也提醒过你后面来车了，结果你在出弯时切回赛车线撞上了正在套你圈的领先车——责任在你。但考虑到他当时确实在你的后视镜死角里（180 度弯的外线位置看不到紧贴内线的车），情有可原，所以只罚最低的 5 秒，没按 10 秒档处理。至于"方向盘蓝灯坏了"——干事不接受这个当借口：后视镜和实体蓝旗灯板一直都在，提醒义务不会被系统故障免除。',
    rules: [
      '为何是 5 秒而不是 10 秒：干事把"皮亚斯特里处于塞恩斯的后视镜盲区"认定为减轻情节，从轻落到 5 秒档；但明确没有把蓝灯系统故障算作理由——车手仍有义务留意后视镜与实体蓝旗/灯板。',
      '为何仍要罚：威廉姆斯 pit wall 事先通报过皮亚斯特里正在接近；按规则，被套圈车必须在第一时间让出线路，"我在和别人缠斗没注意到"不构成免责。',
      '处罚与后果的不对等：塞恩斯最终 P18 完赛，自称"我在争 P18，5 秒无所谓"；而皮亚斯特里因此丢掉领先（诺里斯 overcut 得手并最终夺冠），第 56 圈又遭遇变速箱故障退赛——"罚 5 秒换走一场胜利"的争议正是这个页面的存在意义。',
    ],
    sources: [
      {
        label: 'Autosport（减轻情节转述）',
        url: 'https://www.autosport.com/f1/news/how-blue-flag-malfunction-caused-chaos-in-f1-hungarian-gp/10842154/',
      },
      {
        label: 'Formula1.com（干事注意到车队已沟通）',
        url: 'https://www.formula1.com/en/latest/article/sainz-explains-how-blue-light-issue-caught-him-out-in-piastri-collision.OD1D0DiIZApJZmL6jHZkr',
      },
      {
        label: 'Wikipedia（处罚结论）',
        url: 'https://en.wikipedia.org/wiki/2026_Hungarian_Grand_Prix',
      },
    ],
  },
  telemetryNotes: {
    zoneLabel: '2 号弯出弯口（180 度长弯）',
    window: [3440, 4340],
    contactZone: [3780, 3900],
    lapWindow: [24, 40],
    narrative:
      '第 38 圈，皮亚斯特里（橙）以领先者节奏进入 2 号弯，塞恩斯（蓝）正在外线与阿隆索缠斗（其第 37 圈慢了 4 秒多）。红区为接触区：塞恩斯出弯时切回赛车线，皮亚斯特里被迫松油半离赛道——他这一圈做出 1:26.4，比前后圈慢约 1 秒，且损失的是节奏与位置感；随后诺里斯在第 39 圈末进站，出站即完成反超。',
    caveat:
      '遥测为等距采样插值后的公开计时数据，不含方向盘转角与后视镜视野，无法独立裁定"是否故意切线"——干事同样参考了车载视频。数据能确认的是：碰撞区两台车的速度差与皮亚斯特里非自愿的松油动作。',
  },
  complete: true,
};
