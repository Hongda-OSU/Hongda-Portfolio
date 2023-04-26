import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const sections = [
  'Education',
  'Experience',
  'References',
];

const sectionRef = {
  Education: '教育经历',
  Experience: '项目经验',
  References: '简历和推荐信',
};

const Resume = () => (
  <Main
    title="Resume"
    description="Learn about Hongda Lin's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">个人简历</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sectionRef[sec]}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <References />
    </article>
  </Main>
);

export default Resume;
