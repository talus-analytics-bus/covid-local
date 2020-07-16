import React from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

import Layout from '../components/Layout/Layout'

import styles from '../styles/contact.module.scss'

const Contact = () => {
  const [successMessage, setSuccessMessage] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [submitButtonText, setSubmitButtonText] = React.useState('Submit')
  // const [type, setType] = React.useState('')
  const [topic, setTopic] = React.useState('')

  React.useEffect(() => {
    setTopic(window.location.hash.replace(/#/g, '').replace(/_/g, ' '))
  }, [setTopic])

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
      data['subject'] = 'New message from COVID-Local Reachback'
      data['site'] = 'COVID-Local Reachback'
      data['Topic'] = topic
      setErrorMessage('')
      setSubmitButtonText('Submitting...')
      axios
        .post(
          'https://p0hkpngww3.execute-api.us-east-1.amazonaws.com/submit',
          JSON.stringify(data),
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then(() => {
          setSuccessMessage(
            <h2 className={styles.success}>Question Submitted</h2>
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
        <h1>{topic}</h1>
      </header>

      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles.formRow}>{errorMessage}</div>
        <div className={styles.formRow}>
          <label className={styles.firstName} htmlFor="First_Name">
            First Name*
            <input type="text" id="First_Name" name="First_Name" />
          </label>
          <label className={styles.lastName} htmlFor="Last_Name">
            Last Name*
            <input type="text" id="Last_Name" name="Last_Name" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.email} htmlFor="Email">
            Email*
            <input type="text" id="Email" name="Email" />
          </label>
          <label className={styles.org} htmlFor="Organization">
            Organization*
            <input type="text" id="Organization" name="Organization" />
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
