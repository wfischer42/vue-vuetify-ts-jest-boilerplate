import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'

import Vuetify, {
  VApp,
  VContent,
  VContainer,
  VLayout,
  VFlex,
  VImg,
  VIcon,
} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: { VApp, VIcon, VContent, VContainer, VLayout, VFlex, VImg },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  options: {
    customProperties: true,
  },
  iconfont: 'mdi',
})
