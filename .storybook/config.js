import { configure } from '@storybook/vue'

import '../src/plugins/vuetify'

// automatically import all files ending in *.stories.js
const req = require.context('../src/components/', true, /\.stories\.(t|j)s$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
