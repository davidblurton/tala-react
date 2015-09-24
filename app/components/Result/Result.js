import React from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'
import styles from './Result.css'

let canvas = document.createElement('canvas')
const wordMargin = 20

function measureText(text) {
    // re-use canvas object for better performance
  var context = canvas.getContext('2d')
  context.font = '72px helvetica, arial, sans-serif'
  var metrics = context.measureText(text)
  return metrics.width + wordMargin
}

@connect(({Sentence}) => ({Sentence}))
export default class Result extends React.Component {

  render() {
    let {sentence} = this.props.Sentence.toJS()

    if (!sentence) {
      return null
    }

    let wordWidths = sentence.tokenized.map(word => measureText(word))

    return (
      <div className={styles.root}>
        <div className={styles.words}>
          {sentence.tokenized.map((word, index) => {
            let rule = sentence.rules.filter(x => x.targetIndex === index)[0]
            let unrecognized = !sentence.recognized[index] && !rule.replacements[0]

            let wordClasses = classNames({
              [styles.word]: true,
              [styles.correction]: rule && !rule.isCorrect,
              [styles.unrecognized]: unrecognized
            })

            let display = rule && !rule.isCorrect ? rule.replacements[0] : word

            return (
              <div key={index} className={styles.unit}>
                <div className={wordClasses}>{display}</div>
                { rule && !unrecognized ? (
                  <div className={styles.explanation} style={{
                    left: -(wordWidths[rule.modifierIndex] / 2 + wordWidths.slice(rule.modifierIndex + 1, rule.targetIndex).reduce((x, y) => x + y, 0)),
                    right: wordWidths[rule.targetIndex] / 2 + 10}}>
                    <div className={styles.rule}>
                      <p>{rule.isCorrect ? rule.rule : `${word} → ${rule.replacements[0]}`}</p>
                      <p>{rule.explanation}</p>
                    </div>
                  </div>
                ) : null }
                { unrecognized ? <div className={styles.unrecognizedWord}>Unknown word</div> : null }
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
