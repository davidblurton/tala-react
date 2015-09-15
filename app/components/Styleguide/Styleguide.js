import React from 'react'
import styles from './Styleguide.css'

import {
    Button,
    Heading,
    Select,
    TextArea,
    TextInput,
} from '../Widgets'

export default class Styleguide extends React.Component {
  render() {
    return (
      <div className={styles.root}>

        <Heading title="Typography" />

        <div className={styles.group}>
          <Heading lined title="Headings" />

          <div className={styles.widget}>
            <div className={styles.result}>
              <Heading hero title="Welcome!" />
            </div>
            <div className={styles.definition}>
              <pre>
                {`<Heading hero title="Welcome!" />`}
              </pre>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={styles.result}>
              <Heading title="Pick your Lemonade URL" />
            </div>
            <div className={styles.definition}>
              <pre>
                {`<Heading title="Pick your Lemonade URL" />`}
              </pre>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={styles.result}>
              <Heading lined title="Influencers" />
            </div>
            <div className={styles.definition}>
              <pre>
                {`<Heading lined title="Influencers" />`}
              </pre>
            </div>
          </div>
        </div>

        <Heading title="Forms" />

        <div className={styles.group}>

          <Heading lined title="Selects" />
          <div className={styles.widget}>
            <div className={styles.result}>
              <Select label='Location' name="input" options={[{name: 'United Kingdom', value: 'UK'}, {name: 'Iceland', value: 'IS'}]}>
              </Select>
            </div>
            <div className={styles.definition}>
              <pre>
                {`<Select name="input" options={options} />`}
              </pre>
            </div>
          </div>
          <Heading lined title="Inputs" />
          <div className={styles.widget}>
            <div className={styles.result}>
              <TextInput placeholder="Placeholder" label="Label text" name="input" />
            </div>
            <div className={styles.definition}>
              <pre>
                {`<TextInput label="Label text"  placeholder="Placeholder" />`}
              </pre>
            </div>
          </div>

          <Heading lined title="TextArea" />

          <div className={styles.widget}>
            <div className={styles.result}>
              <TextArea name="input" value="Some initial value..." maxLength="200" label="Description" />
            </div>
            <div className={styles.definition}>
              <pre>
                {`<TextArea name="input" value="Some initial value..." maxLength="200" label="Description" />`}
              </pre>
            </div>
          </div>
        </div>

        <div className={styles.group}>

          <Heading lined title="Buttons" />
          <div className={styles.widget}>
            <div className={styles.result}>
              <Button>Submit</Button>
            </div>
            <div className={styles.definition}>
              <pre>
                {`<Button>Submit</Button>`}
              </pre>
            </div>
          </div>

          <div className={styles.widget}>
            <div className={styles.result}>
              <Button disabled>Submit</Button>
            </div>
            <div className={styles.definition}>
              <pre>
                {`<Button disabled>Submit</Button>`}
              </pre>
            </div>
          </div>

          <div className={styles.widget}>
            <div className={styles.result}>
              <Button block>New Campaign</Button>
            </div>
            <div className={styles.definition}>
              <pre>
                {`<Button block>New Campaign</Button>`}
              </pre>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
