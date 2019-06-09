/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import HelloWorld from './index.vue'

const stories = storiesOf('Hello World', module)

stories.add('Default View', () => ({
  components: { HelloWorld },
  template: '<HelloWorld />',
}))
