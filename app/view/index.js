import Vue from '../public/js/vue'
import router from '../src/router'
import store from './vuex'



new Vue({
	el: '#app',
	data: {
		ctx:'{{ctx.csrf}}'
	},

	beforeMount() {
		store.commit('str')
		
		
	},
	store,
	router,
	/*    render: h => h(App),
	    template: '<App/>',
	    components: {
	        App
	    }*/

})