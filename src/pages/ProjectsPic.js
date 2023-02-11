import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Pic from '../components/Projects/Pic';
import data from '../data/projects';

const ProjectsPic = () => (
  <Main
    title="ProjectsPic"
    description="Learn about Hongda Lin's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of my personal projects that I&apos;m proud of</p>
        </div>
      </header>
      {data.map((project) => (
        <Pic
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default ProjectsPic;
