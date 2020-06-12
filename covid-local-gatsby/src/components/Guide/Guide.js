import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import BlueExpandBox from '../BlueExpandBox/BlueExpandBox'

import styles from './Guide.module.scss'

const CheckboxState = React.createContext({})

const alpha = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
]

const GuideObjective = props => (
  <BlueExpandBox className="expanding-boxes">
    <header>
      <div
        className={styles.number + ' number'}
        data-number={props.objectiveNumber + 1}
      >
        {props.objectiveNumber + 1}
      </div>
      <h2>{props.objective}</h2>
      <h3>{props.metadata.title}</h3>
    </header>
    <div className={styles.content}>
      <p>{props.metadata.description}</p>
      <div className={styles.questions}>{props.children}</div>
      <div className={styles.resources}>
        <h3>Resources</h3>
        {props.metadata.resources.map(link => (
          <OutboundLink key={link.href} href={link.href}>
            {link.content}
          </OutboundLink>
        ))}
      </div>
    </div>
  </BlueExpandBox>
)

const PriorityActions = props => (
  <div className={styles.priorityActions}>
    <h3>{props.section}</h3>
    <ul>{props.children}</ul>
  </div>
)

const GuideAction = props => (
  <li>
    {props.question}
    {props.children}
  </li>
)

const OperationalRequirements = props => (
  <div className={styles.operationalRequirements}>
    <h3>{props.section}</h3>
    {props.children}
  </div>
)

const AdditionalConsiderations = props => (
  <div className={styles.additionalConsiderations}>
    <h3>{props.section}</h3>
    {props.children}
  </div>
)

const GuideRequirement = props => {
  const checkboxState = React.useContext(CheckboxState)
  return (
    <>
      {props.subquestions.length > 0 ? (
        <>
          <label>
            <span className={styles.checkbox}></span>
            <span className={styles.number}>{props.questionNumber + 1}. </span>
            <span className={styles.labelText}>{props.question}</span>
          </label>
          <div className={styles.subquestions}>
            {props.subquestions.map((subquestion, subquestionNumber) => (
              <GuideSubQuestion
                {...{ subquestion, subquestionNumber }}
                id={props.id + subquestionNumber}
                key={subquestionNumber}
              />
            ))}
          </div>
        </>
      ) : (
        <label>
          <span className={styles.checkbox}>
            <input
              name={props.id}
              type="checkbox"
              checked={checkboxState.checkboxStatus[props.id]}
              onChange={e => checkboxState.changeCheckboxStatus(props.id, e)}
            />
          </span>
          <span className={styles.number}>{props.questionNumber + 1}. </span>
          <span className={styles.labelText}>{props.question}</span>
        </label>
      )}
    </>
  )
}

const GuideSubQuestion = props => {
  const checkboxState = React.useContext(CheckboxState)
  return (
    <label>
      <span className={styles.checkbox}>
        <input
          name={props.id}
          type="checkbox"
          checked={checkboxState.checkboxStatus[props.id]}
          onChange={e => checkboxState.changeCheckboxStatus(props.id, e)}
        />
      </span>
      <span className={styles.number}>{alpha[props.subquestionNumber]}. </span>
      <span className={styles.labelText}>{props.subquestion}</span>
    </label>
  )
}

const Resources = props => (
  <div className={styles.resources}>
    <h3>{props.section}</h3>
    {props.children}
  </div>
)

const GuideIndicatorsSection = props => (
  <BlueExpandBox className={props.className + ' expanding-boxes'}>
    <header>
      <div className={'no-number'} data-number={0}></div>
      <h2>Indicators of Progress</h2>
    </header>
    <div className={styles.content}>
      <div className={styles.questions}>
        <div
          className="implementation-metrics"
          style={{ margin: 0, paddingTop: 0 }}
        >
          {props.children}
          <h3>Progress: 0%</h3>
        </div>
      </div>
    </div>
  </BlueExpandBox>
)

const GuideIndicator = props => (
  <>
    {props.subquestions.length > 0 ? (
      <>
        <div className="header">
          <div className="number">{props.questionNumber}</div>
          <p>{props.question}</p>
        </div>
        {props.subquestions.map((subquestion, subquestionNumber) => (
          <div key={props.questionNumber} className="radio">
            <div>
              <div className="radio-li">{alpha[subquestionNumber]}</div>
              <p>{subquestion}</p>
            </div>
          </div>
        ))}
      </>
    ) : (
      <div className="header radio">
        <div className="number">{props.questionNumber}</div>
        <p>{props.question}</p>
      </div>
    )}
  </>
)

const Guide = props => {
  // set up in itial checkbox state
  const checkboxStatusSetup = {}
  Object.entries(props.content.questions).map(
    ([, metadata], objectiveNumber) => {
      Object.entries(metadata.sections).map(([, questions], sectionNumber) => {
        Object.entries(questions).map(([, subquestions], questionNumber) => {
          if (subquestions.length === 0) {
            checkboxStatusSetup[
              '' + objectiveNumber + sectionNumber + questionNumber
            ] = false
          }

          if (subquestions.length > 0) {
            subquestions.map((subquestion, subquestionNumber) => {
              checkboxStatusSetup[
                '' +
                  objectiveNumber +
                  sectionNumber +
                  questionNumber +
                  subquestionNumber
              ] = false
            })
          }
        })
      })
    }
  )

  // checkbox state
  const [checkboxStatus, setCheckboxStatus] = React.useState(
    checkboxStatusSetup
  )

  // load previous checkbox state from storage if it exists
  React.useEffect(() => {
    if (window.localStorage.getItem('intlGuideCheckboxes') !== null) {
      setCheckboxStatus(
        JSON.parse(window.localStorage.getItem('intlGuideCheckboxes'))
      )
    }
  }, [])

  // update state and save to localstorage
  const changeCheckboxStatus = (id, e) => {
    setCheckboxStatus({
      ...checkboxStatus,
      [id]: e.target.checked,
    })
    window.localStorage.setItem(
      'intlGuideCheckboxes',
      JSON.stringify({
        ...checkboxStatus,
        [id]: e.target.checked,
      })
    )
  }

  return (
    <CheckboxState.Provider value={{ checkboxStatus, changeCheckboxStatus }}>
      <div className="guide">
        <nav className={styles.documentNav + ' document-nav'}></nav>
      </div>

      <section className={styles.guide}>
        <GuideIndicatorsSection className="guide">
          {// Map over Indicators of Progress
          Object.entries(props.content.indicators).map(
            ([question, subquestions], questionNumber) => (
              <GuideIndicator
                key={question}
                {...{ question, subquestions, questionNumber }}
              ></GuideIndicator>
            )
          )}
        </GuideIndicatorsSection>
        {// Map over objectives
        Object.entries(props.content.questions).map(
          ([objective, metadata], objectiveNumber) => (
            <GuideObjective
              key={objectiveNumber}
              {...{ objective, objectiveNumber, metadata }}
            >
              {// Map over sections
              Object.entries(metadata.sections).map(
                ([section, questions], sectionNumber) => (
                  <React.Fragment key={sectionNumber}>
                    {
                      {
                        // Render each section based on the section name
                        // by matching the section name to this object.
                        // Writing this all in the render function was probably
                        // not the best approach, should split logic and content better...
                        'Priority Actions': (
                          <PriorityActions {...{ section }}>
                            {// Map over questions
                            Object.entries(questions).map(
                              (question, questionNumber) => (
                                <GuideAction
                                  {...{ question, questionNumber }}
                                  key={questionNumber}
                                  id={
                                    '' +
                                    objectiveNumber +
                                    sectionNumber +
                                    questionNumber
                                  }
                                ></GuideAction>
                              )
                            )}
                          </PriorityActions>
                        ),
                        'Operational Requirements': (
                          <OperationalRequirements
                            {...{ section }}
                            key={'' + objectiveNumber + sectionNumber}
                          >
                            {// Map over questions
                            Object.entries(questions).map(
                              ([question, subquestions], questionNumber) => (
                                <GuideRequirement
                                  {...{
                                    question,
                                    questionNumber,
                                    subquestions,
                                  }}
                                  key={questionNumber}
                                  id={
                                    '' +
                                    objectiveNumber +
                                    sectionNumber +
                                    questionNumber
                                  }
                                />
                              )
                            )}
                          </OperationalRequirements>
                        ),
                        'Additional Considerations': (
                          <AdditionalConsiderations
                            {...{ section }}
                            key={'' + objectiveNumber + sectionNumber}
                          >
                            {// Map over questions
                            Object.entries(questions).map(
                              ([question, subquestions], questionNumber) => (
                                <GuideRequirement
                                  {...{
                                    question,
                                    questionNumber,
                                    subquestions,
                                  }}
                                  key={questionNumber}
                                  id={
                                    '' +
                                    objectiveNumber +
                                    sectionNumber +
                                    questionNumber
                                  }
                                />
                              )
                            )}
                          </AdditionalConsiderations>
                        ),
                      }[section]
                    }
                  </React.Fragment>
                )
              )}
            </GuideObjective>
          )
        )}
      </section>
    </CheckboxState.Provider>
  )
}

export default Guide
