import React from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

import Layout from '../components/Layout/Layout'

import styles from '../styles/contact.module.scss'

const Contact = () => {
  const [successMessage, setSuccessMessage] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [submitButtonText, setSubmitButtonText] = React.useState('Submit')
  const [type, setType] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))

    const emptyfields = Object.values(data).some(field => field === '')

    if (emptyfields) {
      setErrorMessage(
        <h2 className={styles.error}>
          Some required fields below are not filled in, please complete before
          submitting.
        </h2>
      )
    } else {
      setErrorMessage('')
      setSubmitButtonText('Submitting...')
      axios
        .post(
          'https://jcvp6imvv9.execute-api.us-east-1.amazonaws.com/submit',
          JSON.stringify(data),
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then(() => {
          setSuccessMessage(
            <h2 className={styles.success}>Feedback Submitted</h2>
          )
          setSubmitButtonText('Submit')
        })
        .catch(error =>
          setErrorMessage(
            'There was an error submitting your request, please check your network connection and try again.'
          )
        )
    }

    //
  }

  return (
    <Layout>
      <Helmet
        title={`Contact the COVID Local team`}
        meta={[
          {
            name: 'description',
            content: `Contact the COVID Local team`,
          },
        ]}
      />
      <header className={styles.header}>
        <h1>Contact us</h1>
      </header>

      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <p>
            We welcome questions about the Frontline Guide, feedback on its
            contents, input on how COVID-Local efforts can support your
            community, or other questions or comments, using the form below.
          </p>
          <p>
            Your personal and contact information will only be used to respond
            to your input. Do not submit any proprietary or protected
            information via this form.
          </p>
        </div>
        <div className={styles.formRow}>{errorMessage}</div>
        <div className={styles.formRow}>
          <label className={styles.firstName} htmlFor="firstName">
            First Name*
            <input type="text" id="firstName" name="firstName" />
          </label>
          <label className={styles.lastName} htmlFor="lastName">
            Last Name*
            <input type="text" id="lastName" name="lastName" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.email} htmlFor="email">
            Email*
            <input type="text" id="email" name="email" />
          </label>
          <label className={styles.org} htmlFor="org">
            Organization*
            <input type="text" id="org" name="org" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.type} htmlFor="type">
            Topic*
            <select
              name="type"
              onChange={e => {
                setType(e.target.value)
                console.log(e.target.value)
              }}
            >
              <option value="Comment">General comment</option>
              <option value="Feedback on the Guide">
                Feedback on the Guide
              </option>
              <option value="Question">Submit question</option>
            </select>
          </label>

          <label
            className={styles.type}
            htmlFor="type"
            style={
              type === 'Question'
                ? { visibility: 'visible' }
                : { visibility: 'hidden' }
            }
          >
            Comment category*
            <select name="category">
              <option value="General">General</option>
              <option value="Medical Capacity">Medical Capacity</option>
              <option value="Logistics">Logistics / PPE Suppy Chain</option>
              <option value="Testing, Contact Tracing, Surveilance">
                Disease Testing, Contact Tracing, & Surveilance
              </option>
              <option value="Modeling">Modeling</option>
              <option value="Vulnerable Populations, Low Resource Settings">
                Vulnerable Populations, Low Resource Settings
              </option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.body} htmlFor="body">
            Comment or question*
            <textarea type="text" id="body" name="body" maxLength="1200" />
            <p>200 Words</p>
          </label>
        </div>
        <div className={styles.formRow}>
          <button className={styles.submit}>{submitButtonText}</button>
        </div>
        <div className={styles.formRow}>{successMessage}</div>
      </form>
    </Layout>
  )
}

export default Contact
