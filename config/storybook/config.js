/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import '@/plugins/vuetify'

addDecorator(() => ({
  template: `
    <v-app>
      <div style="margin: 0 auto 0 auto; padding: 20px">
        <v-content>
          <story/>
        </v-content>
      </div>
    </v-app>`,
}))

const req = require.context('../../src/components/', true, /stories.(j|t)s$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
