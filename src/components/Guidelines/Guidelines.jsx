import React from 'react'
import covidGuidelines from '../../assets/covid-guidelines.pdf'
import styles from './guidelines.module.css'

const Guidelines = () => {
  return (
    <div className={styles.container}>
        <a href={covidGuidelines} target="_blank" rel="noopener noreferrer" className={styles.guidelines}>Important Guidelines</a>
    </div>
  )
}

export default Guidelines