import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import BlueExpandBox from '../components/BlueExpandBox/BlueExpandBox'

import styles from '../styles/reachback.module.scss'

const Reachback = () => {
  return (
    <Layout>
      <Helmet
        title={`COVID Local Resources`}
        meta={[
          {
            name: 'Ask the Experts',
            content:
              'Resources for local leaders managing the COVID-19 pandemic.',
          },
        ]}
      />

      <header className={styles.header}>
        <h1>Ask the Experts</h1>
        <Link to="/contact/">
          Submit requests for <br />
          information, sources, or feedback
        </Link>
      </header>

      <section className={styles.main}>
        <BlueExpandBox>
          <h1>Medical Capacity</h1>
          <ul>
            <li>
              Harvard Global Health (get link from Ashish Jha&apos;s team);{' '}
            </li>
            <li>
              Columbia Mailman School of Public Health (get link from Cora)
            </li>
          </ul>
        </BlueExpandBox>
        <BlueExpandBox>
          <h1>Logistics/PPE Supply Chain</h1>
          <ul>
            <li>MIT (resources sent by Valeria Karplus);</li>
            <li>
              Harvard Kennedy School of Government (get link from Juliette
              Kayyem)
            </li>
          </ul>
        </BlueExpandBox>
        <BlueExpandBox>
          <h1>Disease Testing, Contact Tracing, & Surveillance:</h1>
          <ul>
            <li>Georgetown</li>
            <li>In-Q-Tel (links from Dylan George)</li>
            <li>JHU (links from Jennifer Nuzzo)</li>
            <li>
              Columbia Mailman School of Public Health (links from Cora Neumann)
            </li>
          </ul>
        </BlueExpandBox>
      </section>
    </Layout>
  )
}

export default Reachback
