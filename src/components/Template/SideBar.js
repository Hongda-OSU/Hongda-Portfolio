import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/Mee.jpg`} alt="" />
      </Link>
      <header>
        <h2>林鸿达</h2>
        <p><a href="mailto:linhongda77@gmail.com">linhongda77@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>简介</h2>
      <p><font size="+2">嗨! </font>
        我是林鸿达，一名西北大学计算机专业研究生。我对软件工程、计算机图形学和游戏开发抱有兴趣。
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">了解更多</Link> : <Link to="/about" className="button">简介</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; <Link to="/">林鸿达的个人网站</Link> <FontAwesomeIcon icon={faHeart} beat style={{ color: '#f50000' }} /> 维运 2022 - 2023.
      </p>
    </section>
  </section>
);

export default SideBar;
