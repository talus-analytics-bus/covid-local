import React from 'react'

import styles from './MetricsCheckbox.module.scss'

const Checkbox = props => {
  return (
    <label className={styles.label}>
      <input
        name={props.id}
        type="checkbox"
        // checked={props.checked}
        // onChange={props.onChange}
      />
      {props.children}
    </label>
  )
}

export default Checkbox
