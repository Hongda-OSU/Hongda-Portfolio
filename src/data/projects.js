const data = [
  {
    title: 'Karma',
    subtitle: 'CSE 5912 Capstone - Game Design and Development',
    image: '/images/projects/Karma.gif',
    link: 'https://polygamers.itch.io/karma',
    video: ['https://www.youtube.com/embed/uDoa5-KkLkE', 'https://www.youtube.com/embed/JR4xMvp29VI'],
    dateBegin: '2022-1-05',
    dateEnd: '2022-5-13',
    desc:
      'Karma 是一款独特融合了第一人称射击和角色扮演元素的游戏，让玩家沉浸在一个激动人心的游戏体验中。它提供了多个地图供玩家探索，技能树供玩家逐步进阶，以及可自定义的元素，增加了角色发展的深度。',
  },
  {
    title: 'Buckeye Schedule',
    subtitle: 'CSE 5236 - Mobile Application Development',
    image: '/images/projects/Buckeye.gif',
    link: 'https://github.com/Hongda-OSU/CSE5236-Buckeye-Schedule',
    video: 'https://www.youtube.com/embed/yEP96enlJ8k',
    dateBegin: '2022-09-03',
    dateEnd: '2022-12-04',
    desc:
      'Buckeye Schedule 是一款 Android 应用程序，旨在为大学生提供高效的日程安排。它具有基于照片的日程创建和日程通知等功能，提供了一种简化的方式来管理和记住日程安排。',
  },
  {
    title: 'Affordable Health Access Inc.',
    subtitle: 'CSE 5911 Capstone - Software Applications',
    image: '/images/projects/Affordable.png',
    link: 'https://drive.google.com/drive/folders/1aOcFvLyJfXS00N2vea8rMn65GUg4lIf5?usp=sharing',
    video: 'https://www.youtube.com/watch?v=l78ShugcO8w&t=52s',
    dateBegin: '2023-01-18',
    dateEnd: '2023-04-20',
    desc:
      'Affordable Health Access Inc. 是一个致力于推广和分发医疗保健拨款的非营利组织。作为学生开发者，我们的目标是改进前端用户界面，确保拨款功能的可靠性，并创建全面的测试套件。我们的努力提高了平台的可靠性和可用性，使其成为公众使用的强大工具。',
  },
  {
    title: 'Endless Runner',
    subtitle: 'CSE 3541 - Computer Game and Animation',
    image: '/images/projects/Runner.gif',
    link: 'https://github.com/Hongda-OSU/CSE3541-Endless-Runner',
    video: 'https://www.youtube.com/embed/J23FXJWjgFQ&t=36s',
    dateBegin: '2021-11-20',
    dateEnd: '2021-12-05',
    desc:
      'Endless Runner 是一款动感十足的跑酷游戏，以引人入胜的动画和无限生成的关卡设计为特色。在这款游戏中，玩家努力尽可能地穿越，沿途收集物品并避开障碍物，为游戏玩法增添了一层复杂性和刺激感。',
  },
  {
    title: 'AI Agents and Steering',
    subtitle: 'CSE 3541 - Computer Game and Animation',
    image: '/images/projects/AI.gif',
    link: 'https://www.youtube.com/embed/9Ru5QHfA88Q',
    video: 'https://www.youtube.com/embed/9Ru5QHfA88Q',
    dateBegin: '2021-10-15',
    dateEnd: '2021-10-25',
    desc:
      '这个项目是行为驱动动画技术的研究，实现了像空间代理视觉和导航行为这样的高级算法。游戏场景涉及一个捕食者（蓝色）追逐猎物（红色），而猎物则试图在不被捕捉的情况下达到目标（红色方块）。这种互动创造了一个引人入胜和动态的游戏环境。',
  },
  {
    title: 'The Legend of Zelda (Clone)',
    subtitle: 'CSE 3902 Project - Interactive Systems',
    image: '/images/projects/Zelda.gif',
    link: 'https://github.com/Hongda-OSU/CSE-3902-Team-JellyLake-Zelda-',
    video: ['https://www.youtube.com/embed/qvB6drBRjdc', 'https://www.youtube.com/watch?v=ux-Na31vBi0&t=22s'],
    dateBegin: '2021-08-31',
    dateEnd: '2022-12-13',
    desc:
      '重新创作了经典1986年游戏《塞尔达传说》中标志性的第一层地牢，包括10种独特的玩家能力，15种不同的敌人和25个独特的物品。此外，还实现了一种程序化地牢生成算法，以延长游戏的可玩性。',
  },
  {
    title: 'Medical Image Helper',
    subtitle: 'CSE 5546 - Virtual Reality',
    image: '/images/projects/Helper.gif',
    link: 'https://github.com/Hongda-OSU/CSE-5546-AR-Eye-Tracking',
    video: 'https://www.youtube.com/embed/wyJaXIFSe5I&t=88s',
    dateBegin: '2022-4-25',
    dateEnd: '2022-5-08',
    desc:
      '开发了一种新颖的工具，旨在通过跟踪病理学家在检查医学图像时的眼动轨迹来帮助他们。利用 Dlib 和 CV2，该应用记录注视的方向并检测眨眼。当检测到眨眼时，使用 Unity 将图像沿注视方向进行移动，从而提供直观的导航方法。',
  },
  {
    title: 'CraftMine (Mincraft Clone)',
    subtitle: 'Personal Project',
    link: 'https://github.com/Hongda-OSU/CraftMine',
    image: '/images/projects/CraftMine.gif',
    dateBegin: '2021-10-20',
    dateEnd: '2022-01-20',
    desc:
      'CraftMine 是一个学习项目，旨在学习如何制作类似《Minecraft》那样基于体素的世界。该项目的关键组成部分包括应用 Perlin 噪声进行程序化地形生成，以及开发基本的玩家交互功能，如导航和建造系统。',
  },
  {
    title: 'L-System Generator',
    subtitle: 'CSE 5542 - Realtime Rendering',
    link: 'https://github.com/Hongda-OSU/CSE5542-Realtime-Rendering',
    image: '/images/projects/LSystem.gif',
    dateBegin: '2022-09-23',
    dateEnd: '2022-10-15',
    desc:
      '在这个项目中，我构建了一个基于 OpenGL 的程序来创建 2D 植物生长动画。所使用的基本概念是L系统（Lindenmayer system）- 一种并行重写系统和一种形式语法。生成的应用程序可以可视化类似分形的模式，模拟植物生长，并搭配一个天空盒以实现沉浸式渲染。',
  },
  {
    title: 'Data Visualization',
    subtitle: 'CSE 5544 - Data Visualization',
    link: 'https://github.com/Hongda-OSU/CSE5544-Data-Visualization',
    image: '/images/projects/D3.gif',
    dateBegin: '2022-09-03',
    dateEnd: '2022-12-04',
    desc:
      '该项目涉及使用 D3.js 和 Pandas 来有效地可视化能源数据。目标是设计和开发可视化工具，以帮助直观地理解和发现数据集中的模式和见解。（还有很多其他可视化项目）',
  },
];

export default data;
