import Vue from 'vue'
import entry from 'components/main/ticker.template.vue'
import store from 'store'

new Vue({
  el: '#app',
  render: h => h(entry),
  store
})
