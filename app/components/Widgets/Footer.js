import React from 'react'
import styles from './Footer.css'

export default () => (
  <footer className={styles.root}>
    <p>
      Data from <a href="http://bin.arnastofnun.is/" target="_blank">Beygingarlýsing íslensks nútímamáls</a>, <a href="https://github.com/vthorsteinsson/Reynir" target="_blank">Reynir</a> and <a href="http://nlp.cs.ru.is/icenlp/?lang=en" target="_blank">IceNLP</a>.
    </p>
    <p>
      Tala.is is an experimental project by <a href="http://davidblurton.com" target="_blank">David Blurton</a>.
    </p>
    <p>
      Follow <a href="https://twitter.com/talaislensku">@talaislensku</a> for updates.
    </p>
  </footer>
)
