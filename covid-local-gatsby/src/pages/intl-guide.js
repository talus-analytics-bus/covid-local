import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
// import BlueExpandBox from '../components/BlueExpandBox/BlueExpandBox'
import Guide from '../components/Guide/Guide'

import styles from '../styles/intlGuide.module.scss'

import initGuideScripts from '../components/GuideContent/guideScripts.global.js'
import '../styles/guideStyle.css'
import guideHeaderContent from '../components/Guide/GuideHeaderContent.html'
import indicatorsOfProgress from '../components/Guide/GuideIndicatorsOfProgressContent.html'

const LmicGuide = () => {
  React.useEffect(() => {
    initGuideScripts()
  }, [])

  const {
    questions: { edges: questions },
    text: { edges: text },
    resources: { edges: resources },
  } = useStaticQuery(
    graphql`
      query guideData {
        questions: allAirtable(
          filter: { table: { regex: "/^Key Objective #[1-9]/" } }
        ) {
          edges {
            node {
              id
              table
              recordId
              data {
                Section
                Guiding_Question
                Associated_subquestions
              }
            }
          }
        }
        text: allAirtable(filter: { table: { eq: "Objective Descriptions" } }) {
          edges {
            node {
              data {
                objective
                title
                description
              }
            }
          }
        }
        resources: allAirtable(filter: { table: { eq: "Resources Links" } }) {
          edges {
            node {
              data {
                Link_Language
                Associated_Link
                Objective__
              }
            }
          }
        }
      }
    `
  )

  // For some reason, the records come in from airtable in reverse order...
  if (questions[0].node.table !== 'Key Objective #1') {
    questions.reverse()
    resources.reverse()
  }

  const guideRestructured = {}
  let objective = ''
  let section = ''
  let guidingQuestion = ''
  let subquestion = ''

  questions.forEach(edge => {
    const {
      node: { table: table, data: data },
    } = edge

    // create new objective object
    if (table.trim() !== objective) {
      const metadata = text.filter(entry =>
        entry.node.data.objective.includes(table)
      )[0].node.data

      const links = resources
        .filter(
          resource =>
            resource.node.data.Objective__ ===
            Number(table.split('#').slice(-1)[0])
        )
        .map(resource => ({
          href: resource.node.data.Associated_Link,
          content: resource.node.data.Link_Language,
        }))

      objective = table.trim()
      guideRestructured[objective] = {
        sections: {},
        title: metadata.title,
        description: metadata.description,
        resources: links,
      }
    }

    // create new section object
    if (data.Section.trim() !== section) {
      section = data.Section.trim()
      guideRestructured[objective].sections[section] = {}
    }

    // create new guiding question, with an array for subquestions
    if (data.Guiding_Question.trim() !== guidingQuestion) {
      guidingQuestion = data.Guiding_Question.trim()
      guideRestructured[objective].sections[section][guidingQuestion] = []
    }

    // create new subquestion in the array
    if (
      (data.Associated_subquestions.trim() !== subquestion) &
      (data.Associated_subquestions.trim() !== 'N/A')
    ) {
      subquestion = data.Associated_subquestions.trim()
      guideRestructured[objective].sections[section][guidingQuestion].push(
        subquestion
      )
    }
  })

  console.log(guideRestructured)

  return (
    <Layout>
      {/* <header className={styles.header}> */}
      {/*   <h1>International Guide</h1> */}
      {/*   <Link to="/contact/">Contact Us</Link> */}
      {/* </header> */}
      <header
        className={'guide'}
        dangerouslySetInnerHTML={{ __html: guideHeaderContent }}
      />
      <div className="guide">
        <article
          className="expanding-boxes"
          dangerouslySetInnerHTML={{ __html: indicatorsOfProgress }}
        />
      </div>
      <section className={styles.main}>
        <Guide content={guideRestructured} />
      </section>
    </Layout>
  )
}

export default LmicGuide
