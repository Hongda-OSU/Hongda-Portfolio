// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'ReactJS',
    competency: 5,
    category: ['Fullstack Development'],
  },
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Fullstack Development', 'Languages'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Fullstack Development', 'Languages'],
  },
  {
    title: 'HTML + CSS',
    competency: 5,
    category: ['Fullstack Development'],
  },
  {
    title: 'ReduxJS',
    competency: 4,
    category: ['Fullstack Development'],
  },
  {
    title: 'TaroJS',
    competency: 4,
    category: ['Fullstack Development'],
  },
  {
    title: 'Weixin Dev Tool',
    competency: 4,
    category: ['Fullstack Development'],
  },
  {
    title: 'UmiJS',
    competency: 4,
    category: ['Fullstack Development'],
  },
  {
    title: 'ASP.NET',
    competency: 3,
    category: ['Fullstack Development'],
  },
  {
    title: 'DvaJS',
    competency: 4,
    category: ['Fullstack Development'],
  },
  {
    title: 'NodeJS',
    competency: 3,
    category: ['Fullstack Development'],
  },
  {
    title: 'Playwright',
    competency: 4,
    category: ['Web Testing'],
  },
  {
    title: 'Android Studio',
    competency: 4,
    category: ['Mobile App Development'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Database'],
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Database'],
  },
  {
    title: 'Firebase/Firestore',
    competency: 3,
    category: ['Database'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'D3.js',
    competency: 4,
    category: ['Visualization'],
  },
  {
    title: 'Unity',
    competency: 4,
    category: ['Game Development'],
  },
  {
    title: 'C#',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'OpenGL',
    competency: 3,
    category: ['Game Development'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Blender',
    competency: 2,
    category: ['Game Development'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Git/Github',
    competency: 5,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#009900',
  '#515dd4',
  '#ff9900',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d11aff',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
