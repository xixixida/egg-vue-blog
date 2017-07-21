import Vue from '../public/js/vue'
import Router from '../public/js/vue-router'


import app from './app.vue'
import login from '../src/components/login.vue'
import hello from '../src/components/hello.vue'
import article from '../src/components/article.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/0'
        },
        {
            path: '/',
            name: 'app',
            component: app,
            children: [
                {
                    path: '/:id',
                    name: 'home',
                    components: {
                        default: login,
                        hello: hello
                    },
                    beforeEnter: (to, from, next) => {
                        console.log(to)
                        console.log(from)
                        next()
                        
                    }
                },
                {
                    path:'/article:id',
                    name:'article',
                    components:{
                        default: login,
                        article:article
                    }
                }
            ]
        }
    ]
})
