import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
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
        title={`About The COVID Local Project, Authors, and Contributors`}
        meta={[
          {
            name: 'description',
            content: `The authors and contributors to the COVID Local guide and resource website helping local leaders handle the COVID-19 pandemic.`,
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
                onClick={toggleDownloadDetail}
              >
                <span>Metrics overview</span> <span>pdf, 535kb</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/assets/documents/COVID Local Metrics scorecard.pdf"
                className={styles.row}
                onClick={toggleDownloadDetail}
              >
                <span>Metrics scorecard</span> <span>pdf, 157kb</span>
              </a>
            </div>
          </div>
        </div>
        <p>
          As the COVID-19 pandemic continues, local leaders across the United
          States are working to bolster public health capacity and take some
          initial steps to reopen — protecting their communities from the
          disease and supporting economic recovery and growth. Below,
          COVID-Local provides decision-makers with easy-to-use metrics for a
          phased re-opening strategy. These metrics can be used to assess
          existing response, pinpoint areas for action, and make decisions for
          moving to the next phase of re-opening. The graphics in the{' '}
          <strong>Metrics Overview</strong> describe phases and the key metrics
          associated with each phase under a set of public health categories.
          The <strong>Scorecard</strong> (found on the Metrics Scorecard tab and
          available as a PDF download) can be used to self-assess community
          progress across all metrics for each Phase. The{' '}
          <strong>Assess Your Progress</strong> tab provides a series of
          graphics with phase-specific metrics. The interactive checklist can be
          used to show progress toward meeting thresholds for each phase.
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
