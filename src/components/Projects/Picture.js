import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const handleImage = (data) => (
  <a href={data.link} className="image">
    <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
  </a>
);

const Picture = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        {data.link.length === 0 ? <h3>{data.title}</h3> : <h3><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></h3>}
        <time className="published">{dayjs(data.dateBegin).format('MMMM, YYYY')} - {data.dateEnd.length === 0 ? 'Present' : dayjs(data.dateEnd).format('MMMM, YYYY')}</time>
      </header>
      { handleImage(data)}
      <div className="description">
        {data.title === 'Karma' ? <p>{data.desc} <a href="https://www.youtube.com/watch?v=JR4xMvp29VI&t=816s" target="_blank" rel="noopener noreferrer">(Demo Gameplay)</a>.</p> : <p>{data.desc}</p>}
      </div>
    </article>
  </div>
);

Picture.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    video: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    image: PropTypes.string.isRequired,
    dateBegin: PropTypes.string.isRequired,
    dateEnd: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Picture;
