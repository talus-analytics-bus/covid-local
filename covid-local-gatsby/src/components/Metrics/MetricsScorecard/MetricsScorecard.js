import React from 'react'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

// import Checkbox from './MetricsCheckbox/MetricsCheckbox'

import scorecardContent from './scorecardContent.js'

import styles from './MetricsScorecard.module.scss'

import infectionIcon from '../icons/infectionicon.svg'
import testingIcon from '../icons/testingicon.svg'
import caseIcon from '../icons/caseicon.svg'
import healthcareIcon from '../icons/healthcareicon.svg'
import protectingIcon from '../icons/protectingicon.svg'
import lockIcon from '../icons/lockicon.svg'
import notMetIcon from '../icons/notMetIcon.svg'
import completeIcon from '../icons/completeIcon.svg'

const icons = [
  infectionIcon,
  testingIcon,
  caseIcon,
  healthcareIcon,
  protectingIcon,
]

const assessmentStatusSetup = {}
scorecardContent.map((metric, metricIndex) => {
  metric.phases.map((phase, phaseIndex) => {
    assessmentStatusSetup['S' + phaseIndex + metricIndex] = 'u'
    phase.map((item, checkboxIndex) => {
      assessmentStatusSetup['C' + phaseIndex + metricIndex + checkboxIndex] =
        'f'
    })
  })
})

const scorecardStatusSetup = {}
scorecardContent.map((metric, metricIndex) => {
  metric.phases.map((phase, phaseIndex) => {
    assessmentStatusSetup['S' + phaseIndex + metricIndex] = 'u'
    phase.map((item, checkboxIndex) => {
      assessmentStatusSetup['C' + phaseIndex + metricIndex + checkboxIndex] =
        'f'
    })
  })
})

const MetricsScorecard = props => {
  // const onChangeCheckbox = e => {
  //   e.preventDefault()
  //
  // }
  const [assessmentStatus, setAssessmentStatus] = React.useState(
    assessmentStatusSetup
  )

  const [scorecardStatus, setScorecardStatus] = React.useState(
    scorecardStatusSetup
  )

  React.useEffect(() => {
    if (window.localStorage.getItem('scorecardStatus') !== null) {
      setScorecardStatus(
        JSON.parse(window.localStorage.getItem('scorecardStatus'))
      )
    }
    if (window.localStorage.getItem('assessmentStatus') !== null) {
      setAssessmentStatus(
        JSON.parse(window.localStorage.getItem('assessmentStatus'))
      )
    }
  }, [])

  const onChangeStatus = (id, view, e) => {
    if (id.startsWith('S')) {
      if (view === 'scorecard') {
        setScorecardStatus({ ...scorecardStatus, [id]: e.target.value })
        saveStatus('scorecard', { ...scorecardStatus, [id]: e.target.value })
      } else {
        setAssessmentStatus({ ...assessmentStatus, [id]: e.target.value })
        saveStatus('assessment', { ...assessmentStatus, [id]: e.target.value })
      }

      // updateUrlHash({ ...assessmentStatus, [id]: e.target.value })
      // console.log(id + ': ' + e.target.value)
    } else {
      const newStatus =
        view === 'assessment'
          ? {
              ...assessmentStatus,
              [id]: e.target.checked ? 't' : 'f',
            }
          : {
              ...scorecardStatus,
              [id]: e.target.checked ? 't' : 'f',
            }

      const [, phaseNumber, metricIndex] = id.split('')

      const adjacentCheckboxes = Object.keys(newStatus)
        .filter(key => key.startsWith('C' + phaseNumber + metricIndex))
        .reduce((obj, key) => {
          obj[key] = newStatus[key]
          return obj
        }, {})

      const complete = Object.values(adjacentCheckboxes).every(
        value => value === 't'
      )

      if (complete) {
        newStatus['S' + phaseNumber + metricIndex] = 'c'
      }

      if (view === 'scorecard') {
        setScorecardStatus(newStatus)
        saveStatus('scorecard', newStatus)
      } else {
        setAssessmentStatus(newStatus)
        saveStatus('assessment', newStatus)
      }
      // updateUrlHash({
      //   ...assessmentStatus,
      //   [id]: e.target.checked ? 't' : 'f',
      // })
      // console.log(id + ': ' + e.target.checked)
    }
  }

  // const updateUrlHash = object => {
  //   console.log('update')
  //   console.log(object)
  //   document.location =
  //     window.location.href + '#' + encodeURIComponent(JSON.stringify(object))
  // }

  const saveStatus = (view, status) => {
    // console.log('set localStorage')
    // console.log(JSON.stringify(status))
    window.localStorage.setItem(view + 'Status', JSON.stringify(status))
  }

  const createCheckboxElements = (phase, phaseNumber, metricIndex) =>
    phase.map((item, checkboxIndex) => (
      <label key={checkboxIndex} className={styles.label}>
        <input
          name={item.text}
          type="checkbox"
          checked={
            scorecardStatus['C' + phaseNumber + metricIndex + checkboxIndex] ===
            't'
              ? true
              : false
          }
          onChange={e =>
            onChangeStatus(
              'C' + phaseNumber + metricIndex + checkboxIndex,
              'scorecard',
              e
            )
          }
        />
        <span>
          {item.text.replace('[CAN]', '')}
          {item.text.includes('[CAN]') && (
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
          )}
        </span>
      </label>
    ))

  const scorecardMetricsElements = content =>
    content.map((row, metricIndex) => (
      <div key={row.metric} className={styles.metric}>
        <header>
          <img src={icons[metricIndex]} alt={'Icon for ' + row.metric} />
          <span
            dangerouslySetInnerHTML={{
              __html: row.metric.replace(/-/g, '&#8209;'),
            }}
          ></span>
        </header>
        <div className={styles.phaseOne}>
          Maximum <br /> social-distancing
        </div>
        {row.phases.map((phase, phaseNumber) => (
          <div key={phaseNumber} className={styles.phase}>
            {createCheckboxElements(phase, phaseNumber, metricIndex)}
          </div>
        ))}
      </div>
    ))

  const breakoutMetricsElements = (content, phaseNumber) =>
    content.map((row, metricIndex) => {
      let metricStyle = { backgroundColor: '', color: 'white' }
      let metricStatus = 'undefined'

      // console.log(assessmentStatus)
      switch (assessmentStatus['S' + phaseNumber + metricIndex]) {
        case 'u':
          metricStyle.backgroundColor = '#d4eef9'
          metricStyle.color = '#273349'
          break

        case 'n':
          metricStyle.backgroundColor = '#666667'
          metricStatus = 'notMet'
          break

        case 'c':
          metricStyle.backgroundColor = '#409385'
          metricStatus = 'complete'
          break
      }

      return (
        <div
          key={row.metric}
          className={styles.metricBreakout}
          style={metricStyle}
        >
          <header>
            <img src={icons[metricIndex]} alt={'Icon for ' + row.metric} />
            <span
              dangerouslySetInnerHTML={{
                __html: row.metric.replace(/-/g, '&#8209;'),
              }}
            ></span>
          </header>
          {row.phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className={styles.phaseBreakout}>
              {phase.map((item, checkboxIndex) => (
                <label key={checkboxIndex} className={styles.label}>
                  <input
                    name={item.text}
                    type="checkbox"
                    checked={
                      assessmentStatus[
                        'C' + phaseNumber + metricIndex + checkboxIndex
                      ] === 't'
                        ? true
                        : false
                    }
                    onChange={e =>
                      onChangeStatus(
                        'C' + phaseNumber + metricIndex + checkboxIndex,
                        'assessment',
                        e
                      )
                    }
                  />
                  <span>
                    {item.text.replace('[CAN]', '')}
                    {item.text.includes('[CAN]') && (
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
                    )}
                  </span>
                </label>
              ))}
            </div>
          ))}
          <div className={styles.status}>
            <select
              value={assessmentStatus['S' + phaseNumber + metricIndex]}
              onChange={e =>
                onChangeStatus('S' + phaseNumber + metricIndex, 'assessment', e)
              }
            >
              <option value="u">Define Metric Status</option>
              <option value="n">Not Met</option>
              <option value="c">Complete</option>
            </select>
            {metricStatus === 'notMet' && (
              <img src={notMetIcon} alt="Not Met" />
            )}
            {metricStatus === 'complete' && (
              <img src={completeIcon} alt="Complete" />
            )}
            {/* <p>{'S' + phaseNumber + metricIndex}</p> */}
          </div>
        </div>
      )
    })

  const breakoutPhases = [0, 1, 2]
  const breakoutScorecardElements = breakoutPhases.map(phaseNumber => {
    const phaseContent = scorecardContent.map(row => ({
      ...row,
      phases: [row.phases[phaseNumber]],
    }))

    return (
      <article key={phaseNumber} className={styles.scorecard}>
        <div className={styles.metricBreakoutHeader}>
          <header>
            <span>KEY METRICS</span>
          </header>
          <div className={styles.phaseBreakout}>
            <span>
              Thresholds To Enter{' '}
              <strong>{'Phase ' + (phaseNumber + 2)}</strong>
            </span>
          </div>
          <div className={styles.status}></div>
        </div>
        {breakoutMetricsElements(phaseContent, phaseNumber)}
      </article>
    )
  })

  return (
    <>
      {props.layout === 'grid' && (
        <article className={styles.scorecard}>
          <div className={styles.metricArrows}>
            <header></header>
            <div className={styles.phaseOne}></div>
            <div className={styles.phase}></div>
            <div className={styles.phase}></div>
            <div className={styles.phase}></div>
          </div>
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
          <div className={styles.metricArrows}>
            <header></header>
            <div className={styles.phaseOne}></div>
            <div className={styles.phase}></div>
            <div className={styles.phase}></div>
            <div className={styles.phase}></div>
          </div>
        </article>
      )}
      {props.layout === 'breakout' && <>{breakoutScorecardElements}</>}
    </>
  )
}

export default MetricsScorecard
