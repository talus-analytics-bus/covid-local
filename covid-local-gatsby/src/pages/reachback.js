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
        <p>
          As the COVID-19 response continues, the team behind COVID-19 Frontline
          Guide for Local Decision-Makers has received a large number of
          requests for information, questions, and recommendations for
          additional guidance. While we welcome feedback (see the Contact Us
          link in the upper right!), we also recognize that there are experts
          who may be better equipped to address specific issues. Below, a brief
          list of topics, relevant resources, and options to contact leading
          experts for additional information.
        </p>
        <BlueExpandBox>
          <h1>Medical Capacity</h1>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                COVID-19 has placed pressure on healthcare systems with the
                potential to overwhelm current capabilities absent urgent action
                to bolster surge capacity, especially in the areas of critical
                and intensive care. To prevent this, hospitals and other health
                care facilities must be able to assess current baselines and
                project future needs among areas such as occupancy rates,
                personal protective equipment availability, and ventilator and
                oxygen capacity. The ability to effectively increase medical
                capacity may reduce the frequency of deaths among COVID-19
                patients as well as decrease the risk of transmission within
                healthcare settings.
              </p>
            </div>
            <div className={styles.experts}>
              <a href="#">Harvard Global Health</a>
              <a href="#">Columbia Mailman School of Public Health</a>
            </div>
          </div>
        </BlueExpandBox>
        <BlueExpandBox>
          <h1>Logistics/PPE Supply Chain</h1>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                The COVID-19 pandemic has revealed significant shortcomings in
                global supply chains, particularly the medical supplies and
                personal protective equipment critical to mounting a safe and
                effective response. Absent a fully-operational, centralized
                system for distributing supplies to the areas of greatest need,
                many localities and facilities have had to identify alternative
                methods of procurement to meet their own requirements. New
                supply chain strategies must be adapted to the current realities
                as opposed to relying on past models.
              </p>
            </div>
            <div className={styles.experts}>
              <a href="#">MIT</a>
              <a href="#">Harvard Kennedy School of Government</a>
            </div>
          </div>
        </BlueExpandBox>
        <BlueExpandBox>
          <h1>Disease Testing, Contact Tracing, & Surveillance:</h1>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                A pandemic control strategy is grounded in understanding ongoing
                transmission risk in the community so that disease spread can be
                effectively controlled and contained. This will require
                continuous disease surveillance, diagnostic testing, contact
                tracing, isolation, and reporting systems that ensure up-to-date
                information on local transmission is available to inform
                strategy-setting and daily tactical decision-making.
              </p>
            </div>
            <div className={styles.experts}>
              <a href="#">Georgetown</a>
              <a href="#">In-Q-Tel</a>
              <a href="#">JHU</a>
              <a href="#">Columbia Mailman School of Public Health</a>
            </div>
          </div>
        </BlueExpandBox>
        <BlueExpandBox>
          <h1>Data Sources, Analysis, and Modeling</h1>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                Epidemiological and statistical modeling has become ubiquitous
                and widely cited during the COVID-19 outbreak, with results used
                to guide and inform key decisions at all levels of the response.
                In some cases, data analysis or calculations can be just as
                useful to inform tactical decision making. Data analysis and
                models can be used to estimate caseload, hospitalizations,
                critical care requirements, ventilator orders, staffing
                requirements, and logistics requirements.
              </p>
            </div>
            <div className={styles.experts}>
              <a href="#">Talus</a>
              <a href="#">Georgetown</a>
            </div>
          </div>
        </BlueExpandBox>
        <BlueExpandBox>
          <h1>Vulnerable Populations, Low Resource Settings</h1>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                COVID-19 poses significant risks to older populations and those
                with underlying health conditions. Additionally, other
                populations may remain at high risk for exposure due to their
                living conditions or practices. To minimize the risks for these
                populations, it is critical to identify the environments in
                which they reside or gather and to implement an effective
                protective strategy that considers their unique needs. This not
                only will protect these vulnerable populations, but may also
                alleviate pressure on healthcare systems.
              </p>
            </div>
            <div className={styles.experts}>
              <a href="#">Harvard</a>
              <a href="#">GCD</a>
              <a href="#">NTI</a>
              <a href="#">Columbia Mailman School of Public Health</a>
              <a href="#">Georgetown</a>
            </div>
          </div>
        </BlueExpandBox>
      </section>
    </Layout>
  )
}

export default Reachback
