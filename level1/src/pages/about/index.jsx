import React from 'react'
import { Link } from 'react-router-component'
import styles from './style'

export default class About extends React.Component {

  render() {
    return (
      <div className={styles.about}>
          <div className={styles.desc}>
            About page
          </div>
          <ul>
            <li>
                <Link href="/" className={styles.link}>Back to home</Link>
            </li>
          </ul>
      </div>
    )
  }

}
