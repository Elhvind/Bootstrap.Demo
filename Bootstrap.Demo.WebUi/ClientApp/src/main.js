// Compile selected components
// import 'bootstrap/scss/bootstrap.scss';

// Compile bundled
import 'bootstrap/scss/bootstrap.scss';

// Precompiled
// import 'bootstrap/dist/css/bootstrap.css'

// Import polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'intersection-observer';
import 'mutationobserver-shim';

// Import JS dependencies
import Vue from 'vue';
import './plugins';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
