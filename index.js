require('angular')
require('angular-animate')
require('angular-ui-router')

require('angular-ui-bootstrap')

import Vue from 'vue'
import App from './components/App.vue'
new Vue({
  el: '#app',
  render: h => h(App)
})
