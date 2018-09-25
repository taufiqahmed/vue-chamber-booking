import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

require('@vaadin/vaadin-button');
require('@vaadin/vaadin-text-field');
require('@vaadin/vaadin-text-field/vaadin-password-field');
require('@vaadin/vaadin-form-layout');
require('@vaadin/vaadin-lumo-styles/color');
require('@vaadin/vaadin-lumo-styles/sizing');
require('@vaadin/vaadin-lumo-styles/spacing');
require('@vaadin/vaadin-lumo-styles/style');
require('@vaadin/vaadin-lumo-styles/typography');
require('@vaadin/vaadin-lumo-styles/icons');

require('@polymer/app-layout');
require('@polymer/paper-card');


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
