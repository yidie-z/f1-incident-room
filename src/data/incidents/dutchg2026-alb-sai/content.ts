import type { IncidentContent } from '../../types';

// 2026 荷兰大奖赛 · 阿尔本 × 塞恩斯 第 65 圈 1 号弯碰撞
// 骨架由 generate_incident.py 生成（遥测来自 FastF1 官方计时数据），
// 发言与裁决内容取自公开报道，每条附原始来源链接。
// 注：部分媒体报道称碰撞发生在"倒数第四圈"，官方计时数据显示异常发生在第 65 圈。
export const content: IncidentContent = {
  slug: 'dutchg2026-alb-sai',
  title: '塔赞弯抱死：队友之间"最不想发生的事"',
  event: '2026 荷兰大奖赛 · 正赛第 65 圈 / 共 72 圈',
  place: '赞德沃特赛道 · 赞德沃特',
  date: '2026 年 8 月 23 日',
  verdict:
    'FIA 干事裁定：55 号车（塞恩斯）造成碰撞，罚时 10 秒——标准的"造成碰撞"基准处罚，无从轻情节：与 2025 加拿大诺里斯案相反，这次被撞的阿尔本底板损毁退赛，竞技后果实实在在。塞恩斯本人承认"罚得公道"。威廉姆斯连续第六站零分。',
  drivers: { a: 'ALB', b: 'SAI' },
  driverNames: { ALB: '阿尔本', SAI: '塞恩斯' },
  colors: { a: '#64C4FF', b: '#3D6BFF' },
  campNames: { a: '威廉姆斯 / 阿尔本', b: '威廉姆斯 / 塞恩斯' },
  statements: [
    {
      id: 'pre-1',
      phase: 'pre',
      when: '赛前背景',
      speaker: '赛场背景',
      role: '局势铺垫',
      camp: 'neutral',
      zh: '几天前，塞恩斯和阿尔本刚与威廉姆斯续约 2027——本该是提振士气的一周，结果车队在赞德沃特朝着"连续第六站零分"滑去。阿尔本硬胎起步跑长 stint，大部分时间压在阿隆索身前，是为数不多的亮点。',
      tone: '客观背景',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/sainz-accepts-blame-for-unfortunate-contact-with-albon-in-dutch-grand-prix.7h2yrHOeTXfsakoxWJTqFB',
        date: '2026-08-23',
      },
    },
    {
      id: 'pre-2',
      phase: 'pre',
      when: '第 25 圈（第一次进站）',
      speaker: '赛场背景',
      role: '转折',
      camp: 'a',
      zh: '车队把还在积分区边缘的阿尔本早早叫进站，出站直接掉进 7-8 辆车的车阵，陷入"每隔一圈就吃蓝旗"的地狱——第二 stint 被他赛后称为"一团糟"。到收官阶段，局面把两台威廉姆斯凑到了一起：塞恩斯硬胎磨损严重，阿尔本的中性胎更新、从身后压上。',
      quote:
        '"The situation in the race put Alex on a fresher medium behind. I was struggling a lot already with my hard tyres towards the end of the race." —— 塞恩斯',
      tone: '客观背景',
      source: {
        label: 'Pit Debrief',
        url: 'https://www.pitdebrief.com/post/albon-second-stint-at-2026-f1-dutch-gp-a-complete-mess-after-williams-miss-out-on-points/',
        date: '2026-08-30',
      },
    },
    {
      id: 'inc-1',
      phase: 'incident',
      when: '第 65 圈 · 1 号弯（塔赞弯）',
      speaker: '赛事进程',
      role: '碰撞经过',
      camp: 'neutral',
      zh: '阿尔本沿外线进攻，塞恩斯内线防守。刹车瞬间塞恩斯的左前轮压上 1 号弯内侧的大颠簸，前轮抱死、赛车直线冲出，把外线的队友一起带走。阿尔本底板侧面受损，下一圈进站后因碰撞损伤退赛；塞恩斯被处以 10 秒罚时。',
      tone: '客观经过',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/carlos-sainz-explains-fair-penalty-for-alex-albon-contact-the-worst-possible-outcome/10848715/',
        date: '2026-08-23',
      },
    },
    {
      id: 'imm-1',
      phase: 'immediate',
      when: '赛后第一时间',
      speaker: '卡洛斯·塞恩斯',
      role: '威廉姆斯车手 · 事故责任方',
      camp: 'b',
      zh: '我们整场都在为 P15/P16 挣扎。我去防守的时候，1 号弯刹车区里一个大颠簸让我措手不及，触发了严重的前轮抱死——然后就把亚历克斯一起带走了。对队友做出这种事，是你最不想发生的事。真的抱歉，我们作为一个团队向前看。',
      quote:
        '"All of a sudden when I went to defend, a big bump in the braking into Turn 1 surprised me. I triggered a massive front lock and with that one thing, obviously I took Alex with me, which is the last thing you want to do with a team mate... Apologies for that, and we will move on as a team."',
      tone: '认错道歉',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/sainz-accepts-blame-for-unfortunate-contact-with-albon-in-dutch-grand-prix.7h2yrHOeTXfsakoxWJTqFB',
        date: '2026-08-23',
      },
    },
    {
      id: 'imm-2',
      phase: 'immediate',
      when: '赛后采访',
      speaker: '卡洛斯·塞恩斯',
      role: '威廉姆斯车手',
      camp: 'b',
      zh: '这个 10 秒罚得公道。我的硬胎已经磨得很厉害，整场比赛都在和车的节奏搏斗。走内线刹车的时候，1 号弯内侧有个大颠簸——越靠内线颠簸越大。我一碰刹车就抱死了，把亚历克斯带了出去，这是这场比赛最糟糕的结果，毕竟我们又不是在争什么大名次。真的防不胜防，向他道歉。',
      quote:
        '"It was a fair penalty... The further you are on the inside, the bigger it gets. As soon as I touched the brakes, I locked up and I took Alex with me, which is the worst possible outcome for that race, because it\'s not like we were fighting for anything big."',
      tone: '接受处罚',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/carlos-sainz-explains-fair-penalty-for-alex-albon-contact-the-worst-possible-outcome/10848715/',
        date: '2026-08-23',
      },
    },
    {
      id: 'imm-3',
      phase: 'immediate',
      when: '赛后采访',
      speaker: '亚历山大·阿尔本',
      role: '威廉姆斯车手 · 被撞退赛方',
      camp: 'a',
      zh: '这种事难免发生。对车队不好——显然我们都向车队道了歉——但这不是维斯塔潘和里卡多（2018 巴库）那种局面。我们会复盘，我想他可能只是抱死了。我也尽量走直线躲了，但车有损伤，只能退赛。',
      quote:
        '"It happens. It\'s not good for the team – obviously we apologised to the team, but it\'s not a Verstappen-Ricciardo Baku situation. We\'ll review it for sure, but I think he maybe just locked up. I kind of tried to avoid it as well but we had damage, so we had to retire."',
      tone: '大度降温',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/sainz-accepts-blame-for-unfortunate-contact-with-albon-in-dutch-grand-prix.7h2yrHOeTXfsakoxWJTqFB',
        date: '2026-08-23',
      },
    },
    {
      id: 'imm-4',
      phase: 'immediate',
      when: '赛后采访',
      speaker: '亚历山大·阿尔本',
      role: '威廉姆斯车手',
      camp: 'a',
      zh: '阿尔本真正的怒火不在队友身上，而在策略：我知道问题出在哪——第一停进得太早，出站后掉进一列七辆车的车阵。我们本来是怕阿隆索 undercut 才早进，结果整个第二 stint 都困在车阵里。再多撑一段，我们本来可以 overcut 掉身后那群车。今天真的有可能拿分，所以很沮丧。',
      quote:
        '"I know what went wrong – we pitted too early on the first stop and we came out behind a train of seven cars... I really do think points were possible today, so [it\'s] frustrating."',
      tone: '懊恼（对策略）',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/sainz-accepts-blame-for-unfortunate-contact-with-albon-in-dutch-grand-prix.7h2yrHOeTXfsakoxWJTqFB',
        date: '2026-08-23',
      },
    },
    {
      id: 'cool-1',
      phase: 'cooldown',
      when: '一周后复盘',
      speaker: '亚历山大·阿尔本',
      role: '威廉姆斯车手',
      camp: 'a',
      zh: '最大的沮丧是比赛本身，而不是那次碰撞。我们大部分时间都跑在费尔南多前面——他最后 P9 完赛拿了 2 分。今年我已经习惯了，但你无法想象比赛中段有多少蓝旗，真的是每隔一圈就来一次。我们第一停进得太早，出来就卡在中游车阵里吃蓝旗；别人换新胎后一圈能追三四秒。第二个 stint 对我来说完全是一团糟。',
      quote:
        '"Honestly, the biggest frustration is the race itself... That second stint for me was a complete mess. I literally mean every other lap is a blue flag."',
      tone: '复盘余怒',
      source: {
        label: 'Pit Debrief',
        url: 'https://www.pitdebrief.com/post/albon-second-stint-at-2026-f1-dutch-gp-a-complete-mess-after-williams-miss-out-on-points/',
        date: '2026-08-30',
      },
    },
    {
      id: 'cool-2',
      phase: 'cooldown',
      when: '赛后（对车队现状）',
      speaker: '卡洛斯·塞恩斯',
      role: '威廉姆斯车手',
      camp: 'b',
      zh: '更让他泄气的是车队层面的账：我们的速度根本不够争积分，而对手阿隆索（阿斯顿·马丁）和霍肯伯格（奥迪）都拿分了——连续六站零分，"这不是我们想在的位置"。',
      quote:
        '"I think it\'s just not there, the position that we want to be."',
      tone: '无奈',
      source: {
        label: 'Formula1.com',
        url: 'https://www.formula1.com/en/latest/article/sainz-accepts-blame-for-unfortunate-contact-with-albon-in-dutch-grand-prix.7h2yrHOeTXfsakoxWJTqFB',
        date: '2026-08-23',
      },
    },
  ],
  expertViews: [
    {
      id: 'exp-1',
      phase: 'cooldown',
      when: '8 月 23 日报道',
      speaker: 'Motorsport.com 赛事报道组',
      role: '专业媒体',
      camp: 'neutral',
      zh: '一次"蓝撞蓝"的队友相残：干事直接开出 10 秒罚单，没有争辩空间。值得注意的是背景——两人当时只排在第 15、16 位，前面只压着凯迪拉克的佩雷兹；争的不是积分，所以这次碰撞的伤害更多是象征性的：本就挣扎的威廉姆斯，唯一的得分希望随阿尔本的底板一起报废了。',
      quote:
        '"Sainz was hit with a straightforward 10-second penalty... both Williams drivers were languishing at the bottom of the order in 15th and 16th, only ahead of Cadillac\'s Sergio Perez."',
      tone: '裁决解读',
      source: {
        label: 'Motorsport.com',
        url: 'https://www.motorsport.com/f1/news/carlos-sainz-explains-fair-penalty-for-alex-albon-contact-the-worst-possible-outcome/10848715/',
        date: '2026-08-23',
      },
    },
    {
      id: 'exp-2',
      phase: 'cooldown',
      when: '8 月 24 日赛后文件整理',
      speaker: 'Coffee Corner Motorsport',
      role: '赛事记录媒体（转引 FIA 第 64 号文件）',
      camp: 'neutral',
      zh: '按 FIA 第 64 号文件的最终成绩：阿尔本完成 66 圈、按里程列入第 17 名（碰撞损伤退赛）；塞恩斯第 16 名完赛，成绩注记"因造成与队友阿尔本的碰撞被处以 10 秒罚时"。同场另有三人因黄旗违规被罚——这场赞德沃特之之混乱可见一斑（含一次红旗重启）。',
      quote:
        '"Carlos Sainz\'s classified position reflects a 10-second time penalty for causing a collision with team mate Alexander Albon." —— FIA Document 64 转引',
      tone: '官方记录',
      source: {
        label: 'Coffee Corner Motorsport',
        url: 'https://coffeecornermotorsport.com/dutch-grand-prix-2026-race-report/',
        date: '2026-08-24',
      },
    },
  ],
  fiaDecision: {
    docName: '干事决定 – 55 号车 – 造成碰撞（2026 荷兰大奖赛，FIA 赛事干事决定；媒体转述，非逐字原文）',
    original:
      '"Carlos Sainz\'s classified position reflects a 10-second time penalty for causing a collision with team mate Alexander Albon." —— FIA 第 64 号成绩文件（Coffee Corner Motorsport 转引）；Motorsport.com 称此为"direct/straightforward 10-second penalty"（径直的 10 秒罚时），塞恩斯本人表示 "It was a fair penalty"（罚得公道）。',
    plain:
      '通俗解读：你在 1 号弯内线防守时抱死，把外线的队友撞出比赛——教科书式的"造成碰撞"，按基准罚 10 秒，没有可以从轻的情节。这次和 2025 加拿大站诺里斯撞皮亚斯特里正好相反：那次被撞的车毫发无损，"没有竞技后果"只罚 5 秒；这次阿尔本底板损毁直接退赛，后果实实在在，所以是全额 10 秒。',
    rules: [
      '为何是 10 秒而不是 5 秒：造成碰撞的基准处罚就是 10 秒；从轻到 5 秒需要"无直接明显的竞技后果"（如 2025 加拿大站），而本站阿尔本因碰撞损伤退赛，不符合从轻条件。',
      '实际影响约等于零：塞恩斯本来就在积分区外，10 秒罚时后仍列第 16 名完赛——罚单是象征性的，真正的损失由阿尔本和车队承担。',
      '队友相撞的追加处理在队内：干事只按规则处罚；车队层面，两人刚续约 2027，双方第一时间互相道歉，车队选择"作为团队向前看"，没有进一步的内部处罚见诸报道。',
    ],
    sources: [
      {
        label: 'Motorsport.com（处罚与塞恩斯回应）',
        url: 'https://www.motorsport.com/f1/news/carlos-sainz-explains-fair-penalty-for-alex-albon-contact-the-worst-possible-outcome/10848715/',
      },
      {
        label: 'Coffee Corner Motorsport（FIA 第 64 号文件转引）',
        url: 'https://coffeecornermotorsport.com/dutch-grand-prix-2026-race-report/',
      },
    ],
  },
  telemetryNotes: {
    zoneLabel: '1 号弯 Tarzan（塔赞弯）刹车区',
    window: [10, 910],
    contactZone: [340, 520],
    lapWindow: [52, 68],
    narrative:
      '第 65 圈塔赞弯：塞恩斯（深蓝，内线防守）从约 257 km/h 重刹，车速却一路砸到 39 km/h——远低于该弯的正常弯心速度，这就是前轮抱死后"直线冲出"的轨迹；外线进攻的阿尔本（浅蓝）被迫跟着急刹到 32 km/h，几乎停稳。红区内两台威廉姆斯先后"刹停相会"，接触造成阿尔本底板损毁：他撑完这一圈（1:33，慢了 15 秒），下一圈进站退赛；塞恩斯继续比赛，第 16 名完赛。',
    caveat:
      '遥测为等距采样插值后的公开计时数据，不含悬挂与轮胎传感器；"压到弯心内侧颠簸导致抱死"来自塞恩斯本人的赛后供述，数据能确认的是：两人异常低的弯心速度，以及此后截然不同的命运。',
  },
  complete: true,
};
