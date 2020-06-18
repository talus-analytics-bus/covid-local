import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

import Layout from '../components/Layout/Layout'

import styles from '../styles/metrics/metrics.module.scss'

import '../styles/metrics/background.css'
import '../styles/metrics/text.css'

import TabSection from '../components/Metrics/TabSection'
import MetricsScorecard from '../components/Metrics/MetricsScorecard/MetricsScorecard'

const MetricsPage = () => {
  const [tab, setTab] = useState('METRICS OVERVIEW')
  const onClickTab = e => {
    e.preventDefault()
    setTab(e.target.innerHTML)
  }

  const [downloadHiderStyle, setDownloadHiderSyle] = useState({
    height: 0,
    padding: '0 15px',
  })

  const downloadDetailContent = React.useRef()

  const toggleDownloadDetail = () => {
    if (downloadHiderStyle.height !== 0) {
      setDownloadHiderSyle({ height: 0, padding: '0 15px' })
    } else {
      setDownloadHiderSyle({
        height: downloadDetailContent.current.offsetHeight + 30,
        padding: 15,
      })
    }
  }

  return (
    <Layout>
      <Helmet
        title={`Metrics for phased reopening`}
        meta={[
          {
            name: 'description',
            content: `Metrics, Scorecards, and other decisionmaking tools for local leadership to work through the phased reopening process for the COVID-19 Pandemic.`,
          },
        ]}
      />

      <header className={styles.header}>
        <h1>Metrics for Phased Reopening</h1>
        <Link to="/contact/">Contact us</Link>
      </header>

      <article className={styles.main}>
        <div className={styles.downloadRow}>
          <button
            className={styles.downloadButton}
            onClick={toggleDownloadDetail}
          >
            Download&nbsp;
          </button>
          <div
            className={styles.downloadDetailHider}
            style={downloadHiderStyle}
          >
            {downloadHiderStyle.height !== 0 && (
              <div
                className={styles.downloadDetailCloser}
                onClick={toggleDownloadDetail}
              ></div>
            )}
            <div className={styles.downloadDetail} ref={downloadDetailContent}>
              {/* <a */}
              {/*   target="_blank" */}
              {/*   rel="noopener noreferrer" */}
              {/*   href="/assets/documents/COVID Local Metrics overview and scorecard.pdf" */}
              {/*   className={styles.row} */}
              {/*   onClick={toggleDownloadDetail} */}
              {/* > */}
              {/*   <span>Metrics overview and scorecard</span>{' '} */}
              {/*   <span>pdf, 616kb</span> */}
              {/* </a> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/assets/documents/COVID Local Metrics overview.pdf"
                className={styles.row}
                onClick={() => {
                  trackCustomEvent({
                    category: 'Document Download',
                    action: 'Metrics Overview Download',
                    label: 'Metrics Overview Download',
                  })
                  toggleDownloadDetail()
                }}
              >
                <span>Metrics overview</span> <span>pdf, 939kb</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/assets/documents/COVID Local Metrics scorecard.pdf"
                className={styles.row}
                onClick={() => {
                  trackCustomEvent({
                    category: 'Document Download',
                    action: 'Metrics Scorecard Download',
                    label: 'Metrics Scorecard Download',
                  })
                  toggleDownloadDetail()
                }}
              >
                <span>Metrics scorecard</span> <span>pdf, 209kb</span>
              </a>
            </div>
          </div>
        </div>
        <p>
          Local leaders across the United States are working to bolster public
          health capacity and take some initial steps to reopen — protecting
          their communities from the disease and supporting economic recovery
          and growth. COVID-Local provides decision-makers with easy-to-use
          metrics for a phased re-opening strategy. These metrics can be used to
          assess current response, pinpoint areas for action, and make decisions
          for moving to the next phase of re-opening.
          <ul>
            <li>
              <strong>Metrics Overview</strong> Describes phases and key metrics
              associated with each phase under a set of public health
              categories.
            </li>
            <li>
              <strong>Scorecard</strong> Shows how to self-assess your
              community’s progress across all metrics for each Phase.
            </li>
            <li>
              <strong>Assess Your Progress</strong> Offers an interactive
              checklist to be used to show progress toward meeting thresholds
              for each phase.
            </li>
          </ul>
        </p>
        <div className={styles.filters}>
          <button
            onClick={onClickTab}
            aria-pressed={tab === 'METRICS OVERVIEW'}
          >
            METRICS OVERVIEW
          </button>
          <button
            onClick={onClickTab}
            aria-pressed={tab === 'METRICS SCORECARD'}
          >
            METRICS SCORECARD
          </button>
          <button
            onClick={onClickTab}
            aria-pressed={tab === 'ASSESS YOUR PROGRESS'}
          >
            ASSESS YOUR PROGRESS
          </button>
        </div>

        {tab === 'METRICS OVERVIEW' && <TabSection />}
        {tab === 'METRICS SCORECARD' && <MetricsScorecard layout="grid" />}
        {tab === 'ASSESS YOUR PROGRESS' && (
          <MetricsScorecard layout="breakout" />
        )}
      </article>
    </Layout>
  )
}

export default MetricsPage
