import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Picture from '../components/Projects/Picture';
import data from '../data/projects';

const Pictures = () => (
  <Main
    title="Pictures"
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
        <Picture
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Pictures;
