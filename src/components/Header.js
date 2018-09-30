import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.css'
import withStyle from '../withStyle'

class Header extends React.Component {
  render () {
    return (
      <div className={styles.test}>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        I am Header.
      </div>
    )
  }
}

export default withStyle(Header, styles)