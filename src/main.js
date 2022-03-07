import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library} from '@fortawesome/fontawesome-svg-core'
import { faMoon, faLongArrowAltLeft, faSearch, faChevronDown,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './styles/index.css'
library.add(faMoon,faLongArrowAltLeft, faSearch, faChevronDown,faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
