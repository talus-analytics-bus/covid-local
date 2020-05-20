import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Fuse from 'fuse.js'

import Layout from '../components/Layout/Layout'

// styles and assets
import styles from '../styles/covidamp.module.scss'
import classNames from 'classnames'

const CovidAmp = props => {
  // covid amp logo
  const covidAmpSvg = '/assets/images/logos/covid-amp.svg'
  const covidAmpThumb = '/assets/images/covid-amp-thumb.png'
  const covidAmpURL = 'https://covidamp.talusanalytics.com'
  return (
    <Layout>
      <Helmet
        title={`COVID AMP`}
        meta={[
          {
            name: 'description',
            content: `The authors and contributors to the COVID Local guide and resource website helping local leaders handle the COVID-19 pandemic.`,
          },
        ]}
      />
      <section className={styles.header}>
        <div className={styles.covidAmp}>
          <a className={styles.externalLink} target="_blank" href={covidAmpURL}>
            <img src={covidAmpSvg} />
          </a>
        </div>
      </section>
      <section className={classNames(styles.main, styles.columns)}>
        <div className={styles.column}>
          <a target="_blank" href={covidAmpURL}>
            <button>Go to site</button>
          </a>
          <a target="_blank" href={covidAmpURL}>
            covidamp.talusanalytics.com
          </a>
          <p>
            The COVID Analysis and Mapping of Policies (AMP) site provides
            access to a comprehensive list of policies and plans implemented
            globally to address the COVID-19 pandemic. In many cases, response
            efforts have been led by subnational governments or private and
            non-profit organizations. For simple search, each policy or plan has
            been categorized by the type of measure, in addition to
            implementation date and authorizing agency. In addition, policies
            can be identified by legal authority and plans by type of
            organization. Where available, PDFs or links to the original
            document or notice are included.
          </p>
        </div>
        <div className={styles.column}>
          <a className={styles.thumb} target="_blank" href={covidAmpURL}>
            <img src={covidAmpThumb} />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default CovidAmp
