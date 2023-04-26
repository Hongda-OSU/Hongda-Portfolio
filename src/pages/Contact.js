import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Hongda Lin via email @ lqh2646517813@163.com (work) or @ linhongda77@gmail.com (personal)"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">与我联系</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>欢迎您与我取得联系！</p>
        <ul>
          <li>微信: hdlin52</li>
          <li>手机: 614-537-7582</li>
          <li>邮箱: linhongda77@gmail.com </li>
        </ul>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
