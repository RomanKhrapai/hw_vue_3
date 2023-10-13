import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import CustomButton from './components/CustomButton.vue'

const vuetify = createVuetify({ components, directives })

const app = createApp(App)

app.component('CustomButton', CustomButton)
app.use(vuetify).mount('#app')
