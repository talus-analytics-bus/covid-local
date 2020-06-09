import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const LmicGuide = () => {
  const {
    allAirtable: { edges: guideData },
  } = useStaticQuery(
    graphql`
      query guideData {
        allAirtable(filter: { table: { regex: "/^Key Objective #[1-9]/" } }) {
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
      }
    `
  )
  guideData.reverse()

  const guideRestructured = {}
  let objective = ''
  let section = ''
  let guidingQuestion = ''
  let subquestion = ''

  guideData.forEach(edge => {
    if (edge.node.table !== objective) {
      guideRestructured[edge.node.table] = {}
      objective = edge.node.table
    }
    if (edge.node.data.Section !== section) {
      guideRestructured[edge.node.table][edge.node.data.Section] = {}
      section = edge.node.data.Section
    }
    if (edge.node.data.Guiding_Question !== guidingQuestion) {
      guideRestructured[edge.node.table][edge.node.data.Section][
        edge.node.data.Guiding_Question
      ] = []
      guidingQuestion = edge.node.data.Guiding_Question
    }
    if (
      (edge.node.data.Associated_subquestions !== subquestion) &
      (edge.node.data.Associated_subquestions !== 'N/A')
    ) {
      guideRestructured[edge.node.table][edge.node.data.Section][
        edge.node.data.Guiding_Question
      ].push(edge.node.data.Associated_subquestions)
      subquestion = edge.node.data.Associated_subquestions
    }
  })

  return (
    <>
      <h1>Guide</h1>
      {Object.entries(guideRestructured).map(([objective, sections]) => (
        <section key={objective}>
          <h2>{objective}</h2>
          {Object.entries(sections).map(([section, questions]) => (
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
