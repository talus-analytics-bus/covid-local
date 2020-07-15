import React, { useState, useRef } from 'react'

import styles from './NavDropdown.module.scss'

const NavDropdown = props => {
  const subMenuContent = useRef()
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  const [subMenuHiderStyle, setSubMenuHiderStyle] = useState({
    height: 0,
    padding: '0 15px',
  })

  const [subMenuButtonStyle, setSubMenuButtonStyle] = useState({
    display: 'block',
  })

  React.useEffect(() => {
    if (window.innerWidth < 1170) {
      setSubMenuHiderStyle({ height: 'auto', padding: 0, marginBottom: 0 })
      setSubMenuButtonStyle({ display: 'none' })
    }

    // Switch between mobile and desktop menus
    window.addEventListener('resize', () => {
      if ((window.innerWidth < 1170) & (subMenuHiderStyle.height !== 'auto')) {
        setSubMenuHiderStyle({ height: 'auto', padding: 0, marginBottom: 0 })
        setSubMenuButtonStyle({ display: 'none' })
      } else if (subMenuHiderStyle.height !== 'block') {
        // setDropHiderStyle({ height: 0, padding: '0 15px' })
        setSubMenuButtonStyle({ display: 'block' })
        if (subMenuOpen) {
          setSubMenuHiderStyle({
            height: subMenuContent.current.offsetHeight + 30,
            padding: 15,
          })
        } else {
          setSubMenuHiderStyle({ height: 0, padding: '0 15px' })
        }
      }
    })
  }, [])

  const toggleSubmenu = () => {
    if (window.innerWidth > 1170) {
      if (subMenuOpen) {
        setSubMenuOpen(false)
        setSubMenuHiderStyle({ height: 0, padding: '0 15px' })
      } else {
        setSubMenuOpen(true)
        setSubMenuHiderStyle({
          height: subMenuContent.current.offsetHeight + 30,
          padding: 15,
        })
      }
    }
  }

  return (
    <div
      className={styles.subMenu}
      onMouseEnter={toggleSubmenu}
      onMouseLeave={toggleSubmenu}
    >
      <li style={subMenuButtonStyle}>
        <button
          onClick={e => {
            e.preventDefault()
          }}
          className={styles.subMenuButton}
        >
          {props.name} &#9660;
        </button>
      </li>
      <div className={styles.subMenuHider} style={subMenuHiderStyle}>
        <div className={styles.subMenuContent} ref={subMenuContent}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default NavDropdown
