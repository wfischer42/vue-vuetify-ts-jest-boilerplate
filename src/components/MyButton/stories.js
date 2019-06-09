/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import MyButton from './index.vue'

const stories = storiesOf('MyButton', module)

stories.addDecorator(withKnobs)

stories
  .add(
    'with text',
    () => ({
      components: { MyButton },
      template: '<my-button :isDisabled="isDisabled">{{text}}</my-button>',
      props: {
        isDisabled: {
          default: boolean('Disabled', true),
        },
        text: {
          default: text('Text', 'Hello Storybook'),
        },
      },
      methods: { action: action('clicked') },
    }),
    { notes: 'A very simple example of addon notes' },
  )
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>
    },
    methods: { action: linkTo('MyButton', 'with some emoji') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }))
