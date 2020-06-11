import React from 'react'
import { Link } from 'gatsby'

import NavDropdown from './NavDropdown/NavDropdown'

import styles from './Nav.module.scss'

const Nav = () => {
  const navbarRightContent = React.useRef()
  // const subMenuContent = React.useRef()

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)
  // const [subMenuOpen, setSubMenuOpen] = React.useState(false)

  const [dropHiderStyle, setDropHiderStyle] = React.useState({
    height: 0,
    padding: '0 15px',
  })

  //   const [subMenuHiderStyle, setSubMenuHiderStyle] = React.useState({
  //     height: 0,
  //     padding: '0 15px',
  //   })
  //
  //   const [subMenuButtonStyle, setSubMenuButtonStyle] = React.useState({
  //     display: 'block',
  //   })

  React.useEffect(() => {
    // Mobile menu or desktop menu
    // if (window.innerWidth < 1170) {
    //   setSubMenuHiderStyle({ height: 'auto', padding: 0, marginBottom: 0 })
    //   setSubMenuButtonStyle({ display: 'none' })
    // }
    // Switch between mobile and desktop menus
    // window.addEventListener('resize', () => {
    //   if ((window.innerWidth < 1170) & (subMenuHiderStyle.height !== 'auto')) {
    //     setSubMenuHiderStyle({ height: 'auto', padding: 0, marginBottom: 0 })
    //     setSubMenuButtonStyle({ display: 'none' })
    //   } else if (subMenuHiderStyle.height !== 'block') {
    //     setDropHiderStyle({ height: 0, padding: '0 15px' })
    // setSubMenuButtonStyle({ display: 'block' })
    // if (subMenuOpen) {
    //   setSubMenuHiderStyle({
    //     height: subMenuContent.current.offsetHeight + 30,
    //     padding: 15,
    //   })
    // } else {
    //   setSubMenuHiderStyle({ height: 0, padding: '0 15px' })
    // }
    // }
    // })
  }, [])

  const toggleNav = () => {
    if (mobileNavOpen) {
      setMobileNavOpen(false)
      setDropHiderStyle({ height: 0, padding: '0 15px' })
    } else {
      setMobileNavOpen(true)
      setDropHiderStyle({
        height: navbarRightContent.current.offsetHeight + 30,
        padding: 15,
      })
    }
  }

  // const toggleSubmenu = () => {
  //   if (window.innerWidth > 1170) {
  //     if (subMenuOpen) {
  //       setSubMenuOpen(false)
  //       setSubMenuHiderStyle({ height: 0, padding: '0 15px' })
  //     } else {
  //       setSubMenuOpen(true)
  //       setSubMenuHiderStyle({
  //         height: subMenuContent.current.offsetHeight + 30,
  //         padding: 15,
  //       })
  //     }
  //   }
  // }

  return (
    <nav className={styles.mainNav}>
      <Link to="/" aria-label="home" className={styles.navbarLogo}></Link>
      <Link to="/" className={styles.navbarLeftText}>
        <h1>
          <strong>COVID</strong> LOCAL
        </h1>
        {/* <h2>A Frontline Guide for Local Decision-Makers</h2> */}
      </Link>

      <div className={styles.navbarRightHider} style={dropHiderStyle}>
        <div className={styles.navbarRight} ref={navbarRightContent}>
          <ul>
            <li>
              <Link activeClassName={styles.active} to="/metrics/">
                Metrics
              </Link>
            </li>
            <NavDropdown name={'Guide'}>
              <li>
                <Link activeClassName={styles.active} to="/guide/">
                  US Guide
                </Link>
              </li>
              <li>
                <Link activeClassName={styles.active} to="/intl-guide/">
                  International&nbsp;Guide
                </Link>
              </li>
            </NavDropdown>
            <NavDropdown name={'More'}>
              <li>
                <Link activeClassName={styles.active} to="/about/">
                  About
                </Link>
              </li>
              <li>
                <Link activeClassName={styles.active} to="/resources/">
                  Resources
                </Link>
              </li>
              <li>
                <Link activeClassName={styles.active} to="/blog/">
                  Blog
                </Link>
              </li>
            </NavDropdown>
            <li>
              <Link activeClassName={styles.active} to="/contact/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <button
        className={styles.menuButton}
        onClick={toggleNav}
        aria-label="Menu"
      ></button>
    </nav>
  )
}

export default Nav
