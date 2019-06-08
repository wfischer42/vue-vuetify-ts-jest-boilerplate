import registerRequireContextHook from 'babel-plugin-require-context-hook/register'
registerRequireContextHook()

import Vue from 'vue'
Vue.config.ignoredElements = [
  'v-app',
  // 'another-web-component',
  // // Use a `RegExp` to ignore all elements that start with "ion-"
  // // 2.5+ only
  // /^v-/,
]

import initStoryshots from '@storybook/addon-storyshots'
initStoryshots({ configPath: './config/storybook' })
