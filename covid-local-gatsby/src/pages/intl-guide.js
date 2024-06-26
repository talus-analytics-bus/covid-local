import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
// import BlueExpandBox from '../components/BlueExpandBox/BlueExpandBox'
import Guide from '../components/Guide/Guide'
// import DropDownLink from '../components/DropDownLink/DropDownLink'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import styles from '../styles/intlGuide.module.scss'

import initGuideScripts from '../components/GuideContent/guideScripts.global.js'
import '../styles/guideStyle.css'
import '../styles/intlGuideStyleOverrides.css'
// import guideHeaderContent from '../components/Guide/GuideHeaderContent.html'

// const translations = [
//   { language: 'Amharic', name: 'COVID-19 Frontline Guide Amharic.pdf' },
//   { language: 'Arabic', name: 'COVID-19 Frontline Guide Arabic.pdf' },
//   { language: 'French', name: 'COVID-19 Frontline Guide French.pdf' },
//   { language: 'Hindi', name: 'COVID-19 Frontline Guide Hindi.pdf' },
//   { language: 'Korean', name: 'COVID-19 Frontline Guide Korean.pdf' },
//   { language: 'Kurdish', name: 'COVID-19 Frontline Guide Kurdish.pdf' },
//   { language: 'Nepali', name: 'COVID-19 Frontline Guide Nepali.pdf' },
//   {
//     language: 'Simplified Chinese',
//     name: 'COVID-19 Frontline Guide Simplified Chinese.pdf',
//   },
//   { language: 'Somali', name: 'COVID-19 Frontline Guide Somali.pdf' },
//   { language: 'Spanish', name: 'COVID-19 Frontline Guide Spanish.pdf' },
//   { language: 'Tagalog', name: 'COVID-19 Frontline Guide Tagalog.pdf' },
//   { language: 'Urdu', name: 'COVID-19 Frontline Guide Urdu.pdf' },
//   { language: 'Vietnamese', name: 'COVID-19 Frontline Guide Vietnamese.pdf' },
// ]

const LmicGuide = () => {
  React.useEffect(() => {
    initGuideScripts()
  }, [])

  const {
    questions: { edges: questions },
    text: { edges: text },
    resources: { edges: resources },
    indicators: { edges: indicators },
  } = useStaticQuery(
    graphql`
      query guideData {
        indicators: allAirtable(
          filter: { table: { eq: "Indicators of Progress" } }
        ) {
          edges {
            node {
              id
              data {
                Guiding_Question
                Associated_subquestions
                Sub_subquestions
                Objective__
                Existing__
              }
            }
          }
        }
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
    indicators.reverse()
  }

  const guideRestructured = { questions: {}, indicators: {} }
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
      guideRestructured.questions[objective] = {
        sections: {},
        title: metadata.title,
        description: metadata.description,
        resources: links,
      }
    }

    // create new section object
    if (data.Section.trim() !== section) {
      section = data.Section.trim()
      guideRestructured.questions[objective].sections[section] = {}
    }

    // create new guiding question, with an array for subquestions
    if (data.Guiding_Question.trim() !== guidingQuestion) {
      guidingQuestion = data.Guiding_Question.trim()
      guideRestructured.questions[objective].sections[section][
        guidingQuestion
      ] = []
    }

    // create new subquestion in the array
    if (
      (data.Associated_subquestions.trim() !== subquestion) &
      (data.Associated_subquestions.trim() !== 'N/A')
    ) {
      subquestion = data.Associated_subquestions.trim()
      guideRestructured.questions[objective].sections[section][
        guidingQuestion
      ].push(subquestion)
    }
  })

  let indicatorQuestion = ''
  let indicatorSubQuestion = ''
  // let indicatorSubSubQuestion = ''

  indicators.forEach(edge => {
    const {
      node: { data: indicator },
    } = edge

    if (indicator.Guiding_Question.trim() !== indicatorQuestion) {
      indicatorQuestion = indicator.Guiding_Question.trim()
      guideRestructured.indicators[indicatorQuestion] = {
        number: indicator.Objective__,
        subQuestions: [],
      }
    }

    if (
      (indicator.Associated_subquestions.trim() !== indicatorSubQuestion) &
      (indicator.Associated_subquestions.trim() !== 'N/A')
    ) {
      indicatorSubQuestion = indicator.Associated_subquestions.trim()
      guideRestructured.indicators[indicatorQuestion].subQuestions.push(
        indicatorSubQuestion
      )
    }

    // if (
    //   (indicator.Associated_subquestions.trim() !== indicatorSubSubQuestion) &
    //   (indicator.Associated_subquestions.trim() !== 'N/A')
    // ) {
    //   indicatorSubSubQuestion = indicator.Associated_subquestions.trim()
    //   guideRestructured.indicators[indicatorQuestion][
    //     indicatorSubQuestion
    //   ].push(indicatorSubSubQuestion)
    // }
  })

  // console.log(guideRestructured)

  return (
    <Layout>
      {/* <header */}
      {/*   className={'guide intl'} */}
      {/*   dangerouslySetInnerHTML={{ __html: guideHeaderContent }} */}
      {/* /> */}
      <div className="guide intl">
        <header className="introduction-header">
          <div className="introduction">
            <div className="left-col">
              <svg
                className="clipboard-icon"
                x="0px"
                y="0px"
                viewBox="0 0 204.5 204.5"
              >
                <circle
                  style={{ fill: '#F27329' }}
                  cx="102.2"
                  cy="102.2"
                  r="102.2"
                />
                <g>
                  <path
                    style={{ fill: '#28334B' }}
                    d="M113.8,69.7c0-2.3-1.8-4.1-4.1-4.1h-4.1v-4.1h12.3l0,16.3h8.2V61.5c0-4.5-3.7-8.2-8.2-8.2h-12.3
            v-4.1c0-2.3-1.8-4.1-4.1-4.1H85.2c-2.3,0-4.1,1.8-4.1,4.1v4.1H68.9c-4.5,0-8.2,3.7-8.2,8.2v57.2c0,4.5,3.7,8.2,8.2,8.2h32.7v-8.2
            H68.9V61.5h12.3v4.1h-4.1c-2.3,0-4.1,1.8-4.1,4.1v40.9c0,2.3,1.8,4.1,4.1,4.1h24.5V77.9h12.3V69.7z M97.5,65.6h-8.2V53.3h8.2V65.6z
             M109.8,86v57.2h49V86H109.8z M146.5,131H122v-4.1h24.5V131z M146.5,118.7H122v-4.1h24.5V118.7z M146.5,106.4h-16.3v-4.1h16.3
            V106.4z"
                  />
                </g>
              </svg>
              <svg
                className="version-marker"
                x="0px"
                y="0px"
                viewBox="0 0 380.9 86.3"
              >
                <g>
                  <path
                    style={{ fill: '#F27329' }}
                    d="M0,43.2L0,43.2C0,19.4,19.4,0,43.2,0l294.6,0c23.7,0,43.2,19.4,43.2,43.2v0
            c0,23.7-19.4,43.2-43.2,43.2H43.2C19.4,86.3,0,66.9,0,43.2z"
                  />
                </g>
                <path
                  style={{ fill: '#28334B' }}
                  d="M46.3,12.2c-17,0-30.8,13.8-30.8,30.8s13.8,30.8,30.8,30.8c17,0,30.8-13.8,30.8-30.8
          S63.3,12.2,46.3,12.2z"
                />
                <rect
                  x="95.1"
                  y="26.8"
                  style={{
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    fill: 'none',
                  }}
                  width="216.9"
                  height="34.4"
                />
                <text
                  transform="matrix(1 0 0 1 95.1074 54.5977)"
                  style={{
                    fill: '#FFFFFF',
                    fontFamily: 'rawline',
                    fontSize: 39.2214,
                  }}
                >
                  International
                </text>
                <g>
                  <path
                    style={{ fill: '#FFFFFF' }}
                    d="M52.9,35.2c0.9,0.1,0.7-0.7,1.5-0.3c0.8,0.3,1.7,0.2,1.7-0.6c0-0.8-0.2-2.8-1-2.5
            c-0.5,0.2-0.9,1.1-0.7,1.6c0.2,0.5-0.2-0.2-0.9,0.2C53,34,52,35.1,52.9,35.2z"
                  />
                  <path
                    style={{ fill: '#FFFFFF' }}
                    d="M52.6,28.6c-0.7-0.7-1.5-0.7-2.7-0.6c-0.5,0.1-0.7,1.3,0.4,1.5C51.4,29.6,53.3,29.2,52.6,28.6z"
                  />
                  <path
                    style={{ fill: '#FFFFFF' }}
                    d="M72.9,45.6c0.4,0.3,0.9,0.5,1.3,0.7c0.1-1,0.2-2.1,0.2-3.1c0-0.7,0-1.4-0.1-2.1
            c-0.2-1.2-0.4-2.6-0.6-3.8c-0.5-2.3-1.3-4.5-2.3-6.5c-1.5-0.9-3.6-2-4.2-1.6c-0.8,0.7-2.2,0.6-2-0.1c0.2-0.6,1.2-0.5-0.6-1.7
            c-1.8-1.2-2.1-2.3-3.5-0.7c-1.4,1.6-1.7,2.9-2.5,3.3c-0.8,0.4-1.5,1.7-0.6,2c0.9,0.3,1,0,1.7,0.7c0.7,0.7,1.7,0.5,1.9,0.1
            c0.2-0.4,0.3-1.7,0.4-2.2c0.1-0.5,0.9-2.1,0.8-0.8c-0.1,1.3,1.1,1.3,0.3,2.2c-0.8,0.9-0.3,1.6-2,1.8c-1.6,0.2-1.7-0.8-2.6-0.3
            c-0.9,0.5-0.8,0.8-1.1,1.3c-0.3,0.5-2,1.5-2,1.5s-1.4-0.5-0.7,0.4c0.7,0.9,1.2,2,0.7,2c-0.6,0.1-2.1-0.8-2.1,0.2s-0.2,2,0.4,2.3
            c0.5,0.2,0.8,0.5,1.2,0.5c-0.3,0.1-0.6,0.3-0.9,0.6c-0.6,0.8-0.2,2.3-1.6,2.8c-1.3,0.5-1.3,1.1-1.6,2.1c-0.2,1.1,0,3.8,0.3,4
            c0.3,0.2,0.9,2.3,2.3,2.1c1.4-0.2,2.9-0.2,3.3,0c0.5,0.2,1.3-0.5,1.6,1.4c0.2,1.9,0.8,2.1,1.1,3.1c0.3,1-0.2,3,0,4.2
            c0.2,1.2,1.3,3.3,1.3,4.4c0,0.3,0.1,0.5,0.2,0.7c1.8-1.1,3.4-2.4,4.9-3.9c0.2-0.5,0.4-1.1,0.8-1.9c0.9-1.7,0.7-2.9,1.1-4.2
            c0.4-1.3,1.4-2.2,2.7-3.7c1.3-1.5,1.1-2.3,0-2.2c-1.1,0.1-1.8-1-2.4-2.3c-0.6-1.3-1.2-4.6-0.7-3.5c0.5,1.1,1.5,4,2.5,4.5
            c1,0.5,2.8-0.8,3.2-1.3c0.4-0.5,0.2-1.9-0.8-2.4C71.1,45.4,71.8,44.9,72.9,45.6z M66.2,42c-0.1,0.7,0.2,1.7-1.6,1.3
            c-1.8-0.4-1.8-1.4-2.5-0.7c-0.7,0.7-1.6,1.4-2.7,0.2c-1.1-1.1-0.9-1.5-1.5-1.6c-0.4-0.1-1.8-0.4-2.9,0c0.1-0.1,0.2-0.1,0.3-0.2
            c0.8-0.7,0.7-1,1.6-1.8c0.9-0.8,1.6-1.6,2.2-0.8c0.7,0.7,2,0.9,1.6,1.7c-0.5,0.8-0.2,1.3,0.4,0.8c0.6-0.5,1.4-0.8,0.8-1.5
            c-0.6-0.7-1.1-2.4-0.3-1.2c0.8,1.1,1.1,1.7,1.6,2.4c0.5,0.7,1,1.1,1.1,0.7c0.2-0.4-0.1-1.3,0.2-1.5c0.2-0.2,0,1.4,0.7,1.5
            C65.9,41.4,66.3,41.3,66.2,42z M68.1,39.2c-0.6-0.3-1.6,0-2.9,0.4c-1.3,0.4-0.3-0.9,0.3-1.8c0.5-0.8,0.2,0.2,1.4,0.3
            C68,38.2,68.7,39.5,68.1,39.2z M71,41.7c-0.2,0.2-0.7-1.1-0.9-1.8c-0.2-0.7-0.2-1.8,0.5-2.4c0.9-0.8,0.4,1,0.4,2
            C71,40.5,71.2,41.5,71,41.7z"
                  />
                  <path
                    style={{ fill: '#FFFFFF' }}
                    d="M38.2,64.9c1-0.4,1.9-2,2.6-3.2c0.7-1.1,2.6-1.6,3.2-3c0.6-1.4,0.3-3,0.7-3.8s1.2-2.4-0.7-3.3
            c-2-1-2.8-0.5-2.9-1.4c-0.1-0.9-0.6-1.9-2-2.3c-1.4-0.4-2.6-1.2-4.2-1.4c-1.6-0.2-1.9,1.1-2.7,0.4c-0.8-0.7-1.5-1.3-1.8-2.1
            c-0.3-0.8-1.3-0.3-1.2-0.8c0.1-0.5,1.4-1.9-0.1-1.4c-1.5,0.5-2.8,0.3-2.7-1c0.1-1.3,1.9-1.8,2.6-2c0.7-0.2,1.3,0.7,2.2,1.3
            c0.9,0.6,0.1-0.8,0.6-1.8c0.5-1,2.4-0.9,2.6-2.3c0.2-1.4-0.1-2.5,1.4-2.7c1.5-0.2,3,0.1,3.2-0.7c0.2-0.7-1.7,0.2-1.8-0.7
            s1.6-2.1,2.1-1.2c0.5,0.9,1.7,1,1.9,0.7c0.2-0.3,0-0.9-0.6-2.3c-0.6-1.4-1.1-1-1.6-2.5c-0.5-1.6-1.3,0.1-2.1-0.7
            c-0.8-0.8-1.8-2.5-2-1.1c-0.2,1.5-0.2,2.3-0.9,3.4c-0.7,1.1-1.1,0.2-1.7-0.5c-0.7-0.7-2.1-1.5-1.6-2.1c0.5-0.7,1-2.4,1.7-1.9
            c0.7,0.5,1.9,0.5,1.7-0.3c-0.1-0.7,0-1.1,0.2-1.4c0.2,0,0.3,0,0.4,0c0.2,0,0.3-0.3,0.6-0.6c0.3,0,0.6,0.1,0.6,0.9
            c0,1.5-0.2,1.9,1,2c1.1,0.2,2.5,0.2,2.4-0.5s0.3-0.6,0-1.8c0-0.1-0.1-0.2-0.1-0.3c0.6-0.1,1-0.3,1.5,0.3c0.6,0.8,0.4,2,0.4,2.6
            c0,0.6-0.3,1.9,0.5,3.5c0.8,1.6,0.9,2.7,1.7,1.6c0.8-1.1,2.8-3.1,3.8-3.3c1-0.2,2-0.6,2.5-1.4c0.5-0.8,0-1.6,0.8-2.2
            c0.8-0.6,0.7-1.3,0.9-2.2s2.5-0.9,1.5-1.4c-1-0.5-2.8-0.8-4.9-0.6c-2.1,0.2-6.3-0.5-8.1,1.1c-0.4,0.3-0.9,0.7-1.2,1.1
            c-0.2-0.1-0.5-0.3-0.8-0.4c0.2-0.1,0.4-0.3,0.7-0.4c1.2-0.7,3.8-1.8,1.1-1.5c-2.4,0.3-2.8-0.3-4.2,0.5c-0.3-0.1-0.6-0.2-0.9-0.1
            c-0.8,0.3-1,0.6-1,1.3c-0.5,0.3-0.8,0.4-1.1,0.5c-0.1-0.5-0.1-0.9-1-0.3c-0.1,0.1-0.2,0.1-0.2,0.2c-0.2-0.1-0.5-0.1-0.8,0.3
            c-0.4,0.7-0.5,0.6-0.4,0.8c-0.3,0.3-0.6,0.4-0.9-0.1c-0.3-0.4-0.1-1,0-1.4c-0.7,0.5-1.3,1.1-2,1.7c0.5,0.3,0.7,0.6,0.1,0.9
            c-0.3,0.1-0.7,0.1-1.1,0.1c-1.9,2-3.5,4.2-4.7,6.7c0.1,0.9,0.3,1.6,0,2.3c-0.5,1.1-1.1,3.2-0.6,4.6c0.5,1.4,1.2,4.4,1.9,4.5
            c0.7,0.1-0.5-3.3,0.2-2.2s0.7,2.6,1.8,3.7c1.1,1.1,2.7,0.9,3.9,2c1.2,1.1,2.5,2.6,3.6,2.5c0,0-0.1,0.8-0.7,2.2
            c-0.6,1.4-0.7,3,0.1,4c0.7,1,1.5,2.5,2.1,3.2c0.7,0.7,1.1,4.7,1,6.6c-0.1,1.2,0.2,3.5,1,5.2c0.5,0.2,0.9,0.4,1.4,0.5
            c0,0,0-0.1,0-0.1C36.5,68.2,37.2,65.3,38.2,64.9z"
                  />
                </g>
              </svg>
              <h1>The International Guide for Local Decision-Makers</h1>
              <p>
                <strong>
                  *This guide was developed at the beginning of 2020 and in the
                  early stages of the COVID-19 pandemic, before any treatments
                  or vaccines were available.
                </strong>
              </p>
              <p>
                The COVID-19 pandemic is disrupting daily life in communities
                around the world. This guide provides an initial strategic
                framework to reduce the impact of the outbreak in the near term,
                tailored to the needs and constraints of local leaders in low-
                and middle-income countries. The guide and checklists were
                developed by{' '}
                <a href="/about">
                  a team of deeply experienced experts and former public health
                  officials
                </a>
                , in consultation with officials in governments and NGOs
                operating around the world. Our focus has been on providing
                information for both slowing and suppressing the spread of the
                virus, and also on supporting community needs in settings where
                long-term lockdowns may not be viable.{' '}
              </p>
              <p>
                This guide is informed by existing guidance from international
                public health authorities, research findings, and lessons
                observed from countries that have been battling COVID-19 since
                January 2020.{' '}
                <strong>
                  It is intended to complement, but not in any way supplant,
                  advice and guidance from global, federal and local public
                  health and other authorities.
                </strong>
              </p>
            </div>
            <div className="right-col">
              <div>
                <a href="#action-0" className="introduction-feedback">
                  <span>Indicators of Progress</span>
                  <svg x="0px" y="0px" viewBox="0 0 76.45 76.45">
                    <circle
                      style={{ fill: '#FFFFFF' }}
                      cx="38.23"
                      cy="38.23"
                      r="38.23"
                    />
                    <path
                      style={{ fill: '#F27329' }}
                      d="M30.68,27.02c0,2.69-2.19,4.88-4.88,4.88c-2.69,0-4.88-2.19-4.88-4.88c0-2.69,2.19-4.88,4.88-4.88C28.49,22.14,30.68,24.33,30.68,27.02z M25.8,33.53c-2.69,0-4.88,2.19-4.88,4.88c0,2.69,2.19,4.88,4.88,4.88c2.69,0,4.88-2.19,4.88-4.88C30.68,35.71,28.49,33.53,25.8,33.53z M25.8,44.91c-2.69,0-4.88,2.19-4.88,4.88c0,2.69,2.19,4.88,4.88,4.88c2.69,0,4.88-2.19,4.88-4.88C30.68,47.1,28.49,44.91,25.8,44.91z M33.93,25.4v3.25h19.51V25.4H33.93zM33.93,40.03h19.51v-3.25H33.93V40.03z M33.93,51.41h19.51v-3.25H33.93V51.41z"
                    />
                  </svg>
                </a>
                <a href="#action-1" className="introduction-feedback">
                  <span>Link to Key Objectives</span>
                  <svg x="0px" y="0px" viewBox="0 0 76.45 76.45">
                    <circle
                      style={{ fill: '#FFFFFF' }}
                      cx="38.23"
                      cy="38.23"
                      r="38.23"
                    />
                    <path
                      style={{ fill: '#F27329' }}
                      d="M46.02,53c0.54,0.43,0.74,1.15,0.51,1.8c-0.23,0.65-0.84,1.08-1.52,1.08H28.84c-0.69,0-1.3-0.43-1.52-1.08c-0.23-0.65-0.02-1.37,0.51-1.8l2.46-1.97h13.26L46.02,53z M49.86,23.55H23.99c-1.78,0-3.23,1.45-3.23,3.23v19.4c0,1.78,1.45,3.23,3.23,3.23h25.86c1.78,0,3.23-1.45,3.23-3.23v-19.4C53.09,25,51.64,23.55,49.86,23.55z"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="/assets/documents/COVID16 International Guide for Local Decision-Makers.pdf"
                  className={
                    'introduction-download'
                    // + ' ' + styles.translationList
                  }
                  // onClick="ga('send', 'event', 'Document Download', 'Guide Download', 'Guide Download');"
                  onClick={() =>
                    trackCustomEvent({
                      category: 'Document Download',
                      action: 'Guide Download',
                      label: 'International Guide Download',
                    })
                  }
                  style={{ backgroundColor: '#F27329' }}
                >
                  <>
                    <span>Download the guide (pdf)</span>
                    <svg x="0px" y="0px" viewBox="0 0 76.45 76.45">
                      <circle
                        style={{ fill: '#FFFFFF' }}
                        cx="38.23"
                        cy="38.23"
                        r="38.23"
                      />
                      <path
                        style={{ fill: '#273349' }}
                        d="M53.01,43.04v11.23H20.93V43.04h9.85c0.72,2.76,3.2,4.81,6.19,4.81c2.99,0,5.47-2.05,6.19-4.81H53.01z M42.25,32.29l-3.68,3.68V22.19h-3.21v13.77l-3.68-3.68l-2.27,2.27l7.55,7.55l7.55-7.55L42.25,32.29z"
                      />
                    </svg>
                  </>
                  {/*                   <h4>Download English:</h4> */}
                  {/*                   <ul> */}
                  {/*                     <li> */}
                  {/*                       <a href="/assets/documents/COVID16 International Guide for Local Decision-Makers.pdf"> */}
                  {/*                         English */}
                  {/*                       </a> */}
                  {/*                     </li> */}
                  {/*                   </ul> */}
                  {/*  */}
                  {/*                   <h4>Choose Language:</h4> */}
                  {/*                   <ul> */}
                  {/*                     {translations.map(file => ( */}
                  {/*                       <li key={file.name}> */}
                  {/*                         <a */}
                  {/*                           href={`/assets/documents/translations/${file.name}`} */}
                  {/*                           target="_blank" */}
                  {/*                         > */}
                  {/*                           {file.language} */}
                  {/*                         </a> */}
                  {/*                       </li> */}
                  {/*                     ))} */}
                  {/*                   </ul> */}
                </a>
                <a
                  href="/contact/"
                  className="introduction-download"
                  style={{ backgroundColor: '#F27329' }}
                >
                  <span>Send us feedback</span>
                  <svg x="0px" y="0px" viewBox="0 0 76.45 76.45">
                    <circle
                      style={{ fill: '#FFFFFF' }}
                      cx="38.23"
                      cy="38.23"
                      r="38.23"
                    />
                    <path
                      style={{ fill: '#273349' }}
                      d="M52.13,19.95H24.97c-1.87,0-3.4,1.52-3.4,3.4v29.16c0,1.87,1.52,3.4,3.4,3.4h27.16c1.87,0,3.4-1.52,3.4-3.4V23.35C55.53,21.47,54,19.95,52.13,19.95z M43.64,45.42H28.36v-3.4h15.28V45.42z M48.73,38.63H28.36v-3.4h20.37V38.63z M48.73,31.84H28.36v-3.4h20.37V31.84z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <button aria-label="Expand Details" className="read-more-button">
              Read an introduction to the guide
            </button>
            <div className="read-more-hider" hidden>
              <div className="read-more-content overview">
                <div
                  className="navbar-logo"
                  style={{ marginTop: '2rem', marginBottom: '-2em' }}
                ></div>
                <h2>Overview for the Guide</h2>
                <p>
                  This guide is intended to inform and assist leaders and public
                  officials at any sub-national level with strategy and
                  decision-making on COVID-19 response. It is NOT a prescriptive
                  set of instructions; rather it provides a framework and advice
                  on how to tailor principles of outbreak control strategy,
                  disaster management, and evolving knowledge on COVID-19
                  dynamics to different local conditions.
                </p>
                <p>
                  <strong>
                    Given that this virus currently has no proven vaccines or
                    treatments, the most important way to limit COVID-19
                    mortality in the near to medium term is to slow and reduce
                    transmission – resulting in fewer cases, improving health
                    outcomes for those who do become sick and preventing
                    disruption to routine healthcare.
                  </strong>{' '}
                  However, the tactics for doing this must be tailored to the
                  risk and capacities of every country, and may look different
                  in high-income and low-income environments. Some pillars of
                  response strategy in developed countries may be less feasible
                  in low-income settings – notably prolonged “lockdowns” that
                  greatly limit human mobility and access to labor; widespread
                  testing; and sophisticated clinical case management. However,
                  even where it may be difficult to reduce transmission to zero,
                  it will be possible to significantly slow it through robust
                  application of traditional public health measures. Some
                  low-income settings may choose to abbreviate, adapt, or avoid
                  the “lockdown” phase used in other countries and pivot to
                  robust contact tracing paired with sustainable physical
                  distancing measures and efforts to provide additional
                  protection to high risk groups.
                </p>
                <p>
                  Measures to slow the spread of COVID-19 are vitally important,
                  even in countries where containment may be unrealistic.
                  COVID-19 cases requiring medical intervention are in addition
                  to the existing healthcare demand, and experience from China,
                  Italy, Brazil, the United Kingdom and the United States shows
                  that unchecked spread of the virus has the potential to
                  rapidly and abruptly overwhelm local health systems and
                  disrupt routine care. While the world’s understanding of
                  COVID-19 is still evolving, it is clear that the disease is
                  many times more dangerous than seasonal flu (which has a
                  fatality rate of approximately 0.1%). Recorded case fatality
                  rates in various countries have ranged from more than 10%
                  (Italy, United Kingdom, Spain) to low single digits (China,
                  US, Germany). South Korea, which has extensive testing, has
                  recorded a case fatality rate of approximately 2%, or 20 times
                  as high as seasonal flu. It is important to note that these
                  case fatality rates may be an overestimation if mild or
                  asymptomatic cases are not part of the calculation due to low
                  testing rates – and that high case fatality rates may
                  themselves be an indicator of widespread transmission
                  undetected by the existing testing infrastructure.
                </p>
                <p>
                  <strong>
                    During the early phase of a local community’s COVID-19
                    outbreak, all elements of an initial response strategy
                    should connect to the overarching goal of limiting deaths by
                    reducing overall transmission.
                  </strong>{' '}
                  Especially in environments where healthcare access and the
                  capacity of the existing healthcare infrastructure is limited,
                  it is vital to reduce overall number of cases in order to
                  minimize the number of severe cases and to ultimately reduce
                  the number of fatalities. Delayed actions to reduce
                  transmission allow the disease to spread widely, generating a
                  sudden surge in critically ill cases, eroding care quality,
                  and worsening fatality rates. The difference between these
                  scenarios may be as little as days or weeks.{' '}
                </p>
                <p>
                  Once transmission rates have been reduced and the burden on
                  the healthcare system has declined, it will eventually become
                  possible to consider incrementally relaxing the range of
                  distancing measures put in place to limit transmission.{' '}
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="/assets/images/Figure-2-expanded.svg"
                    alt="FA conceptual overview of the impact of applied control measures in reducing the rate of spread of COVID-19, and how they can, hypothetically, limit the burden on the health system."
                  />
                  <figcaption>
                    <strong>Figure 1.</strong> A conceptual overview of the
                    impact of applied control measures in reducing the rate of
                    spread of COVID-19, and how they can, hypothetically, limit
                    the burden on the health system.
                  </figcaption>
                </figure>
                <h2>Phases of COVID-19 in a Community</h2>
                <p>
                  If increased transmission occurs, drastic measures may be
                  required to contain it. These measures must be calibrated to
                  the specific risks and capacities of the country or community.
                  The “lockdown” approaches applied to halt explosive
                  transmission in wealthy countries may not be replicable in
                  developing countries, where the populations over the age of 65
                  are smaller, where public health and disease surveillance
                  initiatives often rely on in-person community outreach, and
                  where there is less ability to cushion the economic and food
                  security shocks a lockdown imposes.{' '}
                  <strong>
                    Developing countries may instead pursue sustainable
                    mitigation: scalable measures to slow transmission such as
                    physical distancing measures and large-scale contact
                    tracing, linked to supportive quarantine and isolation of
                    cases and identified contacts.
                  </strong>
                </p>

                <p>
                  While many graphics show only a single rise and fall of
                  caseload, it is likely that there will be multiple stages of
                  an outbreak with multiple curves, particularly in the
                  mitigation and suppression phase following the initial surge
                  in cases. Absent sufficient testing, effective contact
                  tracing, and available hospital capacity, an initial
                  plateauing or decline in cases is not sufficient basis for
                  relaxing physical distancing or other containment measures.
                  Communities with declining cases may suddenly see an increase
                  due to a variety of factors including, but not limited to, an
                  increase in testing or a change in reporting requirements, a
                  premature relaxation of control measures, and/or importation
                  of new cases.{' '}
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>{' '}
      <section className={styles.main}>
        <Guide content={guideRestructured} />
      </section>
    </Layout>
  )
}

export default LmicGuide
