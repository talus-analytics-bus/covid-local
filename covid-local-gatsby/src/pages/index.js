import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'

import styles from '../styles/landingpage.module.scss'

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  console.log('shuffle')
  console.log(array.length)
  for (let i = array.length - 1; i > 0; i--) {
    console.log('shuffle')
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

const LandingPage = props => {
  const blogpost = props.data.allMarkdownRemark.edges[0].node

  const [resource, setResource] = React.useState()

  React.useEffect(() => {
    fetch('/assets/content/resources.json')
      .then(response => response.json())
      .then(resources => {
        const resources2 = resources.resources
        console.log('before shuffle')
        console.log(resources2)
        shuffleArray(resources2)
        console.log('after shuffle')
        console.log(resources2)
        console.log(resources2[0])
        setResource(resources2[0])
      })
  }, [])

  return (
    <Layout>
      <div className={styles.gradient}>
        <main className={styles.main}>
          <header>
            <div className={styles.left}>
              <h1>A Frontline Guide for Local Decision-Makers</h1>
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
                {/* <a href="#">How to use the guide</a> */}
                <a href="/guide/">Go to Guide</a>
              </div>
            </div>
            <div className={styles.right}>
              <h2>Metrics for Phased Reopening</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy
              </p>
              <img
                src="/assets/images/metrics-screenshot.png"
                alt="Metrics for Phased Reopening Screenshot"
              />
              <a className={styles.buttonlink} href="/metrics/">
                Go to Metrics
              </a>
            </div>
          </header>
          <div className={styles.cols}>
            <div>
              <h1>BLOG</h1>
              <h2>Notes from the field</h2>
              <h4>
                <Link to={blogpost.frontmatter.path}>
                  {blogpost.frontmatter.title}
                </Link>
              </h4>
              <h5>{blogpost.frontmatter.date}</h5>
              <p>
                {blogpost.excerpt
                  .split(' ')
                  .slice(0, 50)
                  .join(' ') + '...'}
              </p>
              <a className={styles.buttonlink} href="/blog/">
                Go to Blog
              </a>
            </div>
            <div>
              <h1>LEARN</h1>
              <h2>Recommended resources</h2>
              {resource !== undefined && (
                <>
                  <h3>{resource.organization}</h3>
                  <h4>
                    <Link to={resource.link}>{resource.name}</Link>
                  </h4>
                  <p>
                    {resource.description.length > 250
                      ? resource.description
                          .split(' ')
                          .slice(0, 30)
                          .join(' ') + '...'
                      : resource.description}
                  </p>
                  <Link to={resource.link}>
                    {resource.link
                      .split('/')
                      .slice(0, 3)
                      .join('/')}
                  </Link>
                </>
              )}
              <a className={styles.buttonlink} href="/resources/">
                Go to Resources
              </a>
            </div>
            <div>
              <h1>FEEDBACK</h1>
              <h2>Contact Us</h2>
              <a className={styles.buttonlink} href="/reachback/">
                Go to Contact Us
              </a>
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

export const pageQuery = graphql`
  query blogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          frontmatter {
            title
            date(formatString: "dddd, MMMM DD, YYYY")
            path
            category
            author
          }
        }
      }
    }
  }
`

export default LandingPage
