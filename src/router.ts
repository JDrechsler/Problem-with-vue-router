import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
// import Forum from './components/Forum.vue'
import Error404 from './components/Error404.vue'
import Chat from './components/Chat.vue'

Vue.use(VueRouter)

var routes = [
	{ path: '/home', component: Home },
	{ path: '/forum', component: () => import('./components/Forum.vue') },
	{ path: '/chat', component: Chat },
	{ path: '/', component: Home },
	{ path: '*', component: Error404 }
]

export const router = new VueRouter({
	routes,
	mode: 'history'
})