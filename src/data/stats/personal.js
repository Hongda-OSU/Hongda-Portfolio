// import React, { useState, useEffect } from 'react';

// const Age = () => {
//   const [age, setAge] = useState();

//   const tick = () => {
//     const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
//     const birthTime = new Date('2000-09-17T13:35:00');
//     setAge(((Date.now() - birthTime) / divisor).toFixed(11));
//   };

//   useEffect(() => {
//     const timer = setInterval(() => tick(), 25);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return <>{age}</>;
// };

const data = [
  // {
  //   key: 'age',
  //   label: 'Current age',
  //   value: <Age />,
  // },
  {
    key: 'major',
    label: '专业绩点（计算机）',
    value: '3.956',
  },
  {
    key: 'cumulative',
    label: '综合绩点',
    value: '3.827',
  },
  {
    key: 'leetcode',
    label: '力扣 Leetcode',
    value: 'Leetcode Master',
    link:
      'https://github.com/Hongda-OSU/Leetcode-Master',
  },
  {
    key: 'blog',
    label: '博客',
    value: '鴻鵠誌達',
    link:
      'https://hongdalin.blog',
  },
];

export default data;
