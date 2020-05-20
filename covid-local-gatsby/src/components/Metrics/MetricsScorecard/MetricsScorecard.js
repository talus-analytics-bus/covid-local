import React from 'react'

import Checkbox from './MetricsCheckbox/MetricsCheckbox'

import scorecardContent from './scorecardContent.js'

import styles from './MetricsScorecard.module.scss'

import infectionIcon from '../icons/infectionicon.svg'
import testingIcon from '../icons/testingicon.svg'
import caseIcon from '../icons/caseicon.svg'
import healthcareIcon from '../icons/healthcareicon.svg'
import protectingIcon from '../icons/protectingicon.svg'
import lockIcon from '../icons/lockicon.svg'

const icons = [
  infectionIcon,
  testingIcon,
  caseIcon,
  healthcareIcon,
  protectingIcon,
]

const MetricsScorecard = props => {
  // const onChangeCheckbox = e => {
  //   e.preventDefault()
  //
  // }
  const createCheckboxElements = phases =>
    phases.map(phase => (
      <Checkbox key={phase.text}>
        <span
          dangerouslySetInnerHTML={{
            __html: phase.text.replace(/-/g, '&#8209;'),
          }}
        ></span>
      </Checkbox>
    ))

  const scorecardMetricsElements = content =>
    content.map((row, index) => (
      <div key={row.metric} className={styles.metric}>
        <header>
          <img src={icons[index]} alt={'Icon for ' + row.metric} />
          <span
            dangerouslySetInnerHTML={{
              __html: row.metric.replace(/-/g, '&#8209;'),
            }}
          ></span>
        </header>
        <div className={styles.phaseOne}>
          Maximum <br /> social-distancing
        </div>
        {row.phases.map((phase, index) => (
          <div key={index} className={styles.phase}>
            {createCheckboxElements(phase)}
          </div>
        ))}
      </div>
    ))

  const breakoutPhases = [0, 1, 2]
  const breakoutMetricsElements = breakoutPhases.map(phaseNumber => {
    const phaseContent = scorecardContent.map(row => ({
      ...row,
      phases: [row.phases[phaseNumber]],
    }))

    return (
      <article key={phaseNumber} className={styles.scorecard}>
        <div className={styles.metricHeader}>
          <header>
            <span>KEY METRICS</span>
          </header>
          <div className={styles.phase}>
            <span>
              Thresholds To Enter{' '}
              <strong>{'Phase ' + (phaseNumber + 2)}</strong>
            </span>
          </div>
          <div className={styles.status}></div>
        </div>
        {phaseContent.map((row, index) => (
          <div key={row.metric} className={styles.metric}>
            <header>
              <img src={icons[index]} alt={'Icon for ' + row.metric} />
              <span
                dangerouslySetInnerHTML={{
                  __html: row.metric.replace(/-/g, '&#8209;'),
                }}
              ></span>
            </header>
            {row.phases.map((phase, index) => (
              <div key={index} className={styles.phase}>
                {createCheckboxElements(phase)}
              </div>
            ))}
            <div className={styles.status}>
              <select defaultValue="unselected">
                <option value="unselected">Define Metric Status</option>
                <option value="notMet">Not Met</option>
                <option value="complete">Complete</option>
              </select>
            </div>
          </div>
        ))}
      </article>
    )
  })

  return (
    <>
      {props.layout === 'grid' && (
        <article className={styles.scorecard}>
          <div className={styles.metricHeader}>
            <header>
              <span>KEY METRICS</span>
            </header>
            <div className={styles.phaseOne}>
              <img src={lockIcon} alt="Phase 1 icon" />
              <strong>Phase 1</strong>
            </div>
            <div className={styles.phase}>
              <span>
                Thresholds To Enter <strong>Phase 2</strong>
              </span>
            </div>
            <div className={styles.phase}>
              <span>
                Thresholds To Enter <strong>Phase 3</strong>
              </span>
            </div>
            <div className={styles.phase}>
              <span>
                Thresholds To Enter <strong>Phase 4</strong>
              </span>
            </div>
          </div>
          {scorecardMetricsElements(scorecardContent)}
        </article>
      )}
      {props.layout === 'breakout' && <>{breakoutMetricsElements}</>}
    </>
  )
}

export default MetricsScorecard
