import React, { useState, useRef, Children } from 'react'

import styles from './BlueExpandBox.module.scss'

const BlueExpandBox = props => {
  const children = Children.toArray(props.children)
  const content = useRef()

  let hiderStyle = {}

  return (
    <section className={styles.main}>
      <button className={styles.firstSection}>
        {children[0]}
        {/* <div className={styles.arrow}></div> */}
      </button>
      <div style={hiderStyle}>
        <div ref={content}>{children.slice(1)}</div>
      </div>
    </section>
  )
}

export default BlueExpandBox
