import React from 'react'
import { Link } from 'gatsby'

// import AmpNav from '../AmpNav/AmpNav'

import styles from './AMPWrapper.module.scss'

const AMPWrapper = props => {
  const closeAmp = e => {
    e.preventDefault()
    props.setAnimationStyle({
      // transform: 'translateX(0vw)',
      overflow: 'visible',
    })

    if (window.location.pathname === '/amp') {
      window.history.pushState({}, '', '/')
    }
  }

  const landingStyle = {}

  if (!props.animationStyle.transform) {
    landingStyle['overflow'] = 'hidden'
    landingStyle['height'] = '50vh'
  }

  return (
    <div className={styles.animationCrop}>
      <div className={styles.contentFrame} style={props.animationStyle}>
        {props.children}
      </div>
      <div className={styles.ampLanding} style={landingStyle}>
        <div className={styles.curtainRod}>
          <div className={styles.drapes} onClick={closeAmp}>
            <button onClick={closeAmp} aria-label="home">
              <div className={styles.backButton}></div>
              <div className={styles.navbarLogo}></div>
              <h1>
                <strong>COVID</strong> LOCAL
              </h1>
            </button>
          </div>
          <div onClick={closeAmp} className={styles.contactDrape}>
            <Link to="/contact/" className={styles.drapes}>
              Contact Us
            </Link>
          </div>
        </div>
        {/* <AmpNav {...{ closeAmp }} /> */}

        <div className={styles.ampLandingContent}>
          <div className={styles.ampHeader}>
            <div className={styles.wrapHolder}>
              <img src="/assets/images/amp.png" alt="COVID AMP Logo" />
            </div>
            <div className={styles.links}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://covidamp.org/about/doc"
              >
                Documentation
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://covidamp.org/about/amp"
              >
                About
              </a>
            </div>
          </div>
          <div className={styles.ampDescription}>
            <h3>Visualizing the impact of policies on COVID response</h3>
            <p>
              The COVID Analysis and Mapping of Policies (AMP) visualization
              tool is a comprehensive database of policies and plans to address
              the COVID-19 pandemic. Decision-makers can use COVID AMP’s
              user-friendly interface to easily identify effective policies and
              plans to reduce the impacts of the COVID-19 pandemic.
            </p>
          </div>
          <div className={styles.ampColumns}>
            <div className={styles.col}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://covidamp.org/policymaps"
              >
                <img
                  className={styles.mapImage}
                  src="/assets/images/amp-screenshots/policy-maps.png"
                  alt="Policy Maps"
                />
                <span>Policy maps</span>
              </a>
            </div>
            <div className={styles.col}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://covidamp.org/model"
              >
                <img
                  src="/assets/images/amp-screenshots/policy-model.png"
                  alt="Policy Model"
                />
                <span>Policy model</span>
              </a>
            </div>
            <div className={styles.col}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://covidamp.org/data"
              >
                <img
                  src="/assets/images/amp-screenshots/policy-database.png"
                  alt="Policy Database"
                />
                <span>Access data</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.content}>
            <a target="_blank" href="https://ghssidea.org">
              <img
                src="/assets/images/logo-title.png"
                alt="International Disease and Events Analysis"
              />
            </a>
            <a target="_blank" href="https://ghss.georgetown.edu/">
              <img
                src="/assets/images/logo-georgetown.png"
                alt="Georgetown University Center for Global Health Science and Security"
              />
            </a>
            <a
              target="_blank"
              href="http://talusanalytics.com/"
              className={styles.talusLogo}
            >
              <img
                src="/assets/images/logo-talus.png"
                alt="Talus Analytics, LLC"
              />
              <div className={styles.builtBy}>Built by</div>
            </a>
            <a target="_blank" href="https://www.nti.org/">
              <img
                src="/assets/images/nti.png"
                alt="Nuclear Threat Initiative"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AMPWrapper
