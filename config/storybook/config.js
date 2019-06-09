/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import '@/plugins/vuetify'

addDecorator(() => ({
  template: '<v-app><v-content><story/></v-content></v-app>',
}))

const req = require.context('../../src/components/', true, /stories.(j|t)s$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
