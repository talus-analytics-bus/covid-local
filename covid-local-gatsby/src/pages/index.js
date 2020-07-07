import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Helmet } from 'react-helmet'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import DropDownLink from '../components/DropDownLink/DropDownLink'

import Layout from '../components/Layout/Layout'

import styles from '../styles/landingpage.module.scss'

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

const LandingPage = props => {
  const data = useStaticQuery(graphql`
    query blogQuery {
      allAirtable(
        filter: { data: { publishing_status: { eq: "Publish" } } }
        sort: { order: DESC, fields: data___Date }
        limit: 1
      ) {
        edges {
          node {
            id
            data {
              Blog_Text
              author
              Date
              title
              slug
            }
          }
        }
      }
    }
  `)
  const blogpost = data.allAirtable.edges[0].node

  const [resource, setResource] = React.useState()

  React.useEffect(() => {
    fetch('/assets/content/resources.json')
      .then(response => response.json())
      .then(jsonString => {
        const resources = jsonString.resources
        shuffleArray(resources)
        setResource(resources[0])
      })
  }, [])

  return (
    <Layout ampOpen={props.ampOpen || false}>
      <Helmet
        title={`COVID-Local: A Frontline Guide for Local Decision-Makers`}
        meta={[
          {
            name: 'description',
            content: `The COVID-19 pandemic is causing significant disruptions to cities and local communities globally. Given these challenges, we have developed this guide to provide a decision framework for local leaders to think through what will need to be done to help reduce the impact of the outbreak, both by reducing spread and decreasing the number of cases, but also in responding and supporting communities effectively.`,
          },
        ]}
      />
      <div className={styles.gradient}>
        <main className={styles.main}>
          <header>
            <div className={styles.left}>
              <div className={styles.logo}></div>
              <h1>
                <strong>COVID</strong> LOCAL
              </h1>
              <h2>A Frontline Guide for Local Decision-Makers</h2>
              <p>
                The COVID-19 pandemic is causing significant disruptions to
                cities and local communities globally. Given these challenges,
                we have developed this guide to provide a decision framework for
                local leaders to think through what will need to be done to help
                reduce the impact of the outbreak, both by reducing spread and
                decreasing the number of cases, but also in responding and
                supporting communities effectively.
              </p>
              <div className={styles.btnrow}>
                <DropDownLink className={styles.dropDownLink}>
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault()
                    }}
                    className={styles.subMenuButton}
                  >
                    Go To Guide &#9660;
                  </a>
                  <ul>
                    <li>
                      <Link activeClassName={styles.active} to="/guide/">
                        US Guide
                      </Link>
                    </li>
                    <li>
                      <Link activeClassName={styles.active} to="/intl-guide/">
                        International&nbsp;Guide
                      </Link>
                    </li>
                  </ul>
                </DropDownLink>
              </div>
            </div>
            <div className={styles.right}>
              <h2>Metrics for Phased Reopening</h2>
              <p>To help leaders plan for phased re-opening</p>
              <img
                src="/assets/images/metrics-screenshot.png"
                alt="Metrics for Phased Reopening Screenshot"
              />
              <Link className={styles.buttonlink} to="/metrics/">
                Go to Metrics
              </Link>
            </div>
          </header>
          <div className={styles.cols}>
            <div>
              <h1>BLOG</h1>
              <h2>Notes from the field</h2>
              <h4>
                <Link to={blogpost.data.slug}>{blogpost.data.title}</Link>
              </h4>
              <h5>{blogpost.data.Date}</h5>
              <section
              // grab the first 250 words, then add an ellipsis
              // if the first paragraph is shorter than 250
              // words, just use that without the ellipsis
              >
                <p>
                  {unified()
                    .use(markdown)
                    .use(html)
                    .processSync(blogpost.data.Blog_Text)
                    .contents.split('</p>')[0]
                    .replace('<p>', '')
                    .split(' ')
                    .slice(0, 50)
                    .join(' ')}
                </p>
              </section>
              <Link className={styles.buttonlink} to="/blog/">
                Go to Blog
              </Link>
            </div>
            <div>
              <h1>EXPLORE</h1>
              <h2>Recommended resources</h2>
              {resource !== undefined && (
                <>
                  <h3>{resource.organization}</h3>
                  <h4>
                    <a href={resource.link}>{resource.name}</a>
                  </h4>
                  <p>
                    {resource.description.length > 250
                      ? resource.description
                          .split(' ')
                          .slice(0, 30)
                          .join(' ') + '...'
                      : resource.description}
                  </p>
                  <a href={resource.link}>
                    {resource.link
                      .split('/')
                      .slice(0, 3)
                      .join('/')}
                  </a>
                </>
              )}
              <Link className={styles.buttonlink} to="/resources/">
                Go to Resources
              </Link>
            </div>
            <div>
              <h1>LEARN</h1>
              <h2>Ask The Experts</h2>
              <p>
                A brief list of topics, relevant resources, and options to
                contact leading experts for additional information.
              </p>
              <Link className={styles.buttonlink} to="/ask-the-experts/">
                Go to Ask The Experts
              </Link>
            </div>
          </div>
          <div className={styles.media}>
            <h1>Highlighted By</h1>
            <div className={styles.logos}>
              <OutboundLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.nbcnews.com/dateline/video/amid-threat-of-more-coronavirus-outbreaks-pandemic-experts-create-guide-for-local-governments-84937285768"
              >
                <img
                  src="/assets/images/media-logos/dateline.svg"
                  alt="NBC Dateline Logo"
                />
              </OutboundLink>
              <OutboundLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.theguardian.com/us-news/2020/mar/28/trump-coronavirus-politics-us-health-disaster"
              >
                <img
                  src="/assets/images/media-logos/guardian.svg"
                  alt="The Guardian Logo"
                />
              </OutboundLink>
              <OutboundLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cnbc.com/2020/06/26/beth-cameron-helped-write-the-white-house-pandemic-playbook.html"
              >
                <img
                  src="/assets/images/media-logos/cnbc.svg"
                  alt="CNBC Logo"
                />
              </OutboundLink>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <h1>A JOINT PROJECT OF</h1>
          <a href="https://ghss.georgetown.edu/" className={styles.georgetown}>
            <img
              src="/assets/images/logos/Georgetown-small.png"
              alt="Georgetown University"
            />
          </a>
          <a href="http://talusanalytics.com/" className={styles.talus}>
            <img
              src="/assets/images/logos/talus-logo-01.png"
              alt="Talus Analytics"
            />
          </a>
          <a
            href="https://www.nti.org/about/biosecurity/"
            className={styles.nti}
          >
            <img
              src="/assets/images/logos/Nuclear_Threat_Initiative_logo.svg"
              alt="Nuclear Threat Initiative"
            />
          </a>
          <a href="https://www.cgdev.org/" className={styles.cgd}>
            <img
              src="/assets/images/logos/center-for-global-development.png"
              alt="Center for Global Development"
            />
          </a>
        </footer>
      </div>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query blogQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 1
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 300)
//           id
//           frontmatter {
//             title
//             date(formatString: "dddd, MMMM DD, YYYY")
//             path
//             category
//             author
//           }
//         }
//       }
//     }
//   }
// `

export default LandingPage
