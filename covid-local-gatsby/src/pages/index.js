import React from 'react'

import Layout from '../components/Layout/Layout'

import styles from '../styles/landingpage.module.scss'

const LandingPage = () => (
  <Layout>
    <div className={styles.gradient}>
      <main className={styles.main}>
        <header>
          <div className={styles.left}>
            <h1>A Frontline Guide for Local Decision-Makers</h1>
            <p>
              The COVID-19 pandemic is causing significant disruptions to cities
              and local communities globally. Given these challenges, we have
              developed this guide to provide a decision framework for local
              leaders to think through what will need to be done to help reduce
              the impact of the outbreak, both by reducing spread and decreasing
              the number of cases, but also in responding and supporting
              communities effectively.
            </p>
            <div className={styles.btnrow}>
              <a href="#">How to use the guide</a>
              <a href="/guide/">Go to guide</a>
            </div>
          </div>
          <div className={styles.right}>
            <h2>Metrics for Phased Reopening</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy
            </p>
            <img
              src="/assets/images/metrics-screenshot.png"
              alt="Metrics for Phased Reopening Screenshot"
            />
            <a href="/metrics/">Go to Metrics</a>
          </div>
        </header>
        <div className={styles.cols}>
          <div>
            <h1>BLOG</h1>
            <h2>Notes from the field</h2>
            <a href="/blog/">Go to Blog</a>
          </div>
          <div>
            <h1>LEARN</h1>
            <h2>Recommended resources</h2>
            <a href="/resources/">Go to Resources</a>
          </div>
          <div>
            <h1>REACHBACK</h1>
            <h2>Ask the experts</h2>
            <a href="/reachback/">Go to Reachback</a>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <h1>A JOINT PROJECT OF</h1>
        <a href="#" className={styles.georgetown}>
          <img
            src="/assets/images/logos/Georgetown-small.png"
            alt="Georgetown University"
          />
        </a>
        <a href="#" className={styles.talus}>
          <img
            src="/assets/images/logos/talus-logo-01.png"
            alt="Talus Analytics"
          />
        </a>
        <a href="#" className={styles.nti}>
          <img
            src="/assets/images/logos/Nuclear_Threat_Initiative_logo.svg"
            alt="Nuclear Threat Initiative"
          />
        </a>
        <a href="#" className={styles.cgd}>
          <img
            src="/assets/images/logos/center-for-global-development.png"
            alt="Center for Global Development"
          />
        </a>
      </footer>
    </div>
  </Layout>
)

export default LandingPage
