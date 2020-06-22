import React from 'react'

import AmpNav from '../AmpNav/AmpNav'

import styles from './AMPWrapper.module.scss'

const AMPWrapper = props => {
  const closeAmp = e => {
    e.preventDefault()
    props.setAnimationStyle({
      transform: 'translateX(0vw)',
      overflow: 'visible',
    })
  }
  return (
    <div className={styles.animationCrop}>
      <div className={styles.contentFrame} style={props.animationStyle}>
        {props.children}
      </div>
      <div className={styles.ampLanding}>
        <AmpNav {...{ closeAmp }} />

        <div className={styles.ampLandingContent}>
          <div className={styles.ampHeader}>
            <img src="/assets/images/ampLogo.svg" alt="COVID AMP Logo" />
            <div className={styles.text}>
              <h1>
                <strong>COVID</strong> AMP
              </h1>
              <h2>ANALYSIS AND MAPPING OF POLICIES</h2>
            </div>
          </div>
          <div className={styles.ampDescription}>
            <h3>
              Helping policy makers visualize the impact of policies in the
              COVID response
            </h3>
            <p>
              <strong>
                Helping local leaders assess the impact of COVID-19 response
                plans and policies{' '}
              </strong>
              The COVID Analysis and Mapping of Policies (AMP) visualization
              tool is a comprehensive database of policies and plans to address
              the COVID-19 pandemic. Decision-makers can use COVID AMP’s
              user-friendly interface to easily identify effective policies and
              plans to reduce the impacts of the COVID-19 pandemic.
            </p>
            <p>
              COVID AMP is part of the COVID-Local suite of free resources
              developed for local decision-makers who are working to keep their
              communities safe during the COVID-19 pandemic. The COVID AMP
              library includes policies and plans published by subnational
              governments or private and non-profit organizations, in addition
              to those released by national governments.
            </p>
          </div>
          <div className={styles.ampColumns}>
            <div className={styles.col}>
              <img
                src="/assets/images/amp-screenshots/global-policy-maps.png"
                alt="Global Policy Maps"
              />
              <a target="_top" href="http://localhost:3000/map">
                Policy maps
              </a>
            </div>
            <div className={styles.col}>
              <img
                src="/assets/images/amp-screenshots/policy-model.png"
                alt="Policy Model"
              />
              <a target="_top" href="http://localhost:3000/">
                Policy model
              </a>
            </div>
            <div className={styles.col}>
              <img
                src="/assets/images/amp-screenshots/policy-database.png"
                alt="Policy Database"
              />
              <a target="_top" href="http://localhost:3000/">
                Access data
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AMPWrapper
