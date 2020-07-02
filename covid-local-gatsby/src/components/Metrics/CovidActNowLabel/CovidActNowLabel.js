import React from 'react'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

import styles from './CovidActNowLabel.module.scss'

const CovidActNowLabel = props => {
  return (
    <Tippy
      content={'To assess your progress'}
      allowHTML={true}
      maxWidth={'30rem'}
      theme={'light'}
      placement={'bottom'}
      offset={[-30, 10]}
    >
      <a
        href="https://covidactnow.org/"
        target="blank"
        rel="noopener noreferrer"
        className={styles.covidActNow}
        style={props.style}
      >
        <img
          src="/assets/images/logos/CovidActNow/CAN_URL_no_background.png"
          alt="CovidActNow Logo"
        />
      </a>
    </Tippy>
  )
}

export default CovidActNowLabel
