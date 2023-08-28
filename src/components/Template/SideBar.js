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
        <img src={`${PUBLIC_URL}/images/Meee.jpg`} alt="" />
      </Link>
      <header>
        <h2>林鸿达</h2>
        <p><a href="mailto:linhongda77@gmail.com">linhongda77@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>简介</h2>
      <p><font size="+2">嗨! </font>
        我是林鸿达，一名西北大学计算机专业研究生。我对我对探索 Web3D、AI 助手开发以及其他新兴技术感兴趣。
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
