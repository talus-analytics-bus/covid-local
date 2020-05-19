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

const MetricsPage = () => {
  const [tab, setTab] = useState('METRICS OVERVIEW')
  const onClickTab = e => {
    e.preventDefault()
    setTab(e.target.innerHTML)
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
        <h1>Metrics</h1>
        <Link to="/contact/">Contact us</Link>
      </header>

      <article className={styles.main}>
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

        {tab === 'METRICS SCORECARD' && <TabSection />}
      </article>
    </Layout>
  )
}

export default MetricsPage
