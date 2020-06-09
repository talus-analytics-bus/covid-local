import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const LmicGuide = () => {
  const {
    questions: { edges: questions },
    text: { edges: text },
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
      }
    `
  )

  questions.reverse()

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
    if (table !== objective) {
      const metadata = text.filter(entry =>
        entry.node.data.objective.includes(table)
      )[0].node.data

      objective = table
      guideRestructured[objective] = {
        sections: {},
        title: metadata.title,
        description: metadata.description,
      }
    }

    // create new section object
    if (data.Section !== section) {
      section = data.Section
      guideRestructured[objective].sections[section] = {}
    }

    // create new guiding question, with an array for subquestions
    if (data.Guiding_Question !== guidingQuestion) {
      guidingQuestion = data.Guiding_Question
      guideRestructured[objective].sections[section][guidingQuestion] = []
    }

    // create new subquestion in the array
    if (
      (data.Associated_subquestions !== subquestion) &
      (data.Associated_subquestions !== 'N/A')
    ) {
      subquestion = data.Associated_subquestions
      guideRestructured[objective].sections[section][guidingQuestion].push(
        data.Associated_subquestions
      )
    }
  })

  console.log(guideRestructured)

  return (
    <>
      <h1>Guide</h1>
      {Object.entries(guideRestructured).map(([objective, metadata]) => (
        <section key={objective}>
          <h2>{objective}</h2>
          <h3>{metadata.title}</h3>
          <p>{metadata.description}</p>
          {Object.entries(metadata.sections).map(([section, questions]) => (
            <div key={section}>
              <h3>{section}</h3>
              <ol>
                {Object.entries(questions).map(([question, subquestions]) => (
                  <li key={question}>
                    {question}
                    {subquestions.length > 0 && (
                      <ol>
                        {subquestions.map(subquestion => (
                          <li key={subquestion}>{subquestion}</li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      ))}
    </>
  )
}

export default LmicGuide
