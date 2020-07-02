import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/Layout/Layout'
import BlueExpandBox from '../components/BlueExpandBox/BlueExpandBox'

import styles from '../styles/reachback.module.scss'

const orgs = {
  HarvardKennedySchool: {
    link: 'https://www.belfercenter.org/SAGH',
    logo: '/assets/images/reachback-logos-fullsize/harvard-belfer-center.png',
    altText:
      'Harvard Kennedy School Belfer Center for Science and International Affairs',
  },
  ColumbiaMailman: {
    link: 'https://www.publichealth.columbia.edu/covid-19',
    logo: '/assets/images/reachback-logos-fullsize/columbia-mailman.png',
    altText: 'Columbia Mailman School of Public Health',
  },
  Georgetown: {
    link: 'https://ghss.georgetown.edu/',
    logo: '/assets/images/reachback-logos-fullsize/Georgetown-small.png',
    altText:
      'Georgetown University Center for Global Health Science and Security',
  },
  CenterForGlobalDevelopment: {
    link: 'https://www.cgdev.org/',
    logo:
      '/assets/images/reachback-logos-fullsize/center-for-global-development.png',
    altText: 'Center for Global Development',
  },
  NuclearThreatInitiative: {
    link: 'https://www.nti.org/about/biosecurity/',
    logo:
      '/assets/images/reachback-logos-fullsize/Nuclear_Threat_Initiative_logo.png',
    altText: 'Nuclear Threat Initiative Biosecurity',
  },
  MIT: {
    link: 'https://www.covidalliance.com/',
    logo: '/assets/images/reachback-logos-fullsize/MIT-updated.png',
    altText: 'Massachusetts Institute of Technology COVID-19 Policy Alliance',
  },
  JohnsHopkins: {
    link: 'https://coronavirus.jhu.edu/',
    logo: '/assets/images/reachback-logos-fullsize/jhu2.png',
    altText: 'Johns Hopkins Coronavirus Resource Center',
  },
  InQTel: {
    link: 'https://www.iqt.org/covid-19/',
    logo: '/assets/images/reachback-logos-fullsize/IQT_logo.png',
    altText: 'IN-Q-TEL COVID-19',
  },
  Talus: {
    link: 'http://talusanalytics.com/',
    logo: '/assets/images/reachback-logos-fullsize/talus-logo-01.png',
    altText: 'Talus Analytics',
  },
  MontanaState: {
    link: 'https://www.montana.edu/',
    logo: '/assets/images/reachback-logos-fullsize/MontanaState.png',
    altText: 'Montana State University',
  },
}

const Affiliation = props => (
  <div className={styles.experts}>
    <div className={styles.logo}>
      <OutboundLink
        href={props.org.link}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <img src={props.org.logo} alt={props.org.altText} />
      </OutboundLink>
    </div>
    <div className={styles.names}>{props.children}</div>
  </div>
)

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
              <h2>Experts</h2>
              <div className={styles.categories}>
                <section>
                  <h3>Hospital Capacity</h3>
                  <Affiliation org={orgs.HarvardKennedySchool}>
                    <p>Ashish Jha</p>
                  </Affiliation>
                </section>
                <section>
                  <h3>ICU Beds</h3>
                  <Affiliation org={orgs.ColumbiaMailman}>
                    <p>Maria O&apos;Brien</p>
                    <p>Charles Branas</p>
                    <p>John Kraemer</p>
                  </Affiliation>
                </section>
                <button>Contact</button>
              </div>
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
              <h2>Experts</h2>
              <div className={styles.categories}>
                <section>
                  <h3>General</h3>
                  <Affiliation org={orgs.HarvardKennedySchool}>
                    <p>Juliette Kayyem</p>
                  </Affiliation>
                  <Affiliation org={orgs.MIT}>
                    <p>Valerie Karplus</p>
                  </Affiliation>
                </section>
                <button>Contact</button>
              </div>
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
              <h2>Experts</h2>
              <div className={styles.categories}>
                <section>
                  <h3>Contact Tracing and Isolation</h3>
                  <Affiliation org={orgs.ColumbiaMailman}>
                    <p>Maria O&apos;Brien</p>
                    <p>Wafaa El-Sadr</p>
                  </Affiliation>
                </section>

                <section>
                  <h3>Testing</h3>
                  <Affiliation org={orgs.ColumbiaMailman}>
                    <p>Maria O&apos;Brien</p>
                    <p>Wafaa El-Sadr</p>
                  </Affiliation>
                </section>

                <section>
                  <h3>Local Outbreak Modeling</h3>
                  <Affiliation org={orgs.ColumbiaMailman}>
                    <p>Maria O&apos;Brien</p>
                    <p>J. Shaman</p>
                  </Affiliation>
                </section>

                <section>
                  <h3>General</h3>
                  <Affiliation org={orgs.Georgetown}>
                    <p>Matt Boyce</p>
                  </Affiliation>
                  <Affiliation org={orgs.JohnsHopkins}>
                    <p>Jennifer Nuzzo</p>
                  </Affiliation>
                  <Affiliation org={orgs.InQTel}>
                    <p>Dylan George, PhD</p>
                  </Affiliation>
                </section>

                <button>Contact</button>
              </div>
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
              <h2>Experts</h2>
              <div className={styles.categories}>
                <section>
                  <h3>General</h3>
                  <Affiliation org={orgs.Talus}>
                    <p>Ellie Graden</p>
                  </Affiliation>
                  <Affiliation org={orgs.Georgetown}>
                    <p>Matt Boyce</p>
                  </Affiliation>
                </section>

                <button>Contact</button>
              </div>
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
              <h2>Experts</h2>
              <div className={styles.categories}>
                <section>
                  <h3>Low Resource, Rural, and Tribal Communities</h3>
                  <Affiliation org={orgs.MontanaState}>
                    <p>Jayne Morrow</p>
                  </Affiliation>
                </section>

                <section>
                  <h3>General</h3>
                  <Affiliation org={orgs.HarvardKennedySchool}>
                    <p>Ashish Jha</p>
                  </Affiliation>
                  <Affiliation org={orgs.ColumbiaMailman}>
                    <p>Maria O&apos;Brien</p>
                    <p>Wafaa El-Sadr</p>
                    <p>Terry McGovern</p>
                    <p>Cora Neumann</p>
                  </Affiliation>
                </section>

                <button>Contact</button>
              </div>
            </div>
          </div>
        </BlueExpandBox>
        <BlueExpandBox>
          <h1>Policy Coordination</h1>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                The COVID-19 outbreak has placed significant pressure on
                subnational governments to tailor policy response to the
                outbreak based on local conditions. While some policies will
                cause disruptions, they can be particularly problematic if they
                create economic disincentives to cooperating with social
                distancing measures. Coordinating policies and mitigating these
                disruptions can help to reduce the human cost of the outbreak,
                beyond the immediate toll of the disease itself.
              </p>
              <h2>Experts</h2>
              <div className={styles.categories}>
                <section>
                  <h3>Law and Governance</h3>
                  <Affiliation org={orgs.Georgetown}>
                    <p>Matt Boyce</p>
                    <p>Mike Soto</p>
                    <p>John Kraemer</p>
                  </Affiliation>
                </section>
                <section>
                  <h3>State-Level Policy</h3>
                  <Affiliation org={orgs.ColumbiaMailman}>
                    <p>Maria O&apos;Brien</p>
                    <p>Michael Sparer</p>
                  </Affiliation>
                </section>
                <section>
                  <h3>Population and Family Health</h3>
                  <Affiliation org={orgs.ColumbiaMailman}>
                    <p>Maria O&apos;Brien</p>
                    <p>Terry McGovern</p>
                  </Affiliation>
                </section>
                <section>
                  <h3>Quarantine Policy</h3>
                  <Affiliation org={orgs.Georgetown}>
                    <p>Matt Boyce</p>
                    <p>Mike Soto</p>
                    <p>John Kraemer</p>
                  </Affiliation>
                </section>
                <section>
                  <h3>General</h3>
                  <Affiliation org={orgs.CenterForGlobalDevelopment}>
                    <p>Jeremy Konyndyk</p>
                  </Affiliation>
                  <Affiliation org={orgs.NuclearThreatInitiative}>
                    <p>Juliette Kayyem</p>
                  </Affiliation>
                </section>
                <button>Contact</button>
              </div>
            </div>
          </div>
        </BlueExpandBox>
      </section>
    </Layout>
  )
}

export default Reachback
