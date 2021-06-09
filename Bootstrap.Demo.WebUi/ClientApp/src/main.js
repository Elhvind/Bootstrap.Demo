// Compile selected components
import './styles/bootstrap-best/application.scss';

// Compile bundled
// import './styles/bootstrap-ok/application.scss';

// Precompiled
// import 'bootstrap/dist/css/bootstrap.css';
// import './styles/bootstrap-bad/application.scss';

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
