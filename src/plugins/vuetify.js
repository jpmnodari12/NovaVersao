import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#0B090A',
    success: '#3cd1c2',
    info: '#ffaa2c',
    error: '#f83e70',
    secondary: '#FFFFFF'
  }
})
