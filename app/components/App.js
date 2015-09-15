import React from 'react'
import styles from './App.css'
import {Search} from './Search'
import {Logo, Footer} from './Widgets'
import {Result} from './Result'

export default class App extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.content}>
          <Logo />
          <Search />
          <Result />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}
