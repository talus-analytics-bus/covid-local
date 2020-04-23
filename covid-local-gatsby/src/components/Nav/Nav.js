import React from 'react';
import { Link } from 'gatsby';

import styles from './Nav.module.scss';

const Nav = () => {

  const navbarRightContent = React.useRef();
  const [dropHiderStyle, setDropHiderStyle] = React.useState({ height: 0, padding: '0 15px' });

  const toggleNav = () => {
    if (dropHiderStyle.height === 0) {
      setDropHiderStyle({ 
        height: navbarRightContent.current.offsetHeight + 30, 
        padding: 15,
      });
    } else {
      setDropHiderStyle({ height: 0, padding: '0 15px' });
    }
  };

  return (
    <nav className={styles.mainNav}>
      <Link to="/" aria-label="home" className={styles.navbarLogo}></Link>
      <Link to="/" className={styles.navbarLeftText}>
        <h1>COVID-19</h1>
        <h2>A Frontline Guide for Local Decision-Makers</h2>
      </Link>

      <div className={styles.navbarRightHider} style={dropHiderStyle}>
        <div className={styles.navbarRight} ref={navbarRightContent}>
          <ul>
            <li><Link to="/">Guide</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contributors">Contributors</Link></li>
            <li><a href="mailto:COVIDLocal@nti.org?subject=COVID-Local%20Site%20Feedback">Contact&nbsp;Us</a></li>
          </ul>
        </div>
      </div>

      <button 
        className={styles.menuButton} 
        onClick={toggleNav}
      ></button>
    </nav>
  )
}

export default Nav;
