import React from 'react';
import { Link } from 'react-router-dom';

const onButtonClick = (fileName) => {
  fetch(fileName).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = fileName;
      alink.click();
    });
  });
};

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h3>
        <Link to="/resume" onClick={() => onButtonClick('Resume.pdf')}> 个人简历 </Link> |
        <Link to="/resume" onClick={() => onButtonClick('Recommendation letter for Hongda Lin.pdf')}> 推荐信 </Link>
      </h3>
    </div>
  </div>
);

export default References;
