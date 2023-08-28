const positions = [
  {
    title: 'Pawstopia',
    position: '初创公司全栈工程师实习',
    link: '',
    daterange: '五月 2023 - 现在（支持 EVL 证书）',
    points: [
      '参与了 Pawstopia 的开发，一个在宠物社交网络领域进行创新的初创公司',
      '使用前端工具如 ReactJS 和 Redux，以及后端解决方案如 Azure 和腾讯云，为 Pawstopia 的全栈开发做出了贡献。',
      '实现了各种功能，包括宠物主人分享宠物照片、录制宠物叫声，并通过爪印扫描建立数字身份的功能。',
      '受到微信朋友圈和微博发现页的启发，构建了一个以宠物为中心的社区。',
    ],
  },
  {
    title: 'Affordable Health Access Inc.',
    position: '毕设项目团队组长',
    link: 'https://www.youtube.com/watch?v=l78ShugcO8w&t=52s',
    daterange: '一月 2023 - 四月 2023',
    points: [
      '参与了非营利性医疗基金项目 Affordable 的开发。',
      '通过输入检查和动态密码创建反馈改进了登录和注册页面。',
      '解决了电子邮件验证问题，确保在 AWS Cognito 和本地 MySQL 数据库上都正确存储和更新了已验证的电子邮件。',
      '设计了 UI 测试脚本以模拟用户申请健康福利，同时监视 Stripe 方面的正确转账。',
    ],
  },
  {
    title: 'Buckeye Schedule',
    position: '个人项目',
    link: 'https://github.com/Hongda-OSU/CSE5236-Buckeye-Schedule',
    daterange: '九月 2022 - 十二月 2022',
    points: [
      '开发了一款 Android 应用程序，Buckeye Schedule，以帮助大学生维护他们的日程。',
      '利用 MVVM 设计模式、Room 数据库和适配器模式进行高效的本地数据持久化和 UI 控制。',
      '利用如 Firestore 的 NoSQL 数据库在云端保存用户数据。',
      '启用手机内部服务，包括相机功能和通知服务。',
      '结合非功能性需求，如用户权限检查、多语言支持和UI测试，以提升用户体验和应用性能。',
    ],
  },
  {
    title: 'HireEZ',
    position: '全栈工程师实习',
    link: 'https://hireez.com/',
    daterange: '五月 2022 - 八月 2022',
    points: [
      '参与开发事件跟踪系统，用来帮助 BI 团队分析网站内的用户偏好和活动。',
      '使用 Playwright 为事件跟踪系统设计了一个自动化的 UI 测试框架。',
      '为 BI 团队开发了一个 Jira 工单自动化的 Web 应用，能够一次性完成工单的创建和推送。',
      '通过从 Excel 转向 Jira 进行报告工具的转变，将 BI 团队的票据报告时间减少了40%，从而提高了团队的效率。',
    ],
  },
  {
    title: 'Karma',
    position: '毕设项目团队组长',
    link: 'https://polygamers.itch.io/karma',
    daterange: '一月 2022 - 五月 2022',
    points: [
      '在游戏开发毕业设计项目中制作一个名为 Karma 的 FPS & ARPG 游戏。',
      '担任敏捷开发的 Scrum Master，确保通过时间盒展示进行双周进度沟通。',
      '开发了核心游戏功能，包括 FPS 系统、物品栏系统、玩家控制、敌人 AI 以及动画系统。',
      '在学期顶尖展示投票中，从七个班级团队中荣获 "The Best Game" 和 "The Most Polished Game" 奖项。',
    ],
  },
  {
    title: 'Minecraft (Clone)',
    position: '个人项目',
    link: 'https://github.com/Hongda-OSU/CraftMine',
    daterange: '十一月 2021 - 十二月 2021',
    points: [
      '作为一个自我驱动的学习项目，开发了一个类似于 Minecraft 的基于体素的世界。',
      '利用了 3D 属性、纹理映射、Perlin 噪声和数据序列化技术，为复杂的世界生成提供支持。',
      '制作了基本的玩家交互，包括导航系统和建筑系统，丰富了用户体验。',
    ],
  },
  {
    title: 'Endless Runner',
    position: '团队项目组长',
    link: 'https://github.com/Hongda-OSU/CSE3541-Endless-Runner',
    daterange: '十一月 2021 - 十二月 2021',
    points: [
      '利用 Unity 设计和开发了一款吸引人的无限跑酷游戏。',
      '通过应用 Unity 的新输入系统、动画系统和 Cinemachine 来增强游戏体验。',
      '编程实现了动态关卡生成功能，包括环境变化和障碍物的放置。',
    ],
  },
  {
    title: 'Legend of Zelda 1986 (Clone)',
    position: '团队项目成员',
    link: 'https://github.com/Hongda-OSU/CSE-3902-Team-JellyLake-Zelda-',
    daterange: '八月 2021 - 十二月 2021',
    points: [
      '重制了经典游戏《塞尔达传说1986》的完整第一关。',
      '利用状态、装饰器和单例设计模式设计了各种敌人和玩家能力。',
      '通过编程实现了一个过程生成的地牢，以提高游戏的可玩性。',
    ],
  },
];

export default positions;
