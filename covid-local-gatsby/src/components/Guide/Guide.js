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

// Function to build the svg background image
// with any hex color necessary
const createNumberSVG = color => {
  color = color.split('#')[1]
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 150.77 86.32' style='enable-background:new 0 0 150.77 86.32;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23273349;%7D .st1%7Bfill:%23${color};mix-blend-mode:screen;%7D%0A%3C/style%3E%3Cpath class='st0' d='M0,43.16L0,43.16C0,19.42,19.42,0,43.16,0h64.45c23.74,0,43.16,19.42,43.16,43.16v0 c0,23.74-19.42,43.16-43.16,43.16H43.16C19.42,86.32,0,66.9,0,43.16z'/%3E%3Cpath class='st1' d='M16.3,43L16.3,43c0-3.73,3.05-6.78,6.78-6.78h36.73c3.73,0,6.78,3.05,6.78,6.78v0 c0,3.73-3.05,6.78-6.78,6.78H23.08C19.35,49.78,16.3,46.73,16.3,43z'/%3E%3Cpath class='st1' d='M41.57,17.04L41.57,17.04c3.73,0,6.78,3.05,6.78,6.78v36.73c0,3.73-3.05,6.78-6.78,6.78h0 c-3.73,0-6.78-3.05-6.78-6.78V23.81C34.79,20.09,37.84,17.04,41.57,17.04z'/%3E%3Cpath class='st1' d='M24.36,24.6L24.36,24.6c2.64-2.64,6.95-2.64,9.58,0l25.97,25.97c2.64,2.64,2.64,6.95,0,9.58l0,0 c-2.64,2.64-6.95,2.64-9.58,0L24.36,34.18C21.72,31.55,21.72,27.23,24.36,24.6z'/%3E%3Cpath class='st1' d='M60.58,24.1L60.58,24.1c2.64,2.64,2.64,6.95,0,9.58L34.61,59.66c-2.64,2.64-6.95,2.64-9.58,0l0,0 c-2.64-2.64-2.64-6.95,0-9.58L51,24.1C53.63,21.47,57.95,21.47,60.58,24.1z'/%3E%3C/svg%3E")`
}

// Function to build the svg background image
// with any hex color necessary
const createNoNumberSVG = color => {
  color = color.split('#')[1]
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0px' y='0px' viewBox='0 0 105.54 60.42' style='enable-background:new 0 0 105.54 60.42;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23273349;%7D .st1%7Bfill:%23${color};mix-blend-mode:screen;%7D %3C/style%3E%3Cpath class='st0' d='M0,30.21L0,30.21C0,13.6,13.6,0,30.21,0h45.11c16.62,0,30.21,13.6,30.21,30.21v0c0,16.62-13.6,30.21-30.21,30.21H30.21C13.6,60.42,0,46.83,0,30.21z'/%3E%3Cpath class='st1' d='M35.41,30.1L35.41,30.1c0-2.61,2.13-4.74,4.74-4.74h25.71c2.61,0,4.74,2.13,4.74,4.74v0c0,2.61-2.13,4.74-4.74,4.74H40.16C37.55,34.84,35.41,32.71,35.41,30.1z'/%3E%3Cpath class='st1' d='M53.1,11.93L53.1,11.93c2.61,0,4.74,2.13,4.74,4.74v25.71c0,2.61-2.13,4.74-4.74,4.74h0c-2.61,0-4.74-2.13-4.74-4.74V16.67C48.35,14.06,50.49,11.93,53.1,11.93z'/%3E%3Cpath class='st1' d='M41.05,17.22L41.05,17.22c1.85-1.85,4.86-1.85,6.71,0L65.94,35.4c1.85,1.85,1.85,4.86,0,6.71l0,0c-1.85,1.85-4.86,1.85-6.71,0L41.05,23.93C39.21,22.08,39.21,19.06,41.05,17.22z'/%3E%3Cpath class='st1' d='M66.41,16.87L66.41,16.87c1.85,1.85,1.85,4.86,0,6.71L48.23,41.76c-1.85,1.85-4.86,1.85-6.71,0l0,0c-1.85-1.85-1.85-4.86,0-6.71L59.7,16.87C61.54,15.03,64.56,15.03,66.41,16.87z'/%3E%3C/svg%3E")`
}

const GuideObjective = props => (
  <BlueExpandBox className="expanding-boxes" flagColor={props.keyColor}>
    <header>
      <a
        id={'action-' + (props.objectiveNumber + 1)}
        className="page-anchor"
      ></a>
      <div
        className={styles.number + ' number'}
        style={{ backgroundImage: createNumberSVG(props.keyColor) }}
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
  <BlueExpandBox
    className={props.className + ' expanding-boxes'}
    flagColor={'#F27329'}
  >
    <header>
      <a id={'action-0'} className="page-anchor"></a>
      <div
        className={'no-number'}
        data-number={0}
        style={{ backgroundImage: createNoNumberSVG(props.keyColor) }}
      ></div>
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
    {props.metadata.subQuestions.length > 0 ? (
      <>
        <div className="header">
          <div
            className="number"
            style={{ backgroundImage: createNumberSVG(props.keyColor) }}
          >
            {props.metadata.number}
          </div>
          <p>{props.question}</p>
        </div>
        {props.metadata.subQuestions.map((subquestion, subquestionNumber) => (
          <div key={subquestionNumber} className="radio">
            <div>
              <div className="radio-li">{alpha[subquestionNumber]}</div>
              <p>{subquestion}</p>
            </div>
          </div>
        ))}
      </>
    ) : (
      <div className="header radio">
        <div
          className="number"
          style={{ backgroundImage: createNumberSVG(props.keyColor) }}
        >
          {props.questionNumber}
        </div>
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
      <div className="guide intl">
        <nav className={styles.documentNav + ' document-nav'}></nav>
      </div>

      <section className={styles.guide}>
        <GuideIndicatorsSection className="guide" keyColor={'#F27329'}>
          {// Map over Indicators of Progress
          Object.entries(props.content.indicators).map(
            ([question, metadata], questionNumber) => (
              <GuideIndicator
                key={question}
                {...{ question, metadata, questionNumber }}
                keyColor={'#F27329'}
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
              keyColor={'#F27329'}
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
