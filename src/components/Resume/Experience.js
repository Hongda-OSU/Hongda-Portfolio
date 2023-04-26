import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>项目经验</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.title}
      />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
