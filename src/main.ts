import Vue from 'vue';
import App from './components/App.vue';
import Quasar, * as All from 'quasar'
import { router } from './router';
import 'quasar-extras/material-icons';
if (__THEME === 'mat') {
	require('quasar-extras/roboto-font');
}
require(`quasar/dist/quasar.${__THEME}.css`)

Vue.config.productionTip = false;

Vue.use(Quasar, {
	components: All,
	directives: All
})

Quasar.start(() => {
	new Vue({
		name: 'app',
		el: '#app',
		router,
		render: h => h(App)
	})
});
