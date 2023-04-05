import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft,faEye,faEyeSlash,faCaretDown ,faBusinessTime, faCreditCard, faPeopleGroup,faCalendarWeek, faUser, faSignOutAlt, faCog, faBriefcase, faSearch ,faBell } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faArrowLeft,faEye,faEyeSlash,faCaretDown ,faBusinessTime, faCreditCard, faPeopleGroup,faCalendarWeek, faUser, faSignOutAlt, faCog, faBriefcase,faSearch ,faBell)
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
