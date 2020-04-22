import React from 'react';
import { Link } from 'gatsby';

import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.mainNav}>
    <Link to="/" aria-label="home" className={styles.navbarLogo}></Link>
    <Link to="/" className={styles.navbarLeftText}>
      <h1>COVID-19</h1>
      <h2>A Frontline Guide for Local Decision-Makers</h2>
    </Link>
    <div className={styles.navbarRight}>
      <ul>
        {/*<li><a target="_blank" href="#">Resources</a></li>*/}
        <li><Link to="/contributors.html">contributors</Link></li>
        <li><a href="mailto:COVIDLocal@nti.org?subject=COVID-Local%20Site%20Feedback">contact us</a></li>
      </ul>
    </div>
  </nav>
)

export default Nav;