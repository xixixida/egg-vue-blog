import Vue from '../public/js/vue'
import Vuex from '../public/js/vuex'
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        id: 0,
		name:'',
        lanmu: '',
		//csrf:'{{ctx.crsf}}'
    },
    mutations: {
        //用户进入要获取的数据
        str(state) {
            Vue.http.get('/news').then(response => {
                // get body data
                state.lanmu = response.body.lanmu;
				state.name = response.body.user
				state.id = response.body.id
            }, response => {
                // error callback
            });
        }

    },
    actions:{
        getalist(context,a,b,c){
            console.log(context)
            console.log(a)
            console.log(b)
            console.log(c)
        }
    }
})
