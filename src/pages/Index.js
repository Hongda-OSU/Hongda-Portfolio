import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="林鸿达的个人网站。"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">关于本站</Link></h2>
          <p>
            由 HTML、CSS 和 JavaScript 开发的 React 个人网站。
          </p>
        </div>
      </header>
      <p>欢迎来到我的网站！<br />
        您可以浏览我的<Link to="/about">简介</Link>，
        <Link to="/resume">个人简历</Link>，
        <Link to="/projects">项目经历</Link>，
        <Link to="/stats">统计</Link>
        或者<Link to="/contact">联系</Link>我。
      </p>
    </article>
  </Main>
);

export default Index;
