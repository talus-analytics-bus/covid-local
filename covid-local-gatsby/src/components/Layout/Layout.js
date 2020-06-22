import React from 'react'

import Nav from '../../components/Nav/Nav'
import AMPWrapper from '../AMPWrapper/AMPWrapper'

import './Layout.css'
import './Fonts.css'

const Layout = props => {
  const [animationStyle, setAnimationStyle] = React.useState({
    transform: 'translateX(0vw)',
  })

  return (
    <AMPWrapper
      animationStyle={animationStyle}
      setAnimationStyle={setAnimationStyle}
    >
      <Nav setAnimationStyle={setAnimationStyle} />
      <main>{props.children}</main>
    </AMPWrapper>
  )
}

export default Layout
