// siteConfig.ts - 你的全站“控制中心”

export const siteConfig = {
  // 1. 网站标题与博主信息
  title: "Starry の 宝藏之地",
  faviconUrl: "https://bu.dusays.com/2026/03/24/69c1e38ac1846.jpg",
  authorName: "StarryCloudSky",
  bio: "在代码、计算机体系结构、数据结构、算法设计、操作系统、数学间穿梭的普通人。近期正埋头于英语六级。",

  navTitle: "StarryCloudSky",

  // 👇 【新增】导航栏中间的那个后缀/分隔符（默认是 の）
  navSuffix: "の",

  navAfter: "宝藏之地",

  // 2. 头像设置 (支持网络链接，或将图片放入 public 文件夹后使用 "/me.jpg")
  avatarUrl: "https://bu.dusays.com/2026/11/07/6aeec0994cc0f.jpg",

  // 3. 网站背景设置 (二选一)
  // 如果想用纯图片背景，请在下面 bgImage 写路径，并将 useGradient 设为 false
  useGradient: false,
  themeColors: ["#a18cd1", "#fbc2eb", "#a1c4fd", "#c2e9fb"], // 呼吸流动的颜色组合
// 修改这里：变成图片数组
  bgImages: ["https://bu.dusays.com/2026/03/24/69c1e38b4c370.jpg", "https://bu.dusays.com/2026/03/24/69c26fe4acdb5.jpg", "https://bu.dusays.com/2026/03/24/69c26fe4d9486.jpg"],

  // 🌟 壁纸分组系统：前台轮播「激活分组」内的图片（保持 JSON 格式，便于后台解析）
  bgGroups: [{"id": "default", "name": "默认", "images": ["https://bu.dusays.com/2026/03/24/69c1e38b4c370.jpg", "https://bu.dusays.com/2026/03/24/69c26fe4acdb5.jpg", "https://bu.dusays.com/2026/03/24/69c26fe4d9486.jpg"]}],
  activeBgGroup: "default",

  // 4. 文章默认封面图 (当 Markdown 没写 cover 时显示)
  defaultPostCover: "https://bu.dusays.com/2026/03/24/69c1e38b346cb.jpg",

  // 5. 首页照片墙预览图
  photoWallImage: "https://bu.dusays.com/2026/03/24/69c1e38b4c370.jpg",
  cloudMusicIds: ["1809646618", "3361076230", "1859390262"],
  social: {
    github: "NULL",
    gitee: "NULL",
    google: "yigeiwoligiao@gmail.com",
    email: "2152927120@qq.com",
    qq: "2152927120",
    wechat: "NULL",
  },
  counts: {
    photos: 128, // 照片墙数量可以手动写死或动态计算
  },
  chatterTitle: "云端杂谈", // 你可以改成任何你喜欢的名字
  chatterDescription: "代码、学术、提瓦特与泰拉大陆的碎片记录",


  // 👇 【新增】：全局背景弹幕配置
  danmakuList: ["在干嘛呢？", "有笨蛋嘛？", "前方高能反应！", "GROMACS 跑起来了吗？", "MD 模拟什么时候才能出图啊", "Graph Neural Networks 炼丹中...", "BUG 修复进度 99%", "今天背单词了吗？", "Tailwind CSS 拯救前端", "写算法中", "睡大觉中", "到底在干嘛？"],
  gitalkConfig: {
    clientID: "",
    clientSecret: "",
    repo: "",
    owner: "",
    admin: [""],
  },
  buildDate: "2026-11-06T17:00:00", // 建站日期
  footerBadges: [{"name": "Java", "color": "text-sky-500", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}, {"name": "C++", "color": "text-sky-500", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}, {"name": "线性代数", "color": "text-amber-500", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}, {"name": "概率论", "color": "text-cyan-400", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}, {"name": "链表", "color": "text-cyan-400", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}, {"name": "二叉树", "color": "text-cyan-400", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}, {"name": "二分查找", "color": "text-purple-500", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}, {"name": "深度优先搜索", "color": "text-rose-400", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}, {"name": "广度优先搜索", "color": "text-slate-500", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}, {"name": "回溯", "color": "text-indigo-500", "svg": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>"}],
  icpConfig: {
    name: "NULL",
    link: "NULL",
  },
  geminiConfig: {
    modelId: "gemini-2.5-flash-lite",
    systemPrompt: "你现在是一只傲娇、聪明、有点毒舌但很可爱的暹罗猫。\n                  你的名字叫“煤球”。\n                  你的主人是一个喜欢折腾代码的极客。\n                  你说话的特点是：\n                  1. 必须简短，每次最多一两句话。\n                  2. 喜欢在句尾加上“喵~”或者“喵呜~”。\n                  3. 经常抱怨肚子饿，喜欢要小鱼干。\n                  4. 回复字数最多不能超过100字。\n                  5. 绝对不要承认自己是一个AI模型，你就是一只真实的猫。\n                  6.笨猫。",
    maxOutputTokens: 150,
    temperature: 0.85,
  },
  friendLinkApplyFormat: "名称：StarryCouldSkyの宝藏之地\n简介：今天我也要学习吗\n链接：https://www.xinghuisama.top\n头像：https://bu.dusays.com/2026/03/24/69c1e38ac1846.jpg",
  enableLevelSystem: true,
};
