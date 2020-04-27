import React from 'react';
import axios from 'axios';

import Layout from '../components/Layout/Layout';

import styles from '../styles/contact.module.scss';

const Contact = props => {

  const [message, setMessage] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);

    axios.post('http://0.0.0.0:8080/submit', data)
      .then(() => setMessage('Feedback Submitted'))
      .catch((error) => console.log(error))
  } 


  return (
    <Layout>

      <header className={styles.header}>
        <h1>Contact us</h1>
      </header>

      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <p>We welcome questions about the Frontline Guide, feedback on its contents, input on how COVID-Local efforts can support your community, or other questions or comments, using the form below.</p>
          <p>Your personal and contact information will only be used to respond to your input. Do not submit any proprietary or protected information via this form.</p>
        </div>
        <div className={styles.formRow}>
          <label className={styles.firstName} htmlFor="firstName">
            First Name
            <input type="text" id="firstName" name="firstName" />
          </label>
          <label className={styles.lastName} htmlFor="lastName">
            Last Name
            <input type="text" id="lastName" name="lastName" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.email} htmlFor="email">
            Email
            <input type="text" id="email" name="email" />
          </label>
          <label className={styles.org} htmlFor="org">
            Organization
            <input type="text" id="org" name="org" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.type} htmlFor="type">
            Type of comment
            <select name="type">
              <option value="contact">Contact us</option>
              <option value="feedback">Feedback on the guide</option>
              <option value="question">Submit question for reachback</option>
            </select>
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.body} htmlFor="body">
            Body
            <textarea type="text" id="body" name="body" />
            <p>500 Characters</p>
          </label>
        </div>
        <div className={styles.formRow}>
          <button className={styles.submit}>Submit</button>
        </div>
        <div className={styles.formRow}>
          <p>{message}</p>
        </div>
      </form>
    </Layout>
  )
}


export default Contact;