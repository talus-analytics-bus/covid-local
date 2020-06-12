import React, { useState, useRef, Children } from 'react'

import styles from './DropDownLink.module.scss'

const NavDropdown = props => {
  const children = Children.toArray(props.children)

  const subMenuContent = useRef()
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  const [subMenuHiderStyle, setSubMenuHiderStyle] = useState({
    height: 0,
    padding: '0 15px',
  })

  // const [subMenuButtonStyle, setSubMenuButtonStyle] = useState({
  //   display: 'block',
  // })

  //   React.useEffect(() => {
  //     if (window.innerWidth < 1170) {
  //       setSubMenuHiderStyle({ height: 'auto', padding: 0, marginBottom: 0 })
  //       setSubMenuButtonStyle({ display: 'none' })
  //     }
  //
  //     // Switch between mobile and desktop menus
  //     window.addEventListener('resize', () => {
  //       if ((window.innerWidth < 1170) & (subMenuHiderStyle.height !== 'auto')) {
  //         setSubMenuHiderStyle({ height: 'auto', padding: 0, marginBottom: 0 })
  //         setSubMenuButtonStyle({ display: 'none' })
  //       } else if (subMenuHiderStyle.height !== 'block') {
  //         // setDropHiderStyle({ height: 0, padding: '0 15px' })
  //         setSubMenuButtonStyle({ display: 'block' })
  //         if (subMenuOpen) {
  //           setSubMenuHiderStyle({
  //             height: subMenuContent.current.offsetHeight + 30,
  //             padding: 15,
  //           })
  //         } else {
  //           setSubMenuHiderStyle({ height: 0, padding: '0 15px' })
  //         }
  //       }
  //     })
  //   }, [])

  const [touch, setTouch] = React.useState(false)

  const toggleOnMouse = () => {
    if (!touch) {
      toggleSubmenu()
    }
  }

  const toggleOnTouch = () => {
    if (!touch) {
      setTouch(true)
    }
    if (!subMenuOpen) {
      toggleSubmenu()
    }
  }

  const toggleSubmenu = () => {
    // if (window.innerWidth > 1170) {
    if (subMenuOpen) {
      setSubMenuOpen(false)
      setSubMenuHiderStyle({ height: 0, padding: '0 15px', marginLeft: -10 })
    } else {
      setSubMenuOpen(true)
      setSubMenuHiderStyle({
        height: subMenuContent.current.offsetHeight + 30,
        padding: 15,
        // paddingTop: 3,
        marginTop: -12,
        marginLeft: -10,
      })
    }
    // }
  }

  return (
    <div
      className={styles.subMenu + ' ' + props.className}
      onMouseEnter={toggleOnMouse}
      onMouseLeave={toggleSubmenu}
      onTouchStart={toggleOnTouch}
    >
      {children[0]}
      <div className={styles.subMenuHider} style={subMenuHiderStyle}>
        <div className={styles.subMenuContent} ref={subMenuContent}>
          {children.slice(1)}
        </div>
      </div>
    </div>
  )
}

export default NavDropdown
