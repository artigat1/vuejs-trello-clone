import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import '@/plugins/fontawesome'
import router from '@/router'
import AppButton from '@/components/AppButton'
import App from '@/App.vue'

Vue.component('AppButton', AppButton)

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  pinia,
  router,
  render: h => h(App)
}).$mount('#app')
