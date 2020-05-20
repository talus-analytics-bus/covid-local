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
              {/* <a href="#" className={styles.row} onClick={toggleDownloadDetail}> */}
              {/*   <span>Download All</span> <span>.zip, 2mb</span> */}
              {/* </a> */}
              {/* <a href="#" className={styles.row} onClick={toggleDownloadDetail}> */}
              {/*   <span>Metrics Overview</span> <span>.pdf, 1mb</span> */}
              {/* </a> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/assets/documents/Metrics_Scorecard.pdf"
                className={styles.row}
                onClick={toggleDownloadDetail}
              >
                <span>Metrics Scorecard</span> <span>pdf, 155kb</span>
              </a>
              {/* <a href="#" className={styles.row} onClick={toggleDownloadDetail}> */}
              {/*   <span>Assess Your Progress</span> <span>pdf, 1mb</span> */}
              {/* </a> */}
            </div>
          </div>
        </div>
        <p>
          As the COVID-19 pandemic continues, communities around the United
          States are working to identify the best response and identify the
          right time to re-open while both protecting their communities from the
          disease and supporting economic recovery and growth. A phased
          re-opening strategy is being adopted by many based on progress toward
          metrics defined by key public health measures. The graphics in the
          Metrics Overview describe these phases and the key metrics associated
          with each phase under a set of public health categories. The Scorecard
          on the Metrics Scorecard tab and available as a PDF download can be
          used to self-assess community progress.
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
          {/* <button */}
          {/*   onClick={onClickTab} */}
          {/*   aria-pressed={tab === 'ASSESS YOUR PROGRESS'} */}
          {/* > */}
          {/*   ASSESS YOUR PROGRESS */}
          {/* </button> */}
        </div>

        {tab === 'METRICS OVERVIEW' && <TabSection />}
        {tab === 'METRICS SCORECARD' && <MetricsScorecard layout="grid" />}
        {/* {tab === 'ASSESS YOUR PROGRESS' && ( */}
        {/*   <MetricsScorecard layout="breakout" /> */}
        {/* )} */}
      </article>
    </Layout>
  )
}

export default MetricsPage
