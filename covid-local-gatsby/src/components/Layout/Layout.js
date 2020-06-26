import React from 'react'

import Nav from '../../components/Nav/Nav'
import AMPWrapper from '../AMPWrapper/AMPWrapper'

import './Layout.css'
import './Fonts.css'

const Layout = props => {
  let initialPosition = {
    transform: 'translateX(0vw)',
  }
  if (props.ampOpen) {
    initialPosition = {
      transform: 'translateX(-100vw)',
      overflow: 'hidden',
      height: '100vh',
    }
  }

  const [animationStyle, setAnimationStyle] = React.useState(initialPosition)

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
