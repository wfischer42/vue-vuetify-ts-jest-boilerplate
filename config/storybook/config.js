/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import '../../src/plugins/vuetify'

addDecorator(() => ({
  template: '<v-app><v-content><story/></v-content></v-app>',
}))

const req = require.context('../../src/stories', true, /.stories.(j|t)s$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

/* eslint-disable import/no-extraneous-dependencies */

// import '@mdi/font/css/materialdesignicons.css'

// // Ensures every story is wrapped in a v-app tag

// const req = require.context('@/stories', true, /.stories.js$/)

// function loadStories() {
//   req.keys().forEach(filename => req(filename))
// }

// configure(loadStories, module)
