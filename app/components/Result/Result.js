import React from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'
import styles from './Result.css'

let canvas = document.createElement("canvas")

function measureText(text) {
    // re-use canvas object for better performance
  var context = canvas.getContext("2d")
  context.font = '72px helvetica, arial, sans-serif'
  var metrics = context.measureText(text)
  return metrics.width
}

@connect(({Sentence}) => ({Sentence}))
export default class Result extends React.Component {

  render() {
    let {sentence} = this.props.Sentence.toJS()

    if (!sentence) {
      return null
    }

    return (
      <div className={styles.root}>
        <div className={styles.words}>
          {sentence.tokenized.map((word, index) => {
            let correction = sentence.corrections.filter(correction => correction.index === index)[0]

            let wordClasses = classNames({
              [styles.word]: true,
              [styles.correction]: !!correction,
            })

            let display = correction && correction.replacements[0] || word

            measureText(word)

            return (
              <div key={index} className={styles.unit}>
                <div className={wordClasses}>{display}</div>
                { correction ? (
                  <div className={styles.explanation} style={{left: -measureText(sentence.tokenized[index - 1]) / 2 - 20, right: measureText(word) / 2 + 30}}>
                    <div className={styles.rule}>
                      <p>{`${word} → ${correction.replacements[0]}`}</p>
                      <p>{correction.explanation}</p>
                    </div>
                  </div>
                ) : null }
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
